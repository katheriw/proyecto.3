// Agregar eventos a los personajes
const personajes = document.querySelectorAll('#personajes');

personajes.forEach((personaje) => {
 personaje.addEventListener('click', () => {
 alert(`Hola, soy ${personaje.textContent}!`);
 });
});

// Agregar eventos a los planetas
const planetas = document.querySelectorAll('#planetas');

planetas.forEach((planeta) => {
 planeta.addEventListener('click', () => {
 alert(`Bienvenido a ${planeta.textContent}!`);
 });
});

// Animar la Dragon Ball
const dragonBall = document.getElementById('dragon-ball');

dragonBall.addEventListener('mouseover', () => {
 dragonBall.style.transform = 'scale(1.2)';
});

dragonBall.addEventListener('mouseout', () => {
 dragonBall.style.transform = 'scale(1)';
});
