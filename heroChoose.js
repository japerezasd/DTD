function heroPick(hero) {
  document.querySelector('.fade').classList.remove('fadeIn');
  document.querySelector('.heroChosen').classList.add('heroScreen')
  document.querySelector('.heroPicked').classList.add('heroPickedShow');
  document.querySelector('.continueButton').classList.add('continueButtonShow');

  const heroChosen = document.querySelector('.heroPicked');

  if (hero === 'reymart') {
    heroChosen = document.querySelector('.heroPicked').innerHTML='You Pick the Indigenous Man'
  }else if (hero === 'patria') {
    heroChosen = document.querySelector('.heroPicked').innerHTML='You Pick the Double banger'
  }else {
    heroChosen = document.querySelector('.heroPicked').innerHTML='You Pick the Happy Warrior'
  }

  

}
function exitChosenHeroText() {
  document.querySelector('.heroPicked').classList.remove('heroPickedShow');
  document.querySelector('.continueButton').classList.remove('continueButtonShow');
  
}