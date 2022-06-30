// alert("bonjour !")
// const b_h4 = document.querySelector("h4");
// console.log(b_h4);
// b_h4.style.background = "yellow";

// ************* click event ************

const questioncontainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const response = document.querySelector("p");

// console.log(questioncontainer);
questioncontainer.style.borderRadius = "20px";
questioncontainer.addEventListener("click", () => {
  // console.log("Click!");
  questioncontainer.classList.toggle("questioncontainerclick");
});

btn1.addEventListener("click", () => {
  response.style.background = "green";
  response.style.visibility = "visible";
});

btn2.addEventListener("click", () => {
  response.style.visibility = "visible";
  response.style.background = "red";
});

// console.log(response);
btn1.addEventListener("click", () => {
  // console.log("clik btn1 !");
});

// ************ mouse events ********************

const mousemove = document.querySelector(".mousemove");
// console.log("mm :", mousemove)
window.addEventListener("mousemove", (e) => {
  // console.log("mouse is mouving!");
  // console.log(e);
  // console.log(e.target);
  mousemove.style.top = e.pageY + "px";
  mousemove.style.left = e.pageX + "px";
});

window.addEventListener("mousedown", () => {
  // console.log("mouse is down !!!");
  mousemove.style.transform = "scale(1.5) translate(-33%, -33%)";
});
window.addEventListener("mouseup", () => {
  // console.log("mouse is UP !!!");
  mousemove.style.transform = "scale(1) translate(-50%, -50%)";
});

questioncontainer.addEventListener("mouseenter", () => {
  questioncontainer.style.background = "rgba(0,0,0,0.3)";
});

questioncontainer.addEventListener("mouseout", () => {
  questioncontainer.style.background = "rgba(0,0,0,1)";
});
response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

// **************** audio *************************
const ring = () => {
  const audio = new Audio();
  audio.src = "Enter.mp3";
  audio.play();
};
// ************** keypress event *******************
const keypressContainer = document.querySelector(".keypress");
// console.log("keycontain : ", keypressContainer);
const key = document.getElementById("key");
// console.log(key);
document.addEventListener("keypress", (e) => {
  // console.log(e);
  key.innerText = e.key;
  if (e.key === "a") {
    // console.log("bingo!");
    ring();
  }
});

// **************** scroll event *************************

const nav = document.querySelector("nav");
// console.log(nav);
window.addEventListener("scroll", () => {
  //   console.log("I'm scrolling !");
  //   console.log(window.scrollY);
  if (window.scrollY > 50) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-50px";
  }
});

// **************** formulaire event *************************

const inputName = document.querySelector('input[type="text"]');
// console.log(inputName);
let pseudo = "";
inputName.addEventListener("input", (e) => {
  //   console.log("I'm inputing !");
  //   console.log(e.target.value);
  pseudo = e.target.value;
});
const select = document.querySelector("select");
// console.log(select);
let language = "";
select.addEventListener("input", (e) => {
  console.log(e.target.value);
  language = e.target.value;
});

const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  //   console.log("validé !");
  if (cgv.checked) {
    console.log("cgv checked");
    // console.log(document.querySelector("form > div"));
    document.querySelector("form > div").innerHTML = `
    <h3>Nom entré : ${pseudo}</h3>`;
  } else {
    alert("cgv not checked");
  }
});

// **************** Load event *************************

window.addEventListener("load", () => {
  console.log("document chargé");
});

// **************** Load event *************************

const boxes = document.querySelectorAll(".box");
console.log(boxes);
boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log("This is a box !");
    console.log(e.target);
    e.target.style.background = "pink";
  });
});

let interval = setInterval(() => {
  document.body.innerHTML += `
  <div class="box">
    New box
  </div>
  `;
}, 2000);

window.addEventListener("click", () => {
  clearInterval(interval);
  document.body.innerHTML += `
  <div class="box">
    Sequence arretée
  </div>
  `;
});
