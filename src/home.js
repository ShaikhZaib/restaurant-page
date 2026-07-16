import restaurantImage from "./images/restaurant.jpeg";

export default function loadHome() {
  const main = document.querySelector("#main-content");
  main.innerHTML = "";

  const section = document.createElement("section");
  const heading = document.createElement("h1");
  const image = document.createElement("img");
  const description = document.createElement("p");
  const hours = document.createElement("p");

  section.classList.add("home");
  heading.classList.add("home-title");
  image.classList.add("home-image");
  description.classList.add("home-description");
  hours.classList.add("home-hours");

  heading.textContent = "Welcome to Bella Italia";
  image.src = restaurantImage;
  image.alt = "Bella Italia restaurant";
  description.textContent =
    "Authentic Italian cuisine made with fresh ingredients every day.";
  hours.textContent = "Open Daily: 11:00 AM – 11:00 PM";

  section.append(heading, image, description, hours);

  main.append(section);
}
