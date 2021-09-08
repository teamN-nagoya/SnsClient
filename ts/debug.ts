import { Hash } from "./hash";

const signinElement = document.getElementById("signin") as HTMLButtonElement


signinElement.addEventListener("click",(event)=>{
    window.location.href = `./home.html#${JSON.stringify(new Hash("yuuki1101927",undefined))}`
})