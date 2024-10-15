setInterval(function(){
    let date = new Date();
    document.getElementById("clock").innerHTML = date.toDateString() + ', ' + date.toLocaleTimeString();
    }, 1000);