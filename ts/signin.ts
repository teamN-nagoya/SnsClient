import { Hash } from "./Hash"
import { SignInRequestC2SPacket } from "./packets/c2s/SignInRequestC2SPacket"
import { digestMessage } from "./common/util"
import { webSocket } from "./common/webSocket"

const myIdElement = document.getElementById("user_id") as HTMLInputElement
const passElement = document.getElementById("password") as HTMLInputElement
const errorElement = document.getElementById("error") as HTMLLabelElement

const submitElement = document.getElementById("submit") as HTMLButtonElement

submitElement.addEventListener("click",submit)

webSocket.onmessage = (event:MessageEvent<string>) => {
    if(event.data == "Login execution!") {
        window.location.href = `./home.html#${JSON.stringify(new Hash(myIdElement.value,undefined))}`;
    }
}


async function submit() {
    const userId = myIdElement.value
    const passWord = passElement.value
    const hash = digestMessage(passWord)

    if(!userId) {
        errorElement.textContent = "ユーザーIDを入力してください。"
        return
    }
    if(!passWord) {
        errorElement.textContent = "パスワードを入力してください。"
        return
    }
    if(passWord.length < 5) {
        errorElement.textContent = "パスワードは5文字以上です。"
        return
    }

    myIdElement.readOnly = true
    passElement.readOnly = true

    const packet = new SignInRequestC2SPacket(userId,await hash)
    webSocket.send(JSON.stringify(packet))
}