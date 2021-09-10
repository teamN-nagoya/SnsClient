import * as Common from "./common/left"
import { webSocket } from "./common/webSocket"
import { MessageSendC2SPacket } from "./packets/c2s/MessageSendC2SPacket"

Common.init()

const postElement = document.getElementById("postTextbox") as HTMLInputElement
const submitElement = document.getElementById("postBtn") as HTMLInputElement

submitElement.addEventListener("click",(event)=>{
    if(Common.hash.myId !== undefined) {
        const packet = new MessageSendC2SPacket(Common.hash.myId,postElement.value)
        webSocket.send(JSON.stringify(packet))
    }
})