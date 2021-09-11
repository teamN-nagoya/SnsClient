import { webSocket } from "./common/webSocket"
import { S2CPacket } from "./packets/S2CPacket"
import { MessageReturnS2CPacket,htmlM } from "./packets/s2c/MessageReturnS2CPacket"
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
        translate(packet.message,(output)=>{
            packet.message = output
            const { element,messageId } = htmlM(packet)
            list.appendChild(element);
            messageSort();
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
        });
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