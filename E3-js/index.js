const pizzas = [
  {
    id: 1,
    nombre: "Pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
    imagen: "./img/muzzarella.png",
  },

  {
    id: 2,
    nombre: "Pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
    imagen: "./img/cebolla.png",
  },

  {
    id: 3,
    nombre: "Pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
    imagen: "./img/4quesos.png",
  },

  {
    id: 4,
    nombre: "Pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Rucula", "Jamón"],
    imagen: "./img/especial.png",
  },

  {
    id: 5,
    nombre: "Pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
    imagen: "./img/anana.png",
  },
];

const searchForm = document.getElementById("search-form");
const pizzaIdInput = document.getElementById("pizza-id");
const resultContainer = document.getElementById("result-container");

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const pizzaId = parseInt(pizzaIdInput.value);
  searchPizza(pizzaId);
});

function searchPizza(id) {
  const pizza = pizzas.find((pizza) => pizza.id === id);

  if (!pizzaIdInput.value) {
    renderError("Por favor, ingrese un numero de ID");
  } else if (!pizza) {
    renderError("No se encontro ninguna pizza con ese ID");
  } else {
    renderPizzaCard(pizza);
    savePizzaToLocalStorage(pizza);
  }
}

function renderPizzaCard(pizza) {
  resultContainer.innerHTML = `
    <div class = "pizza-card">
      <h2>${pizza.nombre}</h2>
      <img src="${pizza.imagen}">
      <p>Precio:$${pizza.precio}</p>
    </div>
    `;
}

function renderError(message) {
  resultContainer.innerHTML = `<p class ="error-message">${message}</p`;
}

function savePizzaToLocalStorage(pizza) {
  localStorage.setItem("lastPizza", JSON.stringify(pizza));
}

function loadLastPizza() {
  const lastPizza = localStorage.getItem("lastPizza");
  if (lastPizza) {
    renderPizzaCard(JSON.parse(lastPizza));
  }
}

document.addEventListener("DOMContentLoaded", loadLastPizza);
