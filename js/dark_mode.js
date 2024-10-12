let darkmode = true;
let darkMap = new Map().set('background-color', '#020307').set('text-color', '#FFFFFF').set('button-color', '#FFFFFF');
let lightMap = new Map().set('background-color', '#E4E4E4').set('text-color', '#000000').set('button-color', '#141414');

function setDarkMode(){
    darkmode = !darkmode;
    if(darkmode){
        setStyles(darkMap);
    }
    else{
        setStyles(lightMap);
    }
}

function setStyles(map){
    document.body.style.backgroundColor = map.get("background-color");
    document.body.style.color = map.get("text-color");
    document.getElementsByClassName("darkmode-btn")[0].style.backgroundColor = map.get("button-color");
}