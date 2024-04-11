import gameData from "./gameData.js";
import {changeCount, changeTime} from "./change.js"
import createModal from "./modal.js";


function createInterval() {
    const intervalId = setInterval(function () {
        if (!gameData.clear) {
            gameData.updatePlayTime()
            changeTime();
        } 
        
        if (gameData.clear) {
            clearInterval(intervalId);
        } else if  (gameData.playTime === gameData.limitTime) {
            clearInterval(intervalId);
            document.body.insertAdjacentElement('afterbegin', createModal());
        } 

    }, 1000);
}

function resetGameData() {
    gameData.resetCount();
    gameData.resetPlayTime();
    changeTime();
    changeCount();

    gameData.clear = false;
}



function checkAnswer() {
    if (JSON.stringify(gameData.currentImageIndexArray) === JSON.stringify([1, 2, 3, 4, 5, 6, 7, 8, 9])) {
        gameData.clear = true;
        document.body.insertAdjacentElement('afterbegin', createModal());
    }

}




export {createInterval, resetGameData, checkAnswer };