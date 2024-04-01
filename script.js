const startButton = document.querySelector('button');

startButton.addEventListener('click', function () {
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');
});

