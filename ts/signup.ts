import { SignUpRequestC2SPacket } from "./packets/c2s/SignUpRequestC2SPacket"
import { digestMessage } from "./common/util"
import { webSocket } from "./common/webSocket"

const userIdElement = document.getElementById("user_id") as HTMLInputElement
const userNameElement = document.getElementById("user_name") as HTMLInputElement
const passElement = document.getElementById("password") as HTMLInputElement
const errorElement = document.getElementById("error") as HTMLLabelElement

const submitElement = document.getElementById("submit") as HTMLButtonElement

submitElement.addEventListener("click",submit)

webSocket.onmessage = (event:MessageEvent<string>) => {
    if(event.data == "Login execution!") {
        let loc = window.location
        loc.href = "./signin.html";
        window.location = loc
    }
}

async function submit() {
    const userId = userIdElement.value
    const userName = userNameElement.value
    const passWord = passElement.value
    const hash = digestMessage(passWord)

    if(!userId) {
        errorElement.textContent = "ユーザーIDを入力してください。"
        return
    }
    if(!userName) {
        errorElement.textContent = "ユーザーネームを入力してください。"
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
    const packet = new SignUpRequestC2SPacket(userId,userName,await hash)
    webSocket.send(JSON.stringify(packet))
}