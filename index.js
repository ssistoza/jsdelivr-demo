console.log('🔥🔥🔥If you see this! cdn is successful.🔥🔥🔥');

function goBack() {
  console.log('⬅️ Back button hit!');
  return window.history.back();
}

const backButton = document.getElementsByClassName('return-back')[0];
backButton.addEventListener('click', goBack);
