//? ---------------------- Mobile Menu ----------------------
let isMobileMenuOpen = false;

function toggleMobileMenu() {
  isMobileMenuOpen = !isMobileMenuOpen;
  document
    .getElementById("mobileMenu")
    .classList.toggle("hidden", !isMobileMenuOpen);
}

function scrollToSection(id) {
  document.getElementById(id).scrollIntoView({ behavior: "smooth" });
  if (isMobileMenuOpen) toggleMobileMenu();
}

// Change navbar style on scroll
window.addEventListener("scroll", () => {
  const navbar = document.getElementById("navbar");
  navbar.classList.toggle("scrolled", window.scrollY > 50);
});

//? ---------------------- Skills ----------------------
const skills = [
  { name: "HTML", level: 90 },
  { name: "CSS/Tailwind/Bootstrap", level: 92 },
  { name: "JavaScript", level: 90 },
  { name: "Jquery", level: 60 },
  { name: "TypeScript", level: 85 },
  { name: "Angular", level: 80 },
  { name: "PHP/Laravel", level: 80 },
  { name: "Git", level: 85 },
  { name: "Database Design", level: 78 },
];

const categories = [
  {
    title: "Frontend",
    technologies: [
      "HTML&CSS",
      "Javascript",
      "Jquery",
      "TypeScript",
      "Tailwind CSS",
      "Bootstrap",
      "Angular",
    ],
  },
  {
    title: "Backend",
    technologies: ["PHP", "Laravel", "phpMyAdmin"],
  },
  {
    title: "Tools",
    technologies: ["Git", "Docker", "VS Code", "Figma", "Postman"],
  },
];

// Render skills bars
const skillsContainer = document.getElementById("skills-bars");
skills.forEach((skill) => {
  const wrapper = document.createElement("div");
  wrapper.className = "skills-bar-wrapper";

  wrapper.innerHTML = `
    <div class="skills-bar-header">
      <span>${skill.name}</span><span>${skill.level}%</span>
    </div>
    <div class="skills-bar-bg">
      <div class="skills-bar-fill" style="width: ${skill.level}%"></div>
    </div>
  `;
  skillsContainer.appendChild(wrapper);
});

// Render skills categories
const categoriesContainer = document.getElementById("skills-categories");
categories.forEach((category) => {
  const card = document.createElement("div");
  card.className = "skills-category-card";

  card.innerHTML = `<h4>${category.title}</h4>`;
  const techList = document.createElement("div");
  techList.className = "skills-tech-list";

  category.technologies.forEach((tech) => {
    const badge = document.createElement("span");
    badge.className = "skills-tech-badge";
    badge.textContent = tech;

    // Simple hover effect
    badge.onmouseenter = () => {
      badge.style.backgroundColor = "#000";
      badge.style.color = "#fff";
    };
    badge.onmouseleave = () => {
      badge.style.backgroundColor = "#f3f4f6";
      badge.style.color = "#111827";
    };

    techList.appendChild(badge);
  });

  card.appendChild(techList);
  categoriesContainer.appendChild(card);
});

//? ---------------------- Projects ----------------------
const projects = [
  {
    title: "Smart Cafeteria Management System",
    description:
      "A web-based system for customers to place, track, and cancel orders, while admins can manage products, users, and orders in real time. Built with core web technologies for efficient and intuitive operation.",
    images: [
      "images/Cafeteria system/Home.PNG",
      "images/Cafeteria system/sign-up.PNG",
      "images/Cafeteria system/Login.PNG",
      "images/Cafeteria system/Home(user).PNG",
      "images/Cafeteria system/create order by user.PNG",
      "images/Cafeteria system/create order by user(2).PNG",
      "images/Cafeteria system/myorder.PNG",
      "images/Cafeteria system/Home admin.PNG",
      "images/Cafeteria system/Home admin 2.PNG",
      "images/Cafeteria system/add products.PNG",
      "images/Cafeteria system/checks.PNG",
      "images/Cafeteria system/user table.PNG",
      "images/Cafeteria system/product-table.PNG",
      "images/Cafeteria system/orders-table.PNG",
    ],
    tags: ["HTML", "CSS", "Javascript", "PHP", "phpMyAdmin"],
    liveUrl: "",
    githubUrl: "#",
  },
  {
    title: "Movie-app",
    description:
      "Dynamic web app to browse movies and TV shows, view details and reviews, and manage a wishlist. Features include search, pagination, and integration with TheMovieDB API.",
    images: [
      "images/Movie-app/home page.PNG",
      "images/Movie-app/home2.PNG",
      "images/Movie-app/home3.PNG",
      "images/Movie-app/register.PNG",
      "images/Movie-app/login.PNG",
      "images/Movie-app/search.PNG",
      "images/Movie-app/movies with pagination.PNG",
      "images/Movie-app/movie-details.PNG",
      "images/Movie-app/TV shows with pagination.PNG",
      "images/Movie-app/TV shows details.PNG",
      "images/Movie-app/watchlist.PNG",
      "images/Movie-app/favorites.PNG",
    ],
    tags: ["Angular JS", "Typescript", "Tailwind CSS"],
    liveUrl: "https://movie-app-umber-mu.vercel.app/",
    githubUrl: "#",
  },
  {
    title: "Job Board Platform",
    description:
      "Full-featured job board platform that streamlines the hiring process by enabling employers to post and manage jobs, candidates to search and apply with ease, and admins to oversee postings, user activity, and content moderation.",
    images: [
      "images/job board/1.jpeg",
      "images/job board/2.jpeg",
      "images/job board/3.jpeg",
      "images/job board/4.jpeg",
      "images/job board/5.jpeg",
      "images/job board/6.jpeg",
      "images/job board/7.jpeg",
      "images/job board/8.jpeg",
      "images/job board/9.jpeg",
      "images/job board/10.jpeg",
      "images/job board/11.jpeg",
      "images/job board/12.jpeg",
      "images/job board/13.jpeg",
      "images/job board/14.jpeg",
      "images/job board/15.jpeg",
      "images/job board/16.jpeg",
      "images/job board/17.jpeg",
      "images/job board/18.jpeg",
      "images/job board/19.jpeg",
    ],
    tags: ["Laravel", "Bootstrap", "phpMyAdmin"],
    liveUrl: "",
    githubUrl: "#",
  },
];

