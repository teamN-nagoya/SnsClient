import { S2CPacket } from "../S2CPacket";

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



export function htmlM(packet:MessageReturnS2CPacket):{element:Element,messageId:string}{
    const html =  `
        <div class="post" name="${packet.time}">
            <img class="userIcon" src=".././img/profile.svg" alt="userIcon">
            <div class="postTextBox">
                <a class="userName" id="${packet.userId}" name="show_profile">${packet.userName}</a>
                <p class="postText">${packet.message}</p>
                <p id="message_id">${packet.messageId}</p>
                <p id="time">${new Date(packet.time).toLocaleString()}</p>
                <div class="heart">
                    <img class="heartIcon" src=".././img/heart.svg" alt="heartIcon">
                    <div class="heartCount">0</div>
                </div>
            </div>
        </div>`;
    const tempEl = document.createElement('li');
    tempEl.innerHTML = html;
    return { element:tempEl!!.firstElementChild!! , messageId:packet.messageId  };
}