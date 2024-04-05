import gameData from "./gameData.js";
import { loadPuzzleImages,createInterval,resetGameData } from "./utils.js";

function createFailMessage() {
    const modalSection = document.createElement('section');
    modalSection.classList.add('modal');

    const contentBox = document.createElement('span');
    const content = document.createElement('span');
    content.classList.add('content');

    const retryButton = document.createElement('button');
    
    content.textContent = '실패';
    retryButton.textContent = "다시 시도"

    retryButton.addEventListener('click', function () {
        resetGameData(gameData);
        createInterval(gameData, 5);
        
        document.body.removeChild(modalSection);
    
        gameData.changeOriginalImageset();
        gameData.generateImageIndexes();

        loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
    })
    
    contentBox.appendChild(content);
    contentBox.appendChild(retryButton);

    modalSection.appendChild(contentBox);

    return modalSection;    
}


function createSuccessMessage() {
    const modalSection = document.createElement('section');
    modalSection.classList.add('modal');

    const contentBox = document.createElement('span');

    const count = document.createElement('span');
    const time = document.createElement('span');


    const content = document.createElement('span');
    const buttonWrapper = document.createElement('div');

    content.classList.add('content');
    buttonWrapper.classList.add('button-wrapper')

    const retryButton = document.createElement('button');
    const homeButton = document.createElement('button');
    
    content.textContent = '성공하셨습니다.!!!!!!!!!!!';

    time.innerText = `플레이한 시간 : ${gameData.playTime}초`;
    count.innerText = `움직인 횟수 : ${gameData.count}번`;

    retryButton.textContent = "다시 시도"
    homeButton.textContent = "홈으로"
    retryButton.addEventListener('click', function () {
        resetGameData(gameData);
        createInterval(gameData, 5);
        
        document.body.removeChild(modalSection);
    
        gameData.changeOriginalImageset();
        gameData.generateImageIndexes();

        loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
    })

    homeButton.addEventListener('click', function () {
        const gameScreen = document.querySelector('.game-screen');
        gameScreen.classList.add('hide');

        const startScreen = document.querySelector('.start-screen');
        startScreen.classList.remove('hide');

        document.body.removeChild(modalSection);
    })

    buttonWrapper.appendChild(homeButton);
    buttonWrapper.appendChild(retryButton);

    contentBox.appendChild(content);
    contentBox.appendChild(count);
    contentBox.appendChild(time);
    contentBox.appendChild(buttonWrapper);

    modalSection.appendChild(contentBox);

    return modalSection;    
}



export { createFailMessage, createSuccessMessage};
