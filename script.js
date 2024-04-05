import gameData from "./src/gameData.js";
import { loadPuzzleImages, createImageContainer,resetGameData,createInterval } from "./src/utils.js";
import handleClick from "./src/eventHandler.js";

const startButton = document.querySelector('.startButton');
const puzzleContainer = document.querySelector('.container');
const changeImageButton = document.querySelector('#changeImage');

startButton.addEventListener('click', function () {
    resetGameData(gameData);
    createInterval(gameData, 300);
    
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');

    gameData.changeOriginalImageset();
    gameData.generateImageIndexes();


    if (!document.getElementById(1)) {
        for (let i = 0; i < 9; i++) {
        const index = i;
        const div = createImageContainer(gameData.imageSet, gameData.imageIndexArray[i],index);
        div.addEventListener('click',  handleClick);
        puzzleContainer.appendChild(div);
    } 
    } else {
        loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
    }
});

changeImageButton.addEventListener('click', function () {
    gameData.changeOriginalImageset();
    resetGameData(gameData);
    loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
})






