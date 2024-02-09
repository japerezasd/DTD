function heroPick(hero) {

  
  document.querySelector('.fade').classList.remove('fadeIn');
  document.querySelector('.heroChosen').classList.add('heroScreen')
  document.querySelector('.heroPicked').classList.add('heroPickedShow');
  document.querySelector('.continueButton').classList.add('continueButtonShow');

  let heroChosen = document.querySelector('.heroPicked');

  if (hero === 'reymart') {
    heroChosen = document.querySelector('.heroPicked').innerHTML='You Pick the Indigenous Man'
  }else if (hero === 'patria') {
    heroChosen = document.querySelector('.heroPicked').innerHTML='You Pick the Double banger'
  }else if (hero === 'russell'){
    heroChosen = document.querySelector('.heroPicked').innerHTML='You Pick the Happy Warrior'
  }  

  setTimeout(function() {
    return exitChosenHeroText(hero);
}, 5000 ) 

}


function exitChosenHeroText(hero){
  
   
    document.querySelector('.heroPicked').classList.remove('heroPickedShow');
  document.querySelector('.continueButton').classList.remove('continueButtonShow');

  
  if (hero === 'reymart') {
    document.querySelector('.statsOfHero1').classList.add('h');
  }else if (hero === 'patria') {
    document.querySelector('.statsOfHero2').classList.add('h');
  }else if (hero ==='russell') {
    document.querySelector('.statsOfHero3').classList.add('h');
  }
  audioMusicBg.pause();
  audioStats.play();
  

  if (hero === 'reymart') {
    document.querySelector('.inMan').classList.add('statsShow')
      document.querySelector('scrollBackground').classList.add('statsShow')
  }else if (hero === 'patria') {
      document.querySelector('.pat').classList.add('statsShow');
  }else if (hero ==='russell') {
      document.querySelector('.russ').classList.add('statsShow');
  }
    
  }

     
 




function countDown() {
  var timer=4;
  var myTimer=setInterval(function(){
  document.getElementById('btn').innerHTML =+timer--+ "";
  if(timer == -1 ){
  clearInterval(myTimer);
  document.getElementById('btn').innerHTML="";
  }
  }, 1000);
}

