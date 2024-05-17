const btn = document.querySelector("#btn");

btn.addEventListener("click", onclick);

function onclick(event) {
  var txt = document.querySelector("#txt").value;
  var input = document.querySelector("#in").value;
  var output = document.querySelector("#out").value;

  console.log(txt);
  console.log(input);
  console.log(output);

  const command = txt.split(" ");
  console.log(command);
  let out = "";

  event.preventDefault();

  if (command[0] == "add") {
    out = add(...command);
  }
  else if (command[0] == "sub") {
    out = sub(...command);
  }
  else if (command[0] == "copy") {
    out = copy(...command);
  }
  else if (command[0] == "mult") {
    out = mult(...command);
  }
  else {
    out = badInput(...command);
  }
}

function add(...args) {
  logInput(...args);
  logOutput(String(+args[1] + +args[2]));
}

function sub(...args) {
  logInput(...args);
  logOutput(String(+args[1] - +args[2]));
}

function copy(...args) {
  user_input = getInput();
  document.getElementById("out").value = user_input;
}

function mult(...args) {
  user_input = logInput(...args);
  logOutput(String(+args[1] * +args[2]));
}

function badInput(...args) {
  var txt = document.getElementById("out");
  var badFn = args[0];
  txt.value = "The function " + badFn + " does not exist. Try again."
}

function logInput(...args) {
  // want to tell the user what command they have executed.
  var txt = document.getElementById("in");
  txt.value = `const a = ${args[1]}\nconst b = ${args[2]}\nfunction to execute: ${args[0]}`;
}

function logOutput(num) {
  var txt = document.getElementById("out");
  txt.value = `The result is ${+num}`;
}

function getInput() {
  var txt = document.getElementById("in").value;
  return txt;
}
