// **************** calculatrice - recuperation bouton cliqué *************************
const touches = document.querySelectorAll("button");
const result = document.querySelector("h3");

touches.forEach((touche) =>
  touche.addEventListener("click", (e) => {
    console.log(e.target.innerText);
    if (e.target.innerText == "=") {
      result.innerText = eval(result.innerText);
    } else if (e.target.innerText == "Clear") {
      result.innerText = "";
    } else {
      result.innerText += e.target.innerText;
    }
  })
);

console.log(result);
