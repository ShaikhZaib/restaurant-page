export default function loadContact() {
  const main = document.querySelector("#main-content");
  main.innerHTML = "";

  const section = document.createElement("section");
  const heading = document.createElement("h1");
  const addressHeading = document.createElement("h3");
  const address = document.createElement("p");
  const phoneNumHeading = document.createElement("h3");
  const phoneNum = document.createElement("p");
  const emailHeading = document.createElement("h3");
  const email = document.createElement("p");
  const hoursHeading = document.createElement("h3");
  const hours = document.createElement("p");
  const addressCard = document.createElement("div");
  const phoneNumCard = document.createElement("div");
  const emailCard = document.createElement("div");
  const hoursCard = document.createElement("div");

  heading.textContent = "Contact Us";

  addressHeading.textContent = "Address";
  address.innerText = "123 Main Street\nAhmedabad, Gujarat\nIndia";

  phoneNumHeading.textContent = "Phone";
  phoneNum.textContent = "+91 98765 43210";

  emailHeading.textContent = "Email";
  email.textContent = "notFake@email.com";

  hoursHeading.textContent = "Hours";
  hours.textContent = "11 AM - 11 PM";

  section.classList.add("contact");
  heading.classList.add("contact-title");
  addressHeading.classList.add("contact-heading");
  address.classList.add("contact-text");
  addressCard.classList.add("contact-card");
  phoneNumCard.classList.add("contact-card");
  emailCard.classList.add("contact-card");
  hours.classList.add("contact-card");

  addressCard.append(addressHeading, address);
  phoneNumCard.append(phoneNumHeading, phoneNum);
  emailCard.append(emailHeading, email);
  hoursCard.append(hoursHeading, hours);

  section.append(heading, addressCard, phoneNumCard, emailCard, hoursCard);

  main.append(section);
}
