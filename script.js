const projects = [
  {
    title: "Abstract Motion",
    description: "Experimental digital artwork.",
    image: "https://picsum.photos/600/800?random=1"
  },
  {
    title: "Identity System",
    description: "Minimal branding exploration.",
    image: "https://picsum.photos/600/800?random=2"
  },
  {
    title: "Visual Concept",
    description: "Typography and atmosphere.",
    image: "https://picsum.photos/600/800?random=3"
  },
  {
    title: "Future Form",
    description: "Art-driven design study.",
    image: "https://picsum.photos/600/800?random=4"
  }
];

const gallery = document.getElementById("gallery");

projects.forEach(project => {
  const card = document.createElement("div");
  card.className = "card";

  card.innerHTML = `
    <img src="${project.image}" alt="${project.title}">
    <div class="card-content">
      <h3>${project.title}</h3>
      <p>${project.description}</p>
    </div>
  `;

  gallery.appendChild(card);
});

const glow = document.querySelector(".cursor-glow");

window.addEventListener("mousemove", e => {
  glow.style.left = e.clientX + "px";
  glow.style.top = e.clientY + "px";
});
