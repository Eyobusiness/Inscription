// Boutons et éléments de la page
const startButton = document.getElementById('start');
const stopButton = document.getElementById('stop');
const car = document.getElementById('car');

// Liste des lumières et durées
const lights = [
  { id: 'red', duration: 5000 },
  { id: 'yellow', duration: 2000 },
  { id: 'green', duration: 4000 }
];

let currentIndex = 0; // Lumière active
let interval; // Variable pour gérer l'arrêt

// Fonction pour changer les lumières
function switchLight() {
  // Éteindre toutes les lumières
  document.querySelectorAll('.light').forEach(light => light.classList.remove('active'));

  // Activer la lumière courante
  const currentLight = lights[currentIndex];
  document.getElementById(currentLight.id).classList.add('active');

  // Gestion de la voiture
  if (currentLight.id === 'green') {
    car.classList.add('move'); // Voiture avance
  } else {
    car.classList.remove('move'); // Voiture s'arrête
  }

  // Passer à la lumière suivante après la durée
  interval = setTimeout(() => {
    currentIndex = (currentIndex + 1) % lights.length;
    switchLight();
  }, currentLight.duration);
}

// Fonction pour arrêter le cycle
function stopTrafficLight() {
  clearTimeout(interval); // Arrêter l'intervalle
  document.querySelectorAll('.light').forEach(light => light.classList.remove('active'));
  car.classList.remove('move'); // Voiture s'arrête
}

// Événements des boutons
startButton.addEventListener('click', () => {
  stopTrafficLight(); // Réinitialiser si le feu est déjà en cours
  switchLight(); // Démarrer le cycle
});

stopButton.addEventListener('click', stopTrafficLight);
