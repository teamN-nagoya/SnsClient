import { webSocket } from "./common/webSocket"
import { MessagesRequestC2SPacket } from "./packets/c2s/MessagesRequestC2SPacket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,html } from "./packets/s2c/MessageReturnS2CPacket"
import { ProfileReturnS2CPacket } from "./packets/s2c/ProfileReturnS2CPacket"
import { ProfileRequestC2SPacket } from "./packets/c2s/ProfileRequestC2SPacket"
import { FollowC2SPacket } from "./packets/c2s/FollowC2SPacket"
import * as Common from "./common/left"
import { UnFollowC2SPacket } from "./packets/c2s/UnFollowC2SPacket"
import { translate } from "./common/translate"

Common.init()

const userNameElement = document.getElementById("user_name") as HTMLButtonElement
const userIdElement = document.getElementById("user_id") as HTMLButtonElement
const followElement = document.getElementById("follow") as HTMLButtonElement

type FollowTypes = "Follow" | "Following" | "Edit Profile";

if(!Common.hash.userId) {
    Common.hash.userId = "yuuki1101927"
}

userIdElement.textContent = Common.hash.userId

console.log(`userId:${Common.hash.userId},myId:${Common.hash.myId}`)
if(Common.hash.userId == Common.hash.myId) {
    console.log("z")
    followElement.textContent = "Edit Profile"
}

followElement.addEventListener("click",(event)=>{
    const followType:FollowTypes = followElement.textContent as FollowTypes
    switch(followType) {
        case "Follow":
            followElement.textContent = "Following"
            console.log(new UnFollowC2SPacket(Common.hash.userId!,Common.hash.myId!))
            break;
        case "Following":
            followElement.textContent = "Follow"
            console.log(new FollowC2SPacket(Common.hash.userId!,Common.hash.myId!))
            break;
        case "Edit Profile":
            break;
    }
})

const profileRequest = new ProfileRequestC2SPacket(Common.hash.myId!!,Common.hash.userId)
const messageRequest = new MessagesRequestC2SPacket(Common.hash.userId)

webSocket.send(JSON.stringify(profileRequest))
webSocket.send(JSON.stringify(messageRequest))

const list = document.getElementById("posts") as HTMLUListElement

webSocket.onmessage = (event:MessageEvent<string>) => {
    const rawPacket:S2CPacket = JSON.parse(event.data)
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        const { element,messageId } = html(packet)
        list.appendChild(element);
        translate(packet.message,(output)=>{
            document.getElementsByName(messageId).forEach((elem)=>{
                elem.innerHTML = output
            })
        });
    } else if("ProfileReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as ProfileReturnS2CPacket
        userNameElement.textContent = packet.userName
        if(followElement.textContent != "Edit Profile") if(packet.following) {
            followElement.textContent = "Following"
        }
    }
}

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new ProfileReturnS2CPacket("サンプル",true))
}))

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new MessageReturnS2CPacket("sample","サンプル",Date.now(),"sample_1","俺は神だ"))
}))