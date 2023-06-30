const speakerContainer = document.querySelector(".speaker_container");
const toggler = document.querySelector(".menu_icon");
const closeBtn = document.querySelector(".close");
const menu = document.querySelector(".menu");

const speakers = [
  {
    image: "https://randomuser.me/api/portraits/women/14.jpg",
    name: "Jane Mayer",
    title: "Web Development Instructor",
    description:
      "My name is Jane, and I teach web development, equipping students with HTML, CSS, and JavaScript skills to build stunning websites",
  },
  {
    image: "https://randomuser.me/api/portraits/men/14.jpg",
    name: "James Cook",
    title: "Web Development Coordinator",
    description:
      "Hi, Cook here!. I teach web development, empowering learners with responsive design techniques and expertise in front-end frameworks.",
  },
  {
    image: "https://randomuser.me/api/portraits/women/13.jpg",
    name: "Maria hernandez",
    title: "Web Development Trainer",
    description:
      'I"m Hernandez, a web development instructor. I guide students in mastering server-side programming using Node.js and other powerful frameworks.',
    desktop: "desk_",
    more: "show",
  },
  {
    image: "https://randomuser.me/api/portraits/men/13.jpg",
    name: "Mark Jaffer",
    title: "Web Development Manager",
    description:
      'Hey there! I"m Jaffer, and I teach web development. I specialize in database integration and creating dynamic, data-driven web applications',
    desktop: "desk_",
    more: "show",
  },
  {
    image: "https://randomuser.me/api/portraits/women/17.jpg",
    name: "Taylor Cyrus",
    title: "Front-End Web Developer",
    description:
      'I"m Cyrus, a web development instructor. My passion lies in UX design, ensuring students craft websites with exceptional user experiences',
    desktop: "desk_",
    more: "show",
  },
  {
    image: 'https://randomuser.me/api/portraits/men/12.jpg"',
    name: "David James",
    title: "Back-End Web Developer",
    description:
      'Greetings! I"m James, and I teach web development. My expertise lies in debugging and optimizing code for peak performance and efficiency',
    desktop: "desk_",
    more: "show",
  },
];


if (speakerContainer!== null) {
  let speakerHtml = "";
  speakers.forEach((speaker) => {
    speakerHtml += ` <div class="speaker ${speaker.desktop} ${speaker.more}">
    <div class="speaker_1-image">
      <img src="${speaker.image}" alt="">
    </div>
  <div class="info">
    <h4>${speaker.name}</h4>
    <p class="sub-text">${speaker.title}</p>
    <p class="caption">${speaker.description}</p>
  </div>
  </div>`;
    speakerContainer.innerHTML = speakerHtml;
  });
}

// Mobile Menu

toggler.addEventListener("click", () => {
  menu.classList.add("mobile");
});
closeBtn.addEventListener("click", () => {
  menu.classList.remove("mobile");
});

