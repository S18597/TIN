function cToF() {
    let result = document.getElementById('C').value * (9/5)+32;
    document.getElementById('F').innerText = result;
}

function fToC() {
    let result = (document.getElementById('F').value-32)*(5/9);
    document.getElementById('C').innerText = result;
}

