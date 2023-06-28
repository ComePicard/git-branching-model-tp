function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        const result = eval(document.getElementById("result").value);
        document.getElementById("result").value = result;
    } catch (error) {
        document.getElementById("result").value = "Error";
    }
}

function clearResult() {
    document.getElementById("result").value = "";
}

function clearError() {
    document.getElementById("result").value = "";
}

document.addEventListener("keypress", function(event) {
    const keyPressed = event.key;
    if (/[0-9\/\*\-\+\.]/.test(keyPressed)) {
        appendValue(keyPressed);
    } else if (parseInt(event.key) === 13) {
        calculate();
    }
});

document.addEventListener("keydown", function(event) {
    const keyPressed = event.key;
    console.log(keyPressed)
    if(/[0-9\/\*\-\+\.]/.test(keyPressed)){
        var button = document.getElementById(`key_${keyPressed}`)
        button.classList.add('active');
    } else if(keyPressed==="Escape" || keyPressed==="Backspace"){
        var button = document.getElementById(`key_clear`)
        button.classList.add('active');
        clearResult()
    } else if(keyPressed==="Enter"){
        var button = document.getElementById(`key_=`)
        button.classList.add('active');
        calculate()
    }
})

document.addEventListener("keyup", function(event) {
    const keyPressed = event.key;
    if(/[0-9\/\*\-\+\.]/.test(keyPressed)){
        var button = document.getElementById(`key_${keyPressed}`)
        button.classList.remove('active');
    } else if(keyPressed==="Escape" || keyPressed==="Backspace"){
        var button = document.getElementById(`key_clear`)
        button.classList.remove('active');
    } else if(keyPressed==="Enter"){
        var button = document.getElementById(`key_=`)
        button.classList.remove('active');
        calculate()
    }
})