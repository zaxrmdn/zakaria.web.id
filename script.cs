document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".animated");
  animatedElements.forEach((el, i) => {
    setTimeout(() => {
      el.style.opacity = 1;
      el.style.transform = "translateY(0)";
    }, i * 300);
  });
});