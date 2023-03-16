var audio = null;

function musicPlay() {
  if (audio === null) {
    audio = new Audio("song.mp3");
    audio.play();
  } else {
    if (audio.paused) {
      audio.play();
      play.innerHTML =
        '<ion-icon name="pause-outline" class=" icon icon-pause"></ion-icon>';
    } else {
      audio.pause();
      play.innerHTML =
        '<ion-icon name="play-outline" class=" icon icon-pause"></ion-icon>';
    }
  }
}
