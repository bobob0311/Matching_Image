import gameData from "./gameData.js";
import {createFailMessage,createSuccessMessage} from "./modal.js";

const failModal = createFailMessage();
const countBox = document.getElementById('counter');
const timeBox = document.getElementById('time')

function loadPuzzleImages(imageSet, imageIndexArray) {
    const puzzleImages = document.querySelectorAll('.container img');
    puzzleImages.forEach((img, index) => {
        img.id = index;
        img.setAttribute('src', `./data/image${imageSet}/image${imageIndexArray[index]}.jpg`);
    })
}

function createImageContainer(imageSet, imageIndex,index) {    
    const div = document.createElement('div');
    div.classList.add('image-container');
    div.setAttribute('id', `${index}` ); 

    const img = document.createElement('img');
    img.setAttribute('src', `./data/image${imageSet}/image${imageIndex}.jpg`);
    div.appendChild(img);

    return div;
}

function swapElements(element1, element2) {
    const parent1 = element1.parentNode;
    const parent2 = element2.parentNode;
    
    parent1.removeChild(element1);
    parent2.removeChild(element2);

    parent1.appendChild(element2);
    parent2.appendChild(element1);

    const temp = gameData.currentImageIndexArray[parent1.id];
    gameData.currentImageIndexArray[parent1.id] = gameData.currentImageIndexArray[parent2.id];
    gameData.currentImageIndexArray[parent2.id] = temp

    checkAnswer();
}

function createInterval(gameData,limitTime,intervalTime = 1000) {
    const intervalId = setInterval(function () {
        gameData.updatePlayTime()
        timeBox.innerText = gameData.playTime;
    if (gameData.playTime === limitTime) {
        clearInterval(intervalId)
        document.body.insertAdjacentElement('afterbegin', failModal);
    }
    if (gameData.clear) {
        clearInterval(intervalId)
    }
    }, intervalTime);
}




function resetGameData(gameData) {
    gameData.resetCount();
    gameData.resetPlayTime();

    timeBox.innerText = gameData.playTime;
    countBox.innerText = gameData.count;

    gameData.clear = false;
}

function checkAnswer() {
    if (JSON.stringify(gameData.currentImageIndexArray) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
        const successModal = createSuccessMessage();
        document.body.insertAdjacentElement('afterbegin', successModal);
        gameData.clear = true;
    }

}


export { loadPuzzleImages, createImageContainer, swapElements, createInterval, resetGameData, checkAnswer };