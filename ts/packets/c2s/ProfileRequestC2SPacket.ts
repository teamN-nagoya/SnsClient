import { C2SPacket } from "../C2SPacket";

export class ProfileRequestC2SPacket extends C2SPacket {
    readonly ProfileRequestC2SPacketType:null = null;
    myId: string;
    userId: string;

    constructor(myId:string,userId:string) {
        super()
        this.myId = myId
        this.userId = userId
    }
}