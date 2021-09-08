import { myId, webSocket } from "./webSocket"
import { MessagesRequestC2SPacket } from "./packets/c2s/MessagesRequestC2SPacket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,html } from "./packets/s2c/MessageReturnS2CPacket"
import { ProfileReturnS2CPacket } from "./packets/s2c/ProfileReturnS2CPacket"
import { ProfileRequestC2SPacket } from "./packets/c2s/ProfileRequestC2SPacket"
import * as left from "./common/left"

left.init()

let userId = location.hash
if(!userId) {
    location.hash = "yuuki1101927"
    userId = "yuuki1101927"
}

const userName = document.getElementById("user_name") as HTMLButtonElement
const follow = document.getElementById("follow") as HTMLButtonElement

if(userId == myId) {
    follow.textContent = "Edit Profile"
}

const profileRequest = new ProfileRequestC2SPacket(userId)
const messageRequest = new MessagesRequestC2SPacket(userId)
console.log(profileRequest)
console.log(messageRequest)

const list = document.getElementById("tweetList") as HTMLUListElement

webSocket.onmessage = (event:MessageEvent<string>) => {
    const rawPacket:S2CPacket = JSON.parse(event.data)
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        list.appendChild(html(packet))
    } else if("ProfileReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as ProfileReturnS2CPacket
        userName.textContent = packet.userName
        if(packet.following) {
            follow.textContent = "Following"
        }
    }
}

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new MessageReturnS2CPacket("yuuki1101927",Date.now(),"ae","俺は神だ"))
}))

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new ProfileReturnS2CPacket("ゆうきくん",true))
}))