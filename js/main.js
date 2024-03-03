let close = document.querySelector(".myMark");
let body = document.querySelector(".body");
let txt = document.querySelector(".txt");
let main = document.querySelectorAll(".main-title");
let serv = document.querySelectorAll(".serv");
let mark = document.querySelector(".myMark");
let theme = document.querySelector(".theme");


function deleteMe(){
    close.classList.add("delete");
}

function setLightMode(){
    body.classList.toggle("lightBody");
    txt.classList.toggle("lightTxt");
    main.forEach((e)=>e.classList.toggle("lightMain"));
    serv.forEach((e)=>e.classList.toggle("lightServ"));
    mark.classList.toggle("lightMark");
    
    if(theme.innerHTML == `<i class="fa-solid fa-sun"></i>`){
        theme.innerHTML = `<i class="fa-solid fa-moon"></i>`;
        
    }else 
    if(theme.innerHTML == `<i class="fa-solid fa-moon"></i>`){
        theme.innerHTML = `<i class="fa-solid fa-sun"></i>`;
    }
};
theme.onclick = setLightMode;
