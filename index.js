let display = document.getElementById("display");

function limpar() {
  display.value = "";
}

function del() {
  display.value = display.value.slice(0, -1);
}

function append(character) {
  display.value += character;
}

function resultado() {
  try {
    if (display.value.includes("%")) {
      display.value = eval(display.value.replace("%", "/100"));
    } else {
      display.value = eval(display.value);
    }
  } catch (error) {
    display.value = "Erro";
  }
}
