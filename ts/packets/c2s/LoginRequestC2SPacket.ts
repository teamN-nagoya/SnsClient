import { C2SPacket } from "../C2SPacket";

export class LoginRequestC2SPacket extends C2SPacket {
    packetName: string = "LoginRequestC2SPacket";
    userName: string;
    passwordHash: string;

    constructor(userName:string,passwordHash:string) {
        super()
        this.userName = userName
        this.passwordHash = passwordHash
    }
}