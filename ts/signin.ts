import { LoginRequestC2SPacket } from "./packets/c2s/LoginRequestC2SPacket"
import { digestMessage } from "./util"

const userElement = document.getElementById("user_id") as HTMLInputElement
const passElement = document.getElementById("password") as HTMLInputElement
const errorElement = document.getElementById("error") as HTMLLabelElement

const submitElement = document.getElementById("submit") as HTMLButtonElement

submitElement.addEventListener("click",submit)

async function submit() {
    const userName = userElement.value
    const passWord = passElement.value
    const hash = digestMessage(passWord)

    if(!userName) {
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
    const packet = new LoginRequestC2SPacket(userName,await hash)
    console.log(packet)
}