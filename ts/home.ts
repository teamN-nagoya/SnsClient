import { myId, webSocket } from "./webSocket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,html } from "./packets/s2c/MessageReturnS2CPacket"
import { ProfileRequestC2SPacket } from "./packets/c2s/ProfileRequestC2SPacket"
import * as left from "./common/left"
import { TimeLineRequestC2SPacket } from "./packets/c2s/TimeLineRequestC2SPacket"

left.init()

const timeLineRequest = new TimeLineRequestC2SPacket(myId)
console.log(timeLineRequest)

const list = document.getElementById("tweetList") as HTMLUListElement


webSocket.onmessage = (event:MessageEvent<string>) => {
    const rawPacket:S2CPacket = JSON.parse(event.data)
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        list.appendChild(html(packet))
    }
}

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new MessageReturnS2CPacket("yuuki1101927",Date.now(),"ae","俺は神だ"))
}))