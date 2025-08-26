const blogContainer = document.getElementById("blog-feed");

fetch("https://yourblog.com/api/posts")
  .then(res => res.json())
  .then(data => {
    data.slice(0, 5).forEach(post => {
      const link = document.createElement("a");
      link.href = post.url;
      link.textContent = post.title;
      link.target = "_blank";
      blogContainer.appendChild(link);
    });
  })
  .catch(() => {
    fetch("fallback/blog.json")
      .then(res => res.json())
      .then(data => {
        data.forEach(post => {
          const link = document.createElement("a");
          link.href = post.url;
          link.textContent = post.title + " (cached)";
          link.target = "_blank";
          blogContainer.appendChild(link);
        });
      });
  });