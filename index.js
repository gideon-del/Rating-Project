let lt = document.querySelectorAll(".circle");
let btn = document.getElementById("btn-click");
let sec1 = document.querySelector(".section1");
let sec2 = document.querySelector(".section2");
let p = document.querySelector(".replace");
let val = 0;
for (let i = 0; i < lt.length; i++) {
  lt[i].addEventListener("click", function () {
    val = lt[i].value;
    return val;
  });
}
function onSubmit() {
  btn.addEventListener("click", function () {
    sec1.className = sec1.className.replace("card", "display");
    sec2.className = sec2.className.replace("display", "flex");
    p.textContent = `You selected ${val} out of 5`;
  });
}
onSubmit();
