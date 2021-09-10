import { S2CPacket } from "../S2CPacket";
import * as Common from "../../common/left"
import { translate } from "../../common/translate";

export class MessageReturnS2CPacket extends S2CPacket {
    readonly MessageReturnS2CPacketType:null = null;
    userId: string;
    userName: string;
    time: number;
    messageId: string;
    message: string;

    constructor(userId:string,userName:string,time:number | Date,messageId:string,message:string) {
        super()
        this.userId = userId
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



export function html(packet:MessageReturnS2CPacket):{element:HTMLElement,messageId:string}{
    const html =  `
        <div id="tweet" class="box">
            <button id="${packet.userId}" name="show_profile">${packet.userName}</button>
            <div id="message" name=${packet.messageId}>${packet.message}</div>
            <div id="message_id">${packet.messageId}</div>
            <button id="nice">${0}</button>
            <div id="time">${new Date(packet.time).toLocaleString()}</div>
        </div>`;
    const tempEl = document.createElement('li');
    tempEl.innerHTML = html;
    return { element:tempEl!! , messageId:packet.messageId  };
}