import { C2SPacket } from "../C2SPacket";

export class SignUpRequestC2SPacket extends C2SPacket {
    _signUpRequestC2S:never;
    userId: string;
    userName: string;
    passwordHash: string;

    constructor(userId:string,userName:string,passwordHash:string) {
        super()
        this.userId = userId
        this.userName = userName
        this.passwordHash = passwordHash
    }
}