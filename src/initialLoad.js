import loadContact from "./contact.js";
import loadHome from "./home.js";
import loadMenu from "./menu.js";

export default function initialLoad() {
  const contentDiv = document.querySelector("#content");

  const header = document.createElement("header");
  const nav = document.createElement("nav");
  const main = document.createElement("main");
  const homeButton = document.createElement("button");
  const menuButton = document.createElement("button");
  const contactButton = document.createElement("button");

  homeButton.textContent = "Home";
  menuButton.textContent = "Menu";
  contactButton.textContent = "Contact";

  main.id = "main-content";

  nav.append(homeButton, menuButton, contactButton);
  header.append(nav);
  contentDiv.append(header, main);

  homeButton.addEventListener("click", () => {
    setActiveButton(homeButton);
    loadHome();
  });
  menuButton.addEventListener("click", () => {
    setActiveButton(menuButton);
    loadMenu();
  });
  contactButton.addEventListener("click", () => {
    setActiveButton(contactButton);
    loadContact();
  });

  function setActiveButton(button) {
    const navButtons = nav.querySelectorAll("button");

    navButtons.forEach((btn) => {
      btn.classList.remove("active");
    });

    button.classList.add("active");
  }

  setActiveButton(homeButton);
  loadHome();
}
