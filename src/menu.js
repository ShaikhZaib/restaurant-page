export default function loadMenu() {
  const menuItems = [
    {
      name: "Margherita Pizza",
      price: "$15",
      description:
        "Fresh mozzarella, tomatoes, and basil. and very very very very very very very very very very very very very very long dexcription ",
    },
    {
      name: "Spaghetti Carbonara",
      price: "$18",
      description: "Classic creamy pasta with pancetta.",
    },
    {
      name: "Fettuccine Alfredo",
      price: "$19",
      description: "Rich and creamy parmesan garlic sauce over flat pasta.",
    },
    {
      name: "Chicken Parmigiana",
      price: "$22",
      description: "Breaded chicken cutlet with marinara and melted cheese.",
    },
    {
      name: "Mushroom Risotto",
      price: "$20",
      description: "Arborio rice simmered with wild mushrooms and parmesan.",
    },
    {
      name: "Classic Tiramisu",
      price: "$9",
      description:
        "Layers of espresso-soaked ladyfingers and mascarpone cream.",
    },
  ];

  const main = document.querySelector("#main-content");
  main.innerHTML = "";

  const section = document.createElement("section");
  const heading = document.createElement("h1");
  const menuGrid = document.createElement("div");

  section.classList.add("menu");
  heading.classList.add("menu-title");
  menuGrid.classList.add("menu-grid");

  heading.textContent = "Our Menu";

  menuItems.forEach((item) => {
    const card = document.createElement("div");
    const title = document.createElement("h2");
    const description = document.createElement("p");
    const price = document.createElement("span");

    card.classList.add("menu-card");
    price.classList.add("menu-price");

    title.textContent = item.name;
    description.textContent = item.description;
    price.textContent = item.price;

    card.append(title, description, price);

    menuGrid.append(card);
  });

  section.append(heading, menuGrid);

  main.append(section);
}
