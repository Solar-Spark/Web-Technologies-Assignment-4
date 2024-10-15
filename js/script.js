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

function sortNumbers(input, order = 'asc') {
    // Convert the input string into an array of numbers
    let numArray = input.split(/[\s,]+/).map(Number);
    
    // Sort the array based on the order parameter
    numArray.sort(function(a, b) {
        return order === 'asc' ? a - b : b - a;
    });
    
    return numArray;
}

document.getElementById('sortButton').addEventListener('click', function() {
    const userInput = document.getElementById('numberInput').value;
    const sortOrder = document.getElementById('sortOrder').value;
    
    const sortedNumbers = sortNumbers(userInput, sortOrder);
    document.getElementById('result').innerText = sortedNumbers.join(', ');
});

