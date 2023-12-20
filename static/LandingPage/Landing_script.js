var tl = gsap.timeline();
var loadNum = 0;

function increaseLoad() {
  if (loadNum < 100) {
    loadNum += Math.floor(Math.random() * 2);
    if (loadNum > 100) {
      loadNum = 100;
    }
  }

  const wid = document.querySelector(".loader-box");
  const percentage = loadNum + "%";
  wid.style.width = loadNum / 2.5 + "%";
  document.querySelector("#loader h1").innerHTML = percentage;

  if (loadNum < 100) {
    requestAnimationFrame(increaseLoad);
  }
}

tl.to("#loader h1", {
  delay: 0.5,
  duration: 1,
  onStart: increaseLoad,
});
tl.to(".loader-box", {
  delay: 0.5,
  duration: 1,
  ease: "power1.inOut", 
});
tl.to("#loader", {
  top: "-100vh",
  delay: 1,
  duration: 1.5,
  onComplete: startScrollReveal,
});

function startScrollReveal() {
const sr = ScrollReveal({
  duration: 900,
  delay: 100,
  distance: "20px",
  easing: "ease-in-out",
  origin: "bottom",
});

const elementsToReveal = [
  { selector: ".nav", origin: "bottom" },
  { selector: ".left-page1", origin: "left" },
  { selector: ".right-page1", origin: "right" },
  { selector: ".page-2-heading", origin: "left" },
  { selector: ".page-2-content", origin: "right" },
];

elementsToReveal.forEach((element) => {
  sr.reveal(element.selector, element);
});

}

