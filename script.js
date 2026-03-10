// Selezioniamo gli elementi del DOM
const sceneRoom = document.getElementById('scene-room');
const sceneField = document.getElementById('scene-field');
const flashOverlay = document.getElementById('flash-overlay');

const hotspotPhoto = document.getElementById('hs-photo');
const hotspotPc = document.getElementById('hs-pc');
const hotspotSunflower = document.getElementById('hs-sunflower');

const modal = document.getElementById('modal');
const modalText = document.getElementById('modal-text');
const closeModal = document.getElementById('close-modal');

// --- GESTIONE MODALI (Oggetti secondari) ---
function openModal(text) {
  modalText.innerText = text;
  modal.classList.remove('hidden');
}

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});

// Cliccando sulla foto
hotspotPhoto.addEventListener('click', () => {
  openModal("Ti ricordi quel giorno a Parigi? È una delle mie foto preferite.");
});

// Cliccando sul PC
hotspotPc.addEventListener('click', () => {
  openModal("Ho messo in loop la nostra playlist di Spotify mentre preparavo questa cosa.");
  // Qui potresti anche far partire un Audio() in JS!
});

// --- IL CLIMAX: Cliccando il girasole secco ---
hotspotSunflower.addEventListener('click', () => {
  // 1. Facciamo partire il flash bianco
  flashOverlay.style.opacity = '1';

  // 2. Aspettiamo che il bianco copra tutto (1.5 secondi)
  setTimeout(() => {
    // Spegniamo la camera e accendiamo il prato
    sceneRoom.classList.remove('active');
    sceneField.classList.remove('hidden');
    sceneField.classList.add('active');

    // 3. Facciamo dissolvere il bianco per svelare la sorpresa
    setTimeout(() => {
      flashOverlay.style.opacity = '0';
    }, 500); // Mezzo secondo di pausa per farle "assimilare" il bianco

  }, 1500); // 1500ms corrisponde al tempo della transizione CSS del flash
});
