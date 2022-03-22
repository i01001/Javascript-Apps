const inputc = document.getElementById("inputel");
const inputbuttonc = document.getElementById("inputbtn");
const del = document.getElementById("delete");
let ulistc = document.getElementById("ulist");
let leads = [];
const leadsfromls = JSON.parse(localStorage.getItem("lead"));
const testname = document.getElementById("namet");
const tabbutton = document.getElementById("tabtn");
// const tab = [{url: "https://www.google.com"}]

if(leadsfromls){
    leads = leadsfromls;
    displayy(leads)
}

del.addEventListener("dblclick", function(){
    localStorage.clear();
    leads = [];
    displayy(leads);
})

function displayy(dataa){
    let list = "";
    for(let i = 0; i < dataa.length; i++){
       // list += "<li><a href='" + leads[i] + "'target='_blank'>" + leads[i] + "</a></li>";
       list += `
       <li>
       <a href='${dataa[i]}' target='_blank'>
           ${dataa[i]}
       </a>
       </li>
       `}
      ulistc.innerHTML = list;
    }

inputbuttonc.addEventListener("click",function(){
    leads.push(inputc.value);
    inputc.value = "";
    localStorage.setItem("lead", JSON.stringify(leads));
    displayy(leads);
})

tabbutton.addEventListener("click", function(){
    // leads.push(window.location.href);
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        console.log(tabs);
        leads.push(tabs[0].url);
        localStorage.setItem("lead", JSON.stringify(leads));
        displayy(leads);
    })
})


// let random1 = ["aks", "kasdj1"]
// localStorage.setItem("tess", JSON.stringify(random1));

let rec111 = JSON.parse(localStorage.getItem("tess"));
console.log(rec111)


let data = [
    {
        player: "Jan",
        score: 121
    },
    {
        player: "Feb",
        score: 039
    }
]

for(i = 0; i < data.length; i++){
    if(data[i].player === "Jan" ){
        console.log(data[i].score);
    }
}

let descccc = "largest country";
let arr100 = ["Dubai", "Sharjah", "Ajman"];

function generatesent (desc, arr1){
    let temp = "";
    for (let i = 0; i < arr1.length; i++){
        if(i = arr1.length -1){
            temp += arr1[i] + ". ";
        }
        else{
        temp += arr1[i] + " , ";
        }
    }
    console.log(temp);

    return (`The ${arr1.length} ${desc} are ${temp}`);
}

console.log(generatesent(descccc, arr100));




//console.log(data[0].score)


// random

// function add(n1, n2){
//     return n1+n2;
// }

// function getfirst(arr){
//     return arr[0];
// }

// let random4 = ["jjf","uasd1","ajs1"]

// function message(name, message, emoji){
//     testname.textContent = `${message} to the message ${name}, ${emoji}`;
//     testname.textContent += add (9, 12);
//     testname.textContent += getfirst(random4)
// }

// message("Ikhlas", "Hello","🎇🎇🎇")


// console.log(typeof leads)
// localStorage.clear()