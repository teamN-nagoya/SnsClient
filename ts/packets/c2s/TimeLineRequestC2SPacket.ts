import { C2SPacket } from "../C2SPacket";

export class TimeLineRequestC2SPacket extends C2SPacket {
    readonly TimeLineRequestC2SPacketType:null = null;
    myId: string;

    constructor(userId:string) {
        super()
        this.myId = userId
    }
}