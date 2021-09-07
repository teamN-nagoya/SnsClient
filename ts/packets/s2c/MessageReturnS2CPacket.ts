import { S2CPacket } from "../S2CPacket";

export class MessageReturnS2CPacket extends S2CPacket {
    readonly MessageReturnS2CPacketType:null = null;
    userId: string;
    messageId: string;
    message: string;

    constructor(userId:string,messageId:string,message:string) {
        super()
        this.userId = userId
        this.messageId = messageId
        this.message = message
    }
}

export function html(packet:MessageReturnS2CPacket):Element{
    const html =  `</li>
        <div id="tweet" class="box">
            <div id="message">${packet.message}</div>
            <div id="message_id">${packet.messageId}</div>
            <button id="nice">${0}</button>
        </div>
    </li>`;
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    return tempEl.firstElementChild!!;
}