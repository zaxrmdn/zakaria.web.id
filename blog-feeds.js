const blogLinks = [
  { title: "How to Build a Windows Server Lab", url: "https://yourblog.com/windows-lab" },
  { title: "Designing IT Curriculum for Real Impact", url: "https://yourblog.com/it-curriculum" },
];

const container = document.getElementById("blog-links");
blogLinks.forEach(link => {
  const a = document.createElement("a");
  a.href = link.url;
  a.textContent = link.title;
  a.target = "_blank";
  a.className = "blog-link";
  container.appendChild(a);
});