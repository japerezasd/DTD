function openOption() {
  document.querySelector('.homePage').classList.add('openOption');

  document.querySelector('.optionTab').classList.add('optionTabShow');

}
function closeOptionTab() {
  document.querySelector('.optionTab').classList.remove('optionTabShow');

  document.querySelector('.homePage').classList.remove('openOption');

  
} 
