import { webSocket } from "./webSocket"
import { MessagesRequestC2SPacket } from "./packets/c2s/MessagesRequestC2SPacket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket } from "./packets/s2c/MessageReturnS2CPacket"


let userId = location.hash
if(!userId) {
    location.hash = "yuuki1101927"
    userId = "yuuki1101927"
}

const request = new MessagesRequestC2SPacket(userId)
console.log(request)

const list = document.getElementById("tweetList") as HTMLUListElement

webSocket.onmessage = (event:MessageEvent<string>) => {
    const json = event.data
    const rawPacket:S2CPacket = JSON.parse(json)
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        const html = packet.toHtml()
        list.appendChild(html)
    }
}