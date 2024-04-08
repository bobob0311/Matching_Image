import gameData from "./gameData.js";
import { createInterval, resetGameData } from "./utils.js";
import { loadPuzzleImages } from "./puzzle.js";



function createModal() {  
    console.log('r')
    const modalSection = document.createElement('section');
    modalSection.classList.add('modal');

    const contentBox = document.createElement('span');
    const content = document.createElement('span');
    content.classList.add('content');

    const retryButton = document.createElement('button');

    retryButton.addEventListener('click', function () {
        resetGameData(gameData);
        createInterval(gameData);
        
        document.body.removeChild(modalSection);
    
        gameData.changeOriginalImageset();
        gameData.generateImageIndexes();

        loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
    })
    
    retryButton.textContent = "다시 시도"
    const buttonWrapper = document.createElement('div');
    buttonWrapper.classList.add('modal-button-wrapper')
    buttonWrapper.appendChild(retryButton);
    
    contentBox.appendChild(content);
    contentBox.appendChild(buttonWrapper);
    modalSection.appendChild(contentBox);

    if (!gameData.clear) {
        content.textContent = "실패";
    } else {
        content.textContent = '성공하셨습니다.!!!!!!!!!!!';

        const count = document.createElement('span');
        const time = document.createElement('span');
    
        time.innerText = `플레이한 시간 : ${gameData.playTime}초`;
        count.innerText = `움직인 횟수 : ${gameData.count}번`;

        content.appendChild(count);
        content.appendChild(time);

    
        const homeButton = document.createElement('button');

        homeButton.textContent = "홈으로"

        homeButton.addEventListener('click', function () {
            const gameScreen = document.querySelector('.game-screen');
            gameScreen.classList.add('hide');

            const startScreen = document.querySelector('.start-screen');
            startScreen.classList.remove('hide');

            document.body.removeChild(modalSection);
        })

        buttonWrapper.appendChild(homeButton);
        buttonWrapper.appendChild(retryButton);
    }


    
    return modalSection;
}

export default createModal;
