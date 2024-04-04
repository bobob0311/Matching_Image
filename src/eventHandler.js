import gameData from "./gameData.js";
import { swapElements } from "./utils.js";

const countBox = document.getElementById('counter');

function handleClick(event) {
    const currentElement = event.target;
    if (!gameData.previouslySelectedElement) {
        gameData.updatePreviouslySelectedElement(currentElement);
        gameData.previouslySelectedElement.style.opacity = 0.3;
    } else if (gameData.previouslySelectedElement === currentElement) {
        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
                   
    } else {
        swapElements(gameData.previouslySelectedElement, currentElement);
        gameData.updateCount();
        countBox.innerText = gameData.count;
        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
    }   
}

export default handleClick;