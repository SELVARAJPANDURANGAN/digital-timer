function end(){
date=new Date();
hour=date.getHours();
minutes=date.getMinutes();
second=date.getSeconds();
timing=date.toLocaleTimeString();
x=document.getElementById("stopwatch1");
x.innerHTML=timing;

}
function start(){

    clear = setInterval(end,1000);
}
function stop(){

    clearInterval(clear);
}

function reset(){
    stop()
    second = 0 ;
    x.innerHTML= `00:00:00`
}


