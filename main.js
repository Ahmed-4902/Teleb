// Start Our Skills
let numbers = document.querySelectorAll(".our-skills .percent");
let sectionTarget = document.querySelector(".our-skills");
let start = false;
let progressSpan = document.querySelectorAll(".the-progress span");

// Start Our Awesome Stats
let nums = document.querySelectorAll(".stats .box .number");
let section = document.querySelector(".stats");
let started = false;

// Start On Scroll
window.onscroll = function () {
   if (window.scrollY >= section.offsetTop - 200) {
      if (!started) {
         nums.forEach((num) => startCount(num));
      }
      started = true;
   } else if (window.scrollY >= sectionTarget.offsetTop - 200) {
      if (!start) {
         numbers.forEach((num) => startCount(num));
      }
      start = true;
      progressSpan.forEach((span) => {
         span.style.width = span.dataset.goal;
      });
   }
};

// Start Function Increase numbers
function startCount(el) {
   let goal = el.dataset.goal;
   let count = setInterval(() => {
      el.textContent++;
      if (el.textContent == goal) {
         clearInterval(count);
      }
   }, 2000 / goal);
}

// Start  Latest Events
let count = new Date("dec 31, 2022").getTime();

let counter = setInterval(() => {
   let dateNow = new Date().getTime();

   let deffDate = count - dateNow;

   let years = Math.floor(deffDate / (1000 * 60 * 60 * 24 * 365));

   let days = Math.floor(
      (deffDate % (1000 * 60 * 60 * 24 * 365)) / (1000 * 60 * 60 * 24)
   );
   let hours = Math.floor(
      (deffDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
   );
   let minutes = Math.floor((deffDate % (1000 * 60 * 60)) / (1000 * 60));
   let seconds = Math.floor((deffDate % (1000 * 60)) / 1000);

   document.querySelector(".years").innerHTML =
      years < 10 ? `0${years}` : years;
   document.querySelector(".days").innerHTML = days < 10 ? `0${days}` : days;
   document.querySelector(".hours").innerHTML =
      hours < 10 ? `0${hours}` : hours;
   document.querySelector(".minutes").innerHTML =
      minutes < 10 ? `0${minutes}` : minutes;
   document.querySelector(".seconds").innerHTML =
      seconds < 10 ? `0${seconds}` : seconds;

   if (seconds < 0) {
      clearInterval(counter);
   }
}, 1000);

// Start Scroller
window.addEventListener("scroll", function () {
   let el = this.document.querySelector(".scroll-bar");
   let height = document.documentElement;
   let scrollTop = height.scrollTop || document.body.scrollTop;
   let scrollHeight = height.scrollHeight || document.body.scrollHeight;

   let percent = (scrollTop / (scrollHeight - height.clientHeight)) * 100;

   el.style.width = percent + "%";
});

// CopyRight
let copyright = document.querySelector(".copy");
copyright.innerHTML = new Date(Date.now()).getFullYear();
