function c(val) {
    document.getElementById("d").value = val; 
}

function v(val) {
    document.getElementById("d").value += val; 
}

function e() {
    try {
        document.getElementById("d").value = eval(document.getElementById("d").value); 
    } catch (err) {
        document.getElementById("d").value = "Error";
    }
}
