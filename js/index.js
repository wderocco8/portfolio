/******************** tilt -> source: https://www.youtube.com/watch?v=zyBjfoJhlC4&ab_channel=TuatTranAnh ********************/
const tiltEls = document.querySelectorAll(".tilt");

const tiltMove = (x, y) =>
  `perspective(500px) rotateX(${x}deg) rotateY(${y}deg)`; // Reduced scale for subtle effect

tiltEls.forEach((tilt) => {
  const height = tilt.clientHeight;
  const width = tilt.clientWidth;
  let currentX = 0;
  let currentY = 0;

  const updateTilt = () => {
    tilt.style.transform = tiltMove(currentX, currentY);
    requestAnimationFrame(updateTilt);
  };

  tilt.addEventListener("mousemove", (e) => {
    const x = e.layerX;
    const y = e.layerY;

    // Set multiplier based on the class
    const multiplier = tilt.classList.contains("tilt-small") ? 5 : 15;

    const xRotate = multiplier * ((y - height / 2) / height); // Swapped x and y for more intuitive control
    const yRotate = -multiplier * ((x - width / 2) / width);

    currentX = xRotate;
    currentY = yRotate;
  });

  tilt.addEventListener("mouseout", () => {
    currentX = 0;
    currentY = 0;
  });

  tilt.style.transition = "transform 0.2s ease-out";
  tilt.style.transformOrigin = "center";
  requestAnimationFrame(updateTilt);
});


/******************** typewriter -> source: https://css-tricks.com/snippets/css/typewriter-effect/ ********************/
var TxtType = function (el, toRotate, period) {
  this.toRotate = toRotate;
  this.el = el;
  this.loopNum = 0;
  this.period = parseInt(period, 10) || 2000;
  this.txt = "";
  this.tick();
  this.isDeleting = false;
};

TxtType.prototype.tick = function () {
  var i = this.loopNum % this.toRotate.length;
  var fullTxt = this.toRotate[i];

  if (this.isDeleting) {
    this.txt = fullTxt.substring(0, this.txt.length - 1);
  } else {
    this.txt = fullTxt.substring(0, this.txt.length + 1);
  }

  this.el.innerHTML = '<span class="wrap">' + this.txt + "</span>";

  var that = this;
  var delta = 200 - Math.random() * 100;

  if (this.isDeleting) {
    delta /= 2;
  }

  if (!this.isDeleting && this.txt === fullTxt) {
    if (this.loopNum === this.toRotate.length - 1) {
      return; // Stop here, no more deleting or looping
    } else {
      delta = this.period;
      this.isDeleting = true;
    }
  } else if (this.isDeleting && this.txt === "") {
    this.isDeleting = false;
    this.loopNum++;
    delta = 500;
  }

  setTimeout(function () {
    that.tick();
  }, delta);
};

window.onload = function () {
  var elements = document.getElementsByClassName("typewrite");
  for (var i = 0; i < elements.length; i++) {
    var toRotate = elements[i].getAttribute("data-type");
    var period = elements[i].getAttribute("data-period");
    if (toRotate) {
      new TxtType(elements[i], JSON.parse(toRotate), period);
    }
  }
  // INJECT CSS
  var css = document.createElement("style");
  css.innerHTML = ".typewrite > .wrap { border-right: 0.08em solid #000}";
  document.body.appendChild(css);
};

/******************** table fade in/out ********************/
  const rows = document.querySelectorAll(".interests-table tr");

  function fadeRowsInOnScroll() {
    const windowHeight = window.innerHeight;

    rows.forEach((row) => {
      const rect = row.getBoundingClientRect();

      // Check if the row is visible in the viewport
      if (rect.top < windowHeight && rect.bottom > 0) {
        row.classList.add("fade-in");
      } else {
        row.classList.remove("fade-in");
      }
    });
  }

  // Run on scroll
  window.addEventListener("scroll", fadeRowsInOnScroll);

  // Run initially in case some rows are already in view
  fadeRowsInOnScroll();
