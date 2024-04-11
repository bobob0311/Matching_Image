
import { createInterval } from "./utils.js";
import gameData from "./gameData.js";

export default function limitPage() {
    const gameScreen = document.querySelector('.game-screen');
    const choiceSection = document.querySelector('.choice-screen')
    const limitTimeArray = [10, 20, 30];

    const limitButtonWrapper = document.createElement('div');
    limitButtonWrapper.classList.add('limit-button-wrapper')
    
    const limitContent = document.createElement('span');
    limitContent.textContent = "원하시는 제한시간을 설정해주세요.";
    
    choiceSection.appendChild(limitContent);
    choiceSection.appendChild(limitButtonWrapper);

    limitTimeArray.map((item) => {
        const limitButton = document.createElement('button');
        limitButton.textContent = item;
        limitButton.addEventListener('click', function () {
            choiceSection.classList.add('hide');
            gameScreen.classList.remove('hide');
            gameData.limitTime = item;   
            createInterval();
        })
    limitButtonWrapper.appendChild(limitButton);
    })
    return choiceSection;
}


