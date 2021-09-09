import { Hash } from "../hash";

export function init():void {}

export const homeElement = document.getElementById("home") as HTMLButtonElement
export const profileElement = document.getElementById("profile") as HTMLButtonElement

export let hash = JSON.parse(decodeURI(location.hash.substring(1))) as Hash
location.hash = ""

homeElement.addEventListener("click",(event)=>{
    window.location.href = `./home.html#${JSON.stringify(hash)}`;
    location.hash = ""
})
profileElement.addEventListener("click",(event)=>{
    hash.userId = hash.myId
    window.location.href = `./profile.html#${JSON.stringify(hash)}`;
    location.hash = ""
})