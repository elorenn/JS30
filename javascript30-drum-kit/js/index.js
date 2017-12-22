var keys = document.querySelectorAll('.key');
keys.forEach(function (key) {
  return key.addEventListener('transitionend', removeTransition);
});
// each key gets an event listener called transition-end, at which point the removeTransition function is called

function playSound(e) {
  var audio = document.querySelector('audio[data-key="' + e.keyCode + '"]');
  var key = document.querySelector('.key[data-key="' + e.keyCode + '"]');
  if (!audio) return; // stops function
  audio.currentTime = 0; //rewind audio
  audio.play();
  key.classList.add('playing');
}

function removeTransition(e) {
  if (e.propertyName !== 'transform') return; // skip if property name is not transform
  this.classList.remove('playing'); // 'this' is what got called against in the event listener, so 'key' 
}

window.addEventListener('keydown', playSound);