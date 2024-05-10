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

  if (command[0] == "sub") {
    out = sub(...command);
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

function logInput(...args) {
  // want to tell the user what command they have executed.
  var txt = document.getElementById("in");
  txt.value = `const a = ${args[1]}\nconst b = ${args[2]}\nfunction to execute: ${args[0]}`;
}

function logOutput(num) {
  var txt = document.getElementById("out");
  txt.value = `The result is ${+num}`;
}
