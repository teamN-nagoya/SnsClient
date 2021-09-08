import { C2SPacket } from "../C2SPacket";

export class FollowRequestC2SPacket extends C2SPacket {
    readonly FollowRequestC2SPacketType:null = null;
    followUserId: string;
    myId: string;

    constructor(followUserId:string,myId:string) {
        super()
        this.followUserId = followUserId
        this.myId = myId
    }
}