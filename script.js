const menuBars = document.getElementById("menu-bars");
const overlay = document.getElementById("overlay");
const nav1 = document.getElementById("nav-1");
const nav2 = document.getElementById("nav-2");
const nav3 = document.getElementById("nav-3");
const nav4 = document.getElementById("nav-4");
const nav5 = document.getElementById("nav-5");

function toggleMenuBar() {
  menuBars.classList.toggle("change");
  overlay.classList.toggle("overlay-active");
  if (overlay.classList.contains("overlay-active")) {
    // Animate In- overlay;
    if (overlay.classList.contains("overlay-slide-left")) {
      overlay.classList.replace("overlay-slide-left", "overlay-slide-right");
      nav1.classList.replace("slide-out-1", "slide-in-1");
      nav2.classList.replace("slide-out-2", "slide-in-2");
      nav3.classList.replace("slide-out-3", "slide-in-3");
      nav4.classList.replace("slide-out-4", "slide-in-4");
      nav5.classList.replace("slide-out-5", "slide-in-5");
    } else {
      overlay.classList.add("overlay-slide-right");
      nav1.classList.add("slide-in-1");
      nav2.classList.add("slide-in-2");
      nav3.classList.add("slide-in-3");
      nav4.classList.add("slide-in-4");
      nav5.classList.add("slide-in-5");
    }
  } else {
    if (overlay.classList.contains("overlay-slide-right")) {
      overlay.classList.replace("overlay-slide-right", "overlay-slide-left");
      nav1.classList.replace("slide-in-1", "slide-out-1");
      nav2.classList.replace("slide-in-2", "slide-out-2");
      nav3.classList.replace("slide-in-3", "slide-out-3");
      nav4.classList.replace("slide-in-4", "slide-out-4");
      nav5.classList.replace("slide-in-5", "slide-out-5");
    } else {
      overlay.classList.add("overlay-slide-left");
      nav1.classList.add("slide-out-1");
      nav2.classList.add("slide-out-2");
      nav3.classList.add("slide-out-3");
      nav4.classList.add("slide-out-4");
      nav5.classList.add("slide-out-5");
    }
  }
}

menuBars.addEventListener("click", toggleMenuBar);
nav1.addEventListener("click", toggleMenuBar);
nav2.addEventListener("click", toggleMenuBar);
nav3.addEventListener("click", toggleMenuBar);
nav4.addEventListener("click", toggleMenuBar);
nav5.addEventListener("click", toggleMenuBar);