// Render projects
const projectsContainer = document.getElementById("projects-list");

projects.forEach((project, index) => {
  const card = document.createElement("div");
  card.className = "project-card";

  // صورة المشروع
  const img = document.createElement("img");
  img.src = project.images[0];
  img.alt = project.title;
  img.className = "project-image";
  card.appendChild(img);

  // المحتوى
  const content = document.createElement("div");
  content.className = "project-content";

  // العنوان
  const title = document.createElement("h3");
  title.textContent = project.title;
  content.appendChild(title);

  // الوصف
  const desc = document.createElement("p");
  desc.textContent = project.description;
  content.appendChild(desc);

  // التاجات
  const tagsDiv = document.createElement("div");
  tagsDiv.className = "project-tags";
  project.tags.forEach((tag) => {
    const span = document.createElement("span");
    span.textContent = tag;
    tagsDiv.appendChild(span);
  });
  content.appendChild(tagsDiv);

  // اللينكات
  const linksDiv = document.createElement("div");
  linksDiv.className = "project-links";

  // زرار Live Demo لو موجود
  if (project.liveUrl && project.liveUrl.trim() !== "") {
    const liveLink = document.createElement("a");
    liveLink.href = project.liveUrl;
    liveLink.target = "_blank";
    liveLink.textContent = "Live Demo";
    liveLink.style.color = 'white'
    linksDiv.appendChild(liveLink);
  }

  // زرار GitHub (يتعمل نفس الشرط لو عايز تشيله لما يكون فاضي)
  if (project.githubUrl && project.githubUrl.trim() !== "#") {
    const gitLink = document.createElement("a");
    gitLink.href = project.githubUrl;
    gitLink.target = "_blank";
    gitLink.textContent = "GitHub";
    linksDiv.appendChild(gitLink);
  }

  content.appendChild(linksDiv);

  // زرار View Images
  const viewBtn = document.createElement("button");
  viewBtn.className = "view-gallery-btn";
  viewBtn.dataset.index = index;
  viewBtn.textContent = "View Images";
  content.appendChild(viewBtn);

  card.appendChild(content);
  projectsContainer.appendChild(card);
});


//? ---------------------- Gallery ----------------------
let currentGalleryImages = [];
let currentIndex = 0;

document.addEventListener("click", (e) => {
  if (e.target.classList.contains("view-gallery-btn")) {
    const index = e.target.dataset.index;
    openGallery(projects[index].images);
  }
});

function openGallery(images) {
  currentGalleryImages = images;
  currentIndex = 0;
  updateGalleryImage();
  document.getElementById("galleryModal").classList.remove("hidden");
}

function closeGallery(event) {
  if (
    event.target.id === "galleryModal" ||
    event.target.classList.contains("close-btn")
  ) {
    document.getElementById("galleryModal").classList.add("hidden");
  }
}

function changeImage(direction) {
  currentIndex = (currentIndex + direction + currentGalleryImages.length) % currentGalleryImages.length;
  updateGalleryImage();
}

function updateGalleryImage() {
  document.getElementById("galleryImage").src =
    currentGalleryImages[currentIndex];
}

// Keyboard navigation for gallery
document.addEventListener("keydown", (e) => {
  const modal = document.getElementById("galleryModal");
  if (!modal.classList.contains("hidden")) {
    if (e.key === "ArrowRight") changeImage(1);
    else if (e.key === "ArrowLeft") changeImage(-1);
    else if (e.key === "Escape") modal.classList.add("hidden");
  }
});

//? ---------------------- Scroll to Top ----------------------
const scrollBtn = document.querySelector(".scroll-up-btn");

// Show/hide button on scroll
window.addEventListener("scroll", () => {
  scrollBtn.style.display = window.scrollY > 300 ? "flex" : "none";
});

// Scroll smoothly to top
scrollBtn.addEventListener("click", () =>
  window.scrollTo({ top: 0, behavior: "smooth" })
);
