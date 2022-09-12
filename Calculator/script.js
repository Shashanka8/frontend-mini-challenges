document.querySelector("#one").addEventListener("click", () => {
  document.forms.display.value += 1;
});

document.querySelector("#two").addEventListener("click", () => {
  document.forms.display.value += 2;
});

document.querySelector("#three").addEventListener("click", () => {
  document.forms.display.value += 3;
});

document.querySelector("#four").addEventListener("click", () => {
  document.forms.display.value += 4;
});

document.querySelector("#five").addEventListener("click", () => {
  document.forms.display.value += 5;
});

document.querySelector("#six").addEventListener("click", () => {
  document.forms.display.value += 6;
});

document.querySelector("#seven").addEventListener("click", () => {
  document.forms.display.value += 7;
});

document.querySelector("#eight").addEventListener("click", () => {
  document.forms.display.value += 8;
});

document.querySelector("#nine").addEventListener("click", () => {
  document.forms.display.value += 9;
});

document.querySelector("#zero").addEventListener("click", () => {
  document.forms.display.value += 0;
});

document.querySelector("#add").addEventListener("click", () => {
  document.forms.display.value += "+";
});

document.querySelector("#subs").addEventListener("click", () => {
  document.forms.display.value += "-";
});

document.querySelector("#multi").addEventListener("click", () => {
  document.forms.display.value += "*";
});

document.querySelector("#divide").addEventListener("click", () => {
  document.forms.display.value += "/";
});

document.querySelector("#dot").addEventListener("click", () => {
  document.forms.display.value += ".";
});

document.querySelector("#equal").addEventListener("click", () => {
  if (display.value == "") {
    alert("Please enter any numbers to calculate");
  } else {
    document.forms.display.value = eval(document.forms.display.value);
  }
});

document.querySelector("#clear").addEventListener("click", () => {
  document.forms.display.value = "";
});
