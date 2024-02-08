let aud = document.querySelector('.aud');
let vol = document.querySelector('#vol');
let num = document.querySelector('.num')

aud.volume= 0.2;

vol.oninput = function(){
  aud.volume = vol.value/100;
  num.innerHTML=vol.value;
}

const audio = new Audio();
audio.src="audio/mixkit-classic-click-1117.wav"