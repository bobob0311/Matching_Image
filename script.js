import gameData from "./src/gameData.js";
import { loadPuzzleImages, createImageContainer } from "./src/utils.js";
import handleClick from "./src/eventHandler.js";
import createFailMessage from "./src/modal.js";

const startButton = document.querySelector('.startButton');
const puzzleContainer = document.querySelector('.container');
const changeImageButton = document.querySelector('#changeImage');
const timeBox = document.getElementById('time')
const limitTime = 5;
console.log(startButton)

startButton.addEventListener('click', function () {
    gameData.resetPlayTime();
    const intervalId = setInterval(function () {
        gameData.updatePlayTime()
        timeBox.innerText = gameData.playTime;
        if (gameData.playTime === limitTime) {
            clearInterval(intervalId)
            const modal = createFailMessage()
            document.body.insertAdjacentElement('afterbegin', modal);
        } 
    }, 1000);
    
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');

    gameData.changeOriginalImageset();
    gameData.generateImageIndexes();

    for (let i = 0; i < 9; i++) {
        const div = createImageContainer(gameData.imageSet, gameData.imageIndexArray[i]);
        div.addEventListener('click',  handleClick);
        puzzleContainer.appendChild(div);
    }
});

changeImageButton.addEventListener('click', function () {
    gameData.changeOriginalImageset();
    loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
})






