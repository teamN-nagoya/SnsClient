import { Hash } from "../Hash";

export function init():void {}

export const homeElement = document.getElementById("home") as HTMLAnchorElement
export const profileElement = document.getElementById("profile") as HTMLAnchorElement
export const settingElement = document.getElementById("settings") as HTMLAnchorElement
export const postElement = document.getElementById("post") as HTMLAnchorElement

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
settingElement.addEventListener("click",(event)=>{
    window.location.href = `./setting.html#${JSON.stringify(hash)}`;
    location.hash = ""
})
postElement.addEventListener("click",(event)=>{
    hash.userId = hash.myId
    window.location.href = `./post.html#${JSON.stringify(hash)}`;
    location.hash = ""
})