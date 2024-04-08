import gameData from "./src/gameData.js";
import { loadPuzzleImages, createImageContainer,handlePuzzleElementClick } from "./src/puzzle.js";
import { resetGameData,createInterval } from "./src/utils.js";

const startButton = document.querySelector('.startButton');
const puzzleContainer = document.querySelector('.container');
const changeImageButton = document.querySelector('#changeImage');
const chioceSection = document.querySelector('.choice-screen')
const gameScreen = document.querySelector('.game-screen');
    
const limitTimeArray = [10, 20, 30, 40];
    limitTimeArray.map((item) => {
    const limitButton = document.createElement('button');
    limitButton.textContent = item;
        limitButton.addEventListener('click', function () {
        chioceSection.classList.add('hide');
        gameScreen.classList.remove('hide');
            gameData.limitTime = item;    
            console.log(gameData.limitTime);
    })
    
    chioceSection.appendChild(limitButton);


})



startButton.addEventListener('click', function () {
    resetGameData(gameData);
    createInterval(gameData);
    
    chioceSection.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');

    gameData.changeOriginalImageset();
    gameData.generateImageIndexes();


    if (!document.getElementById(1)) {
        for (let i = 0; i < 9; i++) {
        const index = i;
        const div = createImageContainer(gameData.imageSet, gameData.imageIndexArray[i],index);
        div.addEventListener('click',  handlePuzzleElementClick);
        puzzleContainer.appendChild(div);
    } 
    } else {
        loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
    }
});

changeImageButton.addEventListener('click', function () {
    gameData.changeOriginalImageset();
    loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
})






