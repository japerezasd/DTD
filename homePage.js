function closeOptionTab() {
  document.querySelector('.optionTab').classList.remove('optionTabShow');

  document.querySelector('.homePage').classList.remove('openOption');

  
} function clickAnywhere() {
  document.querySelector('.logo').classList.add('continueStartHide')

  document.querySelector('.continueStart').classList.add('continueStartHide')
 
  
  setTimeout(function(){
    document.querySelector('.pageBackground').classList.add('pageBackgroundShow')
    audioMusicBg.play();

  }, 5000)

 

 
}

