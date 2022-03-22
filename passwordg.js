let char = [];
for(let i = 33; i <= 126;i++){
    char.push(String.fromCharCode(i))
}

let passa = {
    1: pass1 = document.getElementById("pass1"),
    2: pass2 = document.getElementById("pass2"),
    3: pass3 = document.getElementById("pass3"),
    4: pass4 = document.getElementById("pass4")
}

let messagel = document.getElementById("messagel");

function generate(){
let size = document.getElementById("sizel").value;
if (size < 8){
    messagel.textContent = "Enter a number greater than 7 characters for a secure password."
    return;
}
else{
    messagel.textContent = "";
for(let j = 1; j <= 4; j++){
    passa[j].textContent = "";
for(let i = 0; i < size; i++){
    passa[j].textContent += char[Math.floor(Math.random()*94)];
}}
messagel.textContent = "Click on password to copy to clipboard."
}}

function copy1(){
    navigator.clipboard.writeText(pass1.textContent)
}

function copy2(){
    navigator.clipboard.writeText(pass2.textContent)
}

function copy3(){
    navigator.clipboard.writeText(pass3.textContent)
}

function copy4(){
    navigator.clipboard.writeText(pass4.textContent)
}





























































