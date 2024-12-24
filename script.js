const videos = ["###1", "###2", "###3", "###4", "###5"];
const notes = ["", "", "", "", ""]; // Notes associées à chaque vidéo
let currentVideoIndex = 0;

function loadVideo(index) {
  currentVideoIndex = index;

  // Charger la vidéo
  const videoElement = document.getElementById("videoElement");
  const videoSource = document.getElementById("videoSource");
  videoSource.src = videos[index];
  videoElement.load();

  // Gérer les notes
  const notesTextarea = document.getElementById("notes");
  notesTextarea.value = notes[index];

  // Mettre en surbrillance le bouton actif
  updateActiveButton(index);
}

function previousVideo() {
  if (currentVideoIndex > 0) {
    saveCurrentNotes();
    loadVideo(currentVideoIndex - 1);
  }
}

function nextVideo() {
  if (currentVideoIndex < videos.length - 1) {
    saveCurrentNotes();
    loadVideo(currentVideoIndex + 1);
  }
}

function saveCurrentNotes() {
  const notesTextarea = document.getElementById("notes");
  notes[currentVideoIndex] = notesTextarea.value;
}

function updateActiveButton(activeIndex) {
  const buttons = document.querySelectorAll(".video-button");
  buttons.forEach((button, index) => {
    if (index === activeIndex) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });
}

// Charger la première vidéo par défaut
loadVideo(0);

// Sauvegarder les notes lorsque l'utilisateur change de vidéo
window.addEventListener("beforeunload", saveCurrentNotes);
