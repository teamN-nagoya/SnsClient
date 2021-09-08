export function init():void {}

export const homeElement = document.getElementById("home") as HTMLButtonElement
export const profileElement = document.getElementById("profile") as HTMLButtonElement

homeElement.addEventListener("click",(event)=>{
    window.location.href = './home.html';
})
profileElement.addEventListener("click",(event)=>{
    window.location.href = './profile.html';
})