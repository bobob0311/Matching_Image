import gameData from "./gameData.js";
import { loadPuzzleImages } from "./utils.js";

const countBox = document.getElementById('counter');
const timeBox = document.getElementById('time')
const limitTime = 5;
function createFailMessage() {
    const modalSection = document.createElement('section');
    modalSection.classList.add('modal');

    const contentBox = document.createElement('span');
    const content = document.createElement('span');
    content.classList.add('fail');

    const retryButton = document.createElement('button');
    
    content.textContent = '실패';
    retryButton.textContent = "다시 시도"

    retryButton.addEventListener('click', function () {
        gameData.resetCount();
        gameData.resetPlayTime();

        timeBox.innerText = gameData.playTime;
        countBox.innerText = gameData.count;
        const intervalId = setInterval(function () {
            gameData.updatePlayTime()
            timeBox.innerText = gameData.playTime;
        if (gameData.playTime === limitTime) {
                clearInterval(intervalId)
                const modal = createFailMessage()
                document.body.insertAdjacentElement('afterbegin', modal);
            } 
        }, 1000);
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

export default createFailMessage;
