// document.addEventListener("DOMContentLoaded", function () {
//   const bar = document.querySelector("#bar");
//   const cross = document.querySelector("#close");
//   const nav = document.querySelector(".nav");

//   bar.addEventListener("click", () => {
//     bar.style.display = "none";
//     cross.style.display = "block";
//     nav.style.left = "20%";
//   });

//   cross.addEventListener("click", () => {
//     cross.style.display = "none";
//     bar.style.display = "block";
//     nav.style.left = "100%";
//   });
// });

document.addEventListener("DOMContentLoaded", function () {
  const bar = document.querySelector("#bar");
  const cross = document.querySelector("#close");
  const nav = document.querySelector(".nav");

  function adjustUIForViewport() {
    const viewportWidth = window.innerWidth;
    if (viewportWidth > 1024) {
      // Hide bar and close
      bar.style.display = "none";
      cross.style.display = "none";
    } else {
      // Show bar and hide close initially
      bar.style.display = "block";
      cross.style.display = "none";
    }
  }

  bar.addEventListener("click", () => {
    bar.style.display = "none";
    cross.style.display = "block";
    nav.style.left = "20%";
  });

  cross.addEventListener("click", () => {
    cross.style.display = "none";
    bar.style.display = "block";
    nav.style.left = "100%";
  });

  // Initial adjustment based on viewport width
  adjustUIForViewport();

  // Adjust UI when window is resized
  window.addEventListener("resize", adjustUIForViewport);
});

document.addEventListener("DOMContentLoaded", function () {
  const arrow = document.querySelectorAll(".arrow");

  arrow.forEach((e) => {
    e.addEventListener("click", () => {
      var footerlist = e.parentElement.nextElementSibling;

      if (e.classList.contains("temp")) {
        e.classList.remove("temp");
        footerlist.style.display = "none";
        e.style.transform = "rotate(0deg)";
      } else {
        e.classList.add("temp");
        footerlist.style.display = "block";
        e.style.transform = "rotate(180deg)";
      }
    });
  });
});

document.addEventListener("DOMContentLoaded", function () {
  const menuNav = document.querySelector(".menu-nav");

  window.addEventListener("scroll", () => {
    if (window.pageYOffset > menuNav.offsetTop) {
      menuNav.classList.add("sticky");
    } else {
      menuNav.classList.remove("sticky");
    }
  });
});
