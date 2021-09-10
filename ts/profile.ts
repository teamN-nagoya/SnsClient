import { webSocket } from "./common/webSocket"
import { MessagesRequestC2SPacket } from "./packets/c2s/MessagesRequestC2SPacket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,htmlM } from "./packets/s2c/MessageReturnS2CPacket"
import { ProfileReturnS2CPacket } from "./packets/s2c/ProfileReturnS2CPacket"
import { ProfileRequestC2SPacket } from "./packets/c2s/ProfileRequestC2SPacket"
import { FollowC2SPacket } from "./packets/c2s/FollowC2SPacket"
import * as Common from "./common/left"
import { UnFollowC2SPacket } from "./packets/c2s/UnFollowC2SPacket"
import { translate } from "./common/translate"
import { UserFollowersC2SPacket } from "./packets/c2s/UserFollowersC2SPacket"
import { FollowersReturnS2CPacket,htmlF } from "./packets/s2c/FollowersReturnS2CPacket"

Common.init()

const userNameElement = document.getElementById("user_name") as HTMLButtonElement
const userIdElement = document.getElementById("user_id") as HTMLButtonElement
const followersElement = document.getElementById("followers") as HTMLAnchorElement
const followersTextElement = document.getElementById("followerText") as HTMLAnchorElement

type FollowTypes = "All Followers" | "Others Followers"

if(!Common.hash.userId) {
    Common.hash.userId = "yuuki1101927"
}

userIdElement.textContent = Common.hash.userId

console.log(`userId:${Common.hash.userId},myId:${Common.hash.myId}`)

followersTextElement.addEventListener("click",(event)=>{
    if(Common.hash.userId == Common.hash.myId) return
    const followType:FollowTypes = followersTextElement.textContent as FollowTypes
    switch(followType) {
        case "Others Followers":
            followersTextElement.textContent = "All Followers"
            webSocket.send(JSON.stringify(new UnFollowC2SPacket(Common.hash.userId!,Common.hash.myId!)))
            break;
        case "All Followers":
            followersTextElement.textContent = "Others Followers"
            webSocket.send(JSON.stringify(new FollowC2SPacket(Common.hash.userId!,Common.hash.myId!)))
            break;
    }
})

const profileRequest = new ProfileRequestC2SPacket(Common.hash.myId!!,Common.hash.userId)
const messageRequest = new MessagesRequestC2SPacket(Common.hash.userId)
const followersRequest = new UserFollowersC2SPacket(Common.hash.userId)

webSocket.send(JSON.stringify(profileRequest))
webSocket.send(JSON.stringify(messageRequest))
webSocket.send(JSON.stringify(followersRequest))

const list = document.getElementById("posts") as HTMLUListElement

webSocket.onmessage = (event:MessageEvent<string>) => {
    const rawPacket:S2CPacket = JSON.parse(event.data)
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        const { element,messageId } = htmlM(packet)
        list.appendChild(element);
        messageSort()
        translate(packet.message,(output)=>{
            document.getElementsByName(messageId).forEach((elem)=>{
                elem.innerHTML = output
            })
        });
    } else if("ProfileReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as ProfileReturnS2CPacket
        userNameElement.textContent = packet.userName
        if(packet.following) {
            followersTextElement.textContent = "Others Followers"
        }
    } else if("FollowersReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as FollowersReturnS2CPacket
        packet.followerUserIds = packet.followerUserIds.filter((element)=>{return element!=Common.hash.myId})
        const { element,followerUserIds } = htmlF(packet)
        followersElement.appendChild(element);
        followerUserIds.forEach((userId)=>{
            document.getElementById(`_${userId}`)?.addEventListener("click",()=>{
                Common.hash.userId = userId
                window.location.href = `./profile.html#${JSON.stringify(Common.hash)}`;
                location.reload()
                location.hash = ""
            })
        })
    }
}

function messageSort() {
    const messageList = [...list.children]
    const after = messageList.sort(function(a:Element,b:Element){
        const an = parseInt(a.getAttribute("name")!!,10)
        const bn = parseInt(b.getAttribute("name")!!,10)
        if( an < bn ) return 1;
        if( an > bn ) return -1;
        return 0;
    });
    list.replaceChildren()
    after.forEach((element)=>{
        list.appendChild(element)
    })
}