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
