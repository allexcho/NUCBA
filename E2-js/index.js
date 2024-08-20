const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];

// a) Las pizzas que tengan un id impar.
console.log("Pizzas con ID impar:");
pizzas.forEach(pizza => {
  if (pizza.id % 2 !== 0) {
    console.log(`- ${pizza.nombre}`);
  }
});

// b) ¿Hay alguna pizza que valga menos de $600?
const pizzaBarata = pizzas.some(pizza => pizza.precio < 600);
console.log(pizzaBarata
  ? "¡Buenas noticias! Tenemos pizzas por menos de $600."
  : "Lo sentimos, todas nuestras pizzas cuestan $600 o más.");

// c) El nombre de cada pizza con su respectivo precio.
console.log("\nNuestro menú de pizzas:");
pizzas.forEach(pizza => {
  console.log(`- ${pizza.nombre}: $${pizza.precio}`);
});

// d) Todos los ingredientes de cada pizza
console.log("\nIngredientes de nuestras pizzas:");
pizzas.forEach(pizza => {
  console.log(`\n${pizza.nombre}:`);
  pizza.ingredientes.forEach(ingrediente => {
    console.log(`- ${ingrediente}`);
  });
});