import { digestMessage } from "./util"
import { webSocket } from "./webSocket"
import { MessagesRequestC2SPacket } from "./packets/c2s/MessagesRequestC2SPacket"


let userId = location.hash
if(!userId) {
    location.hash = "yuuki1101927"
    userId = "yuuki1101927"
}

const request = new MessagesRequestC2SPacket(userId)
console.log(request)