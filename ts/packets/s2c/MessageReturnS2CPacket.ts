import { S2CPacket } from "../S2CPacket";

export class MessageReturnS2CPacket extends S2CPacket {
    readonly MessageReturnS2CPacketType:null = null;
    userName: string;
    time: number;
    messageId: string;
    message: string;

    constructor(userName:string,time:number | Date,messageId:string,message:string) {
        super()
        this.userName = userName
        if(typeof time == "number") {
            this.time = time
        } else {
            this.time = (time as Date).getTime()
        }
        
        this.messageId = messageId
        this.message = message
    }
}



export function html(packet:MessageReturnS2CPacket):Element{
    const html =  `</li>
        <div id="tweet" class="box">
            <div id="user_name">${packet.userName}</div>
            <div id="message">${packet.message}</div>
            <div id="message_id">${packet.messageId}</div>
            <button id="nice">${0}</button>
            <div id="time">${new Date(packet.time).toLocaleString()}</div>
        </div>
    </li>`;
    const tempEl = document.createElement('div');
    tempEl.innerHTML = html;
    return tempEl.firstElementChild!!;
}