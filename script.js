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

