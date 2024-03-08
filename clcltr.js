let output = "";

function display(value) {
  output += value;
  document.getElementById("result").value = output;
}

function clearScreen() {
  output = "";
  document.getElementById("result").value = output;
}

function calculate() {
  try {
    let result = eval(output);
    document.getElementById("result").value = result;
    output = result;
  } catch (err) {
    document.getElementById("result").value = "Error";
    output = "";
  }
}
