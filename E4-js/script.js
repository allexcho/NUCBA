const numeroInput = document.getElementById('numeroInput');
const miBoton = document.getElementById('miBoton');
let pokemonCard = null;
let errorMessage = null;

const createPokemonCard = (pokemon) => {
   
    if (pokemonCard) pokemonCard.remove();
    if (errorMessage) errorMessage.remove();

   
    pokemonCard = document.createElement('div');
    pokemonCard.className = 'pokemon-card';

   
    const heightInMeters = (pokemon.height / 10).toFixed(1);
    const weightInKg = (pokemon.weight / 10).toFixed(1);

    pokemonCard.innerHTML = `
        <h2 class="pokemon-name">${pokemon.name}</h2>
        <span class="pokemon-type">${pokemon.types[0].type.name}</span>
        <img src="${pokemon.sprites.other['official-artwork'].front_default}" 
             alt="${pokemon.name}">
        <div class="pokemon-stats">
            <div class="stat">
                <div class="stat-label">Altura</div>
                <div class="stat-value">${heightInMeters} m</div>
            </div>
            <div class="stat">
                <div class="stat-label">Peso</div>
                <div class="stat-value">${weightInKg} kg</div>
            </div>
        </div>
    `;

    document.body.appendChild(pokemonCard);
};

const showError = (message) => {
    if (pokemonCard) pokemonCard.remove();
    if (errorMessage) errorMessage.remove();

    errorMessage = document.createElement('div');
    errorMessage.className = 'error-message';
    errorMessage.textContent = message;
    document.body.appendChild(errorMessage);
};

const fetchPokemon = async (number) => {
    try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${number}`);
        if (!response.ok) {
            throw new Error('Pokemon no encontrado');
        }
        const data = await response.json();
        createPokemonCard(data);
    } catch (error) {
        showError('No se encontró ningún Pokemon con ese número');
    }
};

miBoton.addEventListener('click', () => {
    const number = numeroInput.value;
    !number ? showError('Por favor, ingresa un número') 
    : number < 1 ? showError('Por favor, ingresa un número válido mayor a 0')
    : fetchPokemon(number);
});


numeroInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        miBoton.click();
    }
});