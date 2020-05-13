// JavaScript code goes here!

console.log('it\'s animal feeding time');

let pigFedCount = 0;
function feedPig() {
    console.log("Pig is getting fed.");
    pigFedCount++; // increment pigFedCount
    let span = document.querySelector('#pig-eaten');
    span.textContent = pigFedCount;
}

let horseFedCount = 0;
function feedHorse() {
    console.log("Horse is getting fed.");
    // increment pigFedCount
    if (horseFedCount > 9) {
        alert("Stop feeding me, I'm full!");
        return;
    }
    horseFedCount++; 
    let span = document.querySelector('#horse-eaten');
    span.textContent = horseFedCount;
}

let goatFedCount = 0;
function feedGoat() {
    console.log("Goat is getting fed.");
    goatFedCount++; // increment pigFedCount
    let span = document.querySelector('#goat-eaten');
    span.textContent = goatFedCount;
    horseFedCount = Math.floor(horseFedCount / 2);
    pigFedCount = Math.floor(pigFedCount /2);
    
    span = document.querySelector('#horse-eaten');
    span.textContent = horseFedCount;
    span = document.querySelector('#pig-eaten');
    span.textContent = pigFedCount;
}
