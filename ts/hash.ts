export class Hash {
    readonly HashType:null = null;
    myId:string | undefined
    userId: string | undefined;

    constructor(myId:string | undefined, userId:string | undefined) {
        this.myId = myId
        this.userId = userId
    }
}