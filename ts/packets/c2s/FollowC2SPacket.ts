import { C2SPacket } from "../C2SPacket";

export class FollowC2SPacket extends C2SPacket {
    readonly FollowC2SPacketType:null = null;
    followUserId: string;
    myId: string;

    constructor(followUserId:string,myId:string) {
        super()
        this.followUserId = followUserId
        this.myId = myId
    }
}