let audioMusicBg = document.querySelector('.audioMusicBg');
let vol = document.querySelector('#vol');
let num = document.querySelector('.num')

function preload() {
  audioMusicBg = loadSound("infinite-World-chosic.com_.mp3")
}

audioMusicBg.volume= 0.2;

vol.oninput = function(){
  audioMusicBg.volume = vol.value/100;
  num.innerHTML=vol.value;
}


const audioStats = new Audio();
audioStats.src="audio/match-61050.mp3";

const audioClick = new Audio();
audioClick.src="audio/mixkit-classic-click-1117.wav";