const inputName = document.getElementById("name-input");
const span = document.getElementById("name-output");
let anonymous = "Anonymous";

span.textContent = anonymous;

inputName.addEventListener("input", onInput);

function onInput(event) {
    span.textContent = event.target.value || anonymous;
};