function startGame() {
  document.querySelector('.pageBackground').classList.add('pageBackgroundHidden')
  document.querySelector('.fade').classList.add('fadeIn');
  audio.play();
}


function mainMenu() {
  document.querySelector('.fade').classList.remove('fadeIn');
  document.querySelector('.pageBackground').classList.remove('pageBackgroundHidden')
}