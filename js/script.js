let darkmode = true;

function setDarkMode(){
    darkmode = !darkmode;
    if(darkmode){
        document.body.classList.remove('light');
    }
    else{
        document.body.classList.add('light');
    }
}

setInterval(function(){
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toDateString() + ', ' + date.toLocaleTimeString();
    }, 1000);