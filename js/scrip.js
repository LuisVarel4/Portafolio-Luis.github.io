const btnReproducir = document.getElementById('btnReproducir');
const audioPlayer = document.getElementById('audioPlayer');
audioPlayer.volume = 0.2;

btnReproducir.addEventListener('click', () => {
  if (audioPlayer.paused) {
    audioPlayer.play();
    btnReproducir.textContent = 'Pausar';
  } else {
    audioPlayer.pause();
    btnReproducir.textContent = 'Reproducir';
  }
});
