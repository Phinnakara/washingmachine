document.addEventListener('DOMContentLoaded', function() {
  var startButton = document.getElementById('start-button');
  var coinSlot = document.getElementById('coin-slot');
  var washingMachine = document.getElementById('washing-machine');
  var result = document.getElementById('result');

  startButton.addEventListener('click', function() {
      coinSlot.innerHTML = '<img src="coin.png" alt="coin" width="80" height="80">';
      result.textContent = '';

      setTimeout(function() {
          coinSlot.innerHTML = '';
          var randomNumber = Math.random();

          if (randomNumber < 0.5) {
              result.textContent = 'ผ้าไม่สะอาด';
          } else {
              result.textContent = 'ผ้าสะอาด';
          }
      }, 3000);
  });
});
