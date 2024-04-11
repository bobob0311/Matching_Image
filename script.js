import gameData from "./src/gameData.js";
import { loadPuzzleImages, createImageContainer,handlePuzzleElementClick } from "./src/puzzle.js";
import { resetGameData } from "./src/utils.js";
import limitPage from "./src/limitPage.js";

const startButton = document.querySelector('.startButton');
const puzzleContainer = document.querySelector('.container');
const changeImageButton = document.querySelector('#changeImage');
const choiceSection = document.querySelector('.choice-screen')

startButton.addEventListener('click', function () {
    if (!document.querySelector('.limit-button-wrapper')) limitPage();
    
    resetGameData();

    choiceSection.classList.remove('hide');

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






