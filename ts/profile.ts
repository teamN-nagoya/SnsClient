import { webSocket } from "./common/webSocket"
import { MessagesRequestC2SPacket } from "./packets/c2s/MessagesRequestC2SPacket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,html } from "./packets/s2c/MessageReturnS2CPacket"
import { ProfileReturnS2CPacket } from "./packets/s2c/ProfileReturnS2CPacket"
import { ProfileRequestC2SPacket } from "./packets/c2s/ProfileRequestC2SPacket"
import * as left from "./common/left"
import { FollowC2SPacket } from "./packets/c2s/FollowC2SPacket"
import { Hash } from "./hash"
import { UnFollowC2SPacket } from "./packets/c2s/UnFollowC2SPacket"

left.init()

const userNameElement = document.getElementById("user_name") as HTMLButtonElement
const userIdElement = document.getElementById("user_id") as HTMLButtonElement
const followElement = document.getElementById("follow") as HTMLButtonElement

type FollowTypes = "Follow" | "Following" | "Edit Profile";

let hash = JSON.parse(decodeURI(location.hash.substring(1))) as Hash
if(!hash.userId) {
    hash.userId = "yuuki1101927"
}

userIdElement.textContent = hash.userId

console.log(`userId:${hash.userId},myId:${hash.myId}`)
if(hash.userId == hash.myId) {
    console.log("z")
    followElement.textContent = "Edit Profile"
}

followElement.addEventListener("click",(event)=>{
    const followType:FollowTypes = followElement.textContent as FollowTypes
    switch(followType) {
        case "Follow":
            followElement.textContent = "Following"
            console.log(new UnFollowC2SPacket(hash.userId!,hash.myId!))
            break;
        case "Following":
            followElement.textContent = "Follow"
            console.log(new FollowC2SPacket(hash.userId!,hash.myId!))
            break;
        case "Edit Profile":
            break;
    }
})

const profileRequest = new ProfileRequestC2SPacket(hash.myId!!,hash.userId)
const messageRequest = new MessagesRequestC2SPacket(hash.userId)
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
        userNameElement.textContent = packet.userName
        if(followElement.textContent != "Edit Profile") if(packet.following) {
            followElement.textContent = "Following"
        }
    }
}

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new MessageReturnS2CPacket("yuuki1101927",Date.now(),"ae","俺は神だ"))
}))

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new ProfileReturnS2CPacket("ゆうきくん",true))
}))