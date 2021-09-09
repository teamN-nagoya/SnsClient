import { webSocket } from "./common/webSocket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,html } from "./packets/s2c/MessageReturnS2CPacket"
import { TimeLineRequestC2SPacket } from "./packets/c2s/TimeLineRequestC2SPacket"
import * as Common from "./common/left"

Common.init()

const timeLineRequest = new TimeLineRequestC2SPacket(Common.hash.myId!)
console.log(timeLineRequest)

const list = document.getElementById("tweetList") as HTMLUListElement


webSocket.onmessage = (event:MessageEvent<string>) => {
    const rawPacket:S2CPacket = JSON.parse(event.data)
    if("MessageReturnS2CPacketType" in rawPacket) {
        const packet = rawPacket as MessageReturnS2CPacket
        const addContent = html(packet);
        list.appendChild(addContent);
        [...document.getElementsByName("show_profile")]
            .filter((value)=>{
                return value instanceof HTMLButtonElement
            }).forEach((value)=>{
                (value as HTMLButtonElement).addEventListener("click",(event)=>{
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