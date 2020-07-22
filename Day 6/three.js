const name = prompt("Enter your name", "vinutha");


const dmode = document.getElementById('dark');

dmode.onclick=function changeColor(){
    document.body.style.backgroundColor='black';
    document.body.style.color='white';
    document.body.style.fontFamily='Helvetica';
}

const ctime =document.getElementById('time');
function clock(){
    let date = new Date();
    let time = date.toLocaleTimeString();
    ctime.innerText = time;
}

setInterval(clock,1000);

