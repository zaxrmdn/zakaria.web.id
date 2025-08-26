const typingText = "Halo, saya Zakaria 👨‍💻";
let i = 0;
function typeWriter() {
  if (i < typingText.length) {
    document.getElementById("typing").innerHTML += typingText.charAt(i);
    i++;
    setTimeout(typeWriter, 100);
  }
}
document.addEventListener("DOMContentLoaded", typeWriter);