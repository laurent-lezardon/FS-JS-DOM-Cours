// alert("bonjour !")
// const b_h4 = document.querySelector("h4");
// console.log(b_h4);
// b_h4.style.background = "yellow";

// ************* click event ************

const questioncontainer = document.querySelector(".click-event");
const btn1 = document.querySelector("#btn1");
const btn2 = document.getElementById("btn2");
const response = document.querySelector("p");

console.log(questioncontainer);
questioncontainer.style.borderRadius = "20px";
questioncontainer.addEventListener("click", () => {
    console.log("Click!");
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

console.log(response);
btn1.addEventListener("click", () => {
    console.log("clik btn1 !");
});


// ************ mouse events ********************

const mousemove = document.querySelector(".mousemove");
// console.log("mm :", mousemove)
window.addEventListener('mousemove', (e) => {
    // console.log("mouse is mouving!");
    // console.log(e);
    // console.log(e.target);
    mousemove.style.top = e.pageY + "px";
    mousemove.style.left = e.pageX + "px";
})

window.addEventListener('mousedown', () => {
    console.log("mouse is down !!!");
    mousemove.style.transform = "scale(1.5) translate(-33%, -33%)";
})
window.addEventListener('mouseup', () => {
    console.log("mouse is UP !!!");
    mousemove.style.transform = "scale(1) translate(-50%, -50%)";
})

questioncontainer.addEventListener('mouseenter', () => {
    questioncontainer.style.background = "rgba(0,0,0,0.3)"
})

questioncontainer.addEventListener('mouseout', () => {
    questioncontainer.style.background = "rgba(0,0,0,1)"
});
response.addEventListener('mouseover', () => {
    response.style.transform = "rotate(2deg)"

});