console.log('ð¥ð¥ð¥If you see this! cdn is successful.ð¥ð¥ð¥');

function goBack() {
  console.log('â¬ï¸ Back button hit!');
  return window.history.back();
}

const backButton = document.getElementsByClassName('return-back')[0];
backButton.addEventListener('click', goBack);
