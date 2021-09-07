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
    const rawPacket:S2CPacket = new MessageReturnS2CPacket("yuuki1101927","ae","俺は神だ")
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        const html = packet.toHtml()
        list.appendChild(html)
    }
}

const fake = new MessageReturnS2CPacket("yuuki1101927","ae","I am a god. Do you are")
webSocket.onmessage(new MessageEvent(JSON.stringify(fake)))