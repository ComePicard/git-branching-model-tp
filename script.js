function appendValue(value) {
    document.getElementById("result").value += value;
}

function calculate() {
    try {
        const expression = document.getElementById("result").value;
        const result = eval(expression);
        document.getElementById("result").value = result;

        let time = new Date();
        let expression_time = document.createElement("p");
        expression_time.textContent = `${time.getHours()}:${time.getMinutes()}:${time.getSeconds()}`;

        let historyContainer = document.getElementById("historyContainer");
        let history_expression = document.createElement("p");
        history_expression.classList.add("calcul_expression");
        history_expression.textContent = expression;

        let history_result = document.createElement("p");
        history_result.classList.add("calcul_result");
        history_result.textContent = `> ${result}`;

        let expression_line = document.createElement("div")
        expression_line.classList.add("calcul_expression_line");

        expression_line.appendChild(history_expression);
        expression_line.appendChild(expression_time);
        historyContainer.appendChild(expression_line);
        historyContainer.appendChild(history_result);

        historyContainer.scrollTop = historyContainer.scrollHeight;
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
    if(/[0-9\/\*\-\+\.]/.test(keyPressed)){
        let button = document.getElementById(`key_${keyPressed}`)
        button.classList.add('active');
    } else if(keyPressed==="Escape" || keyPressed==="Backspace"){
        let button = document.getElementById(`key_clear`)
        button.classList.add('active');
        clearResult()
    } else if(keyPressed==="Enter"){
        let button = document.getElementById(`key_=`)
        button.classList.add('active');
        calculate()
    }
})

document.addEventListener("keyup", function(event) {
    const keyPressed = event.key;
    if(/[0-9\/\*\-\+\.]/.test(keyPressed)){
        let button = document.getElementById(`key_${keyPressed}`)
        button.classList.remove('active');
    } else if(keyPressed==="Escape" || keyPressed==="Backspace"){
        let button = document.getElementById(`key_clear`)
        button.classList.remove('active');
    } else if(keyPressed==="Enter"){
        let button = document.getElementById(`key_=`)
        button.classList.remove('active');
    }
})