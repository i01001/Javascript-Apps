
let count = 0;
let val5 = document.getElementById("numbering");
let message = "you have 3 new messages"
let username = "mohammad"
let longmessage = message + ", " + username + "!!"
let person = "Ikhlas";
let intromessage = "Welcome to the Counting App"
let welcomeEl = document.getElementById("welcome");
let recording =document.getElementById("records");
let errormess = document.getElementById("errortext"); 
let numberaa = document.getElementById("numbera");
let numberbb = document.getElementById("numberb");
let summ = document.getElementById("sum");
let xyz = 0;
let inputcon = document.getElementById("feed");
let lengthline = document.getElementById("lengthout");
let volline = document.getElementById("volout");
let massline = document.getElementById("massout");

function testing(){
    lengthline.textContent = inputcon.value + " meters = " + (inputcon.value*3.28084).toFixed(3) + " feet | " + inputcon.value + " feet = " + (inputcon.value/3.28084).toFixed(3) + " meters";
    volline.textContent = inputcon.value + " litres = " + (inputcon.value*0.264172).toFixed(3) + " gallons | " + inputcon.value + " gallons = " + (inputcon.value/0.264172).toFixed(3) + " litres";
    massline.textContent = inputcon.value + " Kilos = " + (inputcon.value*2.20462).toFixed(3) + " pounds | " + inputcon.value + " pounds = " + (inputcon.value/2.20462).toFixed(3) + " kilos";
}

function adding(){
    xyz = numberaa.value*1 +  numberbb.value*1;
    summ.textContent = "SUM: " + xyz;
}

function minus(){
    xyz = numberaa.value*1 - numberbb.value*1;
    summ.textContent = "SUM: " + xyz;
}

function division(){
    xyz = numberaa.value*1 / numberbb.value*1;
    summ.textContent = "SUM: " + xyz;
}

function multiply(){
    xyz = numberaa.value*1 * numberbb.value*1;
    summ.textContent = "SUM: " + xyz;
}

function functforcount(){
    count++;
    val5.textContent = count;
}

function save(){
    console.log(count)
    recording.textContent += count + " - ";
    count = 0;
    val5.textContent = count;
}

function purchase(){
    errormess.textContent = "Something went wrong, please try again!"
}

welcomeEl.textContent = person + " , " + intromessage;
welcomeEl.textContent += "👋";
