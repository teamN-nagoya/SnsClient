import { webSocket } from "./common/webSocket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,html } from "./packets/s2c/MessageReturnS2CPacket"
import { TimeLineRequestC2SPacket } from "./packets/c2s/TimeLineRequestC2SPacket"
import * as Common from "./common/left"
import { translate } from "./common/translate"

Common.init()

const timeLineRequest = new TimeLineRequestC2SPacket(Common.hash.myId!)

webSocket.send(JSON.stringify(timeLineRequest))

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
        [...document.getElementsByName("show_profile")]
            .filter((value)=>{
                return value instanceof HTMLAnchorElement
            }).forEach((value)=>{
                (value as HTMLAnchorElement).addEventListener("click",(event)=>{
                    Common.hash.userId = value.id
                    window.location.href = `./profile.html#${JSON.stringify(Common.hash)}`;
                    location.hash = ""
                })
            })
    }
}

webSocket.onmessage(new MessageEvent('worker', {
    data : JSON.stringify(new MessageReturnS2CPacket("chloro13827","くろろ",Date.now(),"ae","俺は神だ"))
}))