import gameData from "./gameData.js";
import { swapElements } from "./utils.js";

const countBox = document.getElementById('counter');

function handleClick(event) {
    const currentElement = event.target;
    console.log(event.target);
    if (!gameData.previouslySelectedElement) {
        gameData.updatePreviouslySelectedElement(currentElement);
        gameData.previouslySelectedElement.style.opacity = 0.3;
    } else if (gameData.previouslySelectedElement === currentElement) {
        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
                   
    } else {
        gameData.updateCount();
        swapElements(gameData.previouslySelectedElement, currentElement);
        console.log(gameData.imageIndexArray)
        console.log(gameData.currentImageIndexArray);
        countBox.innerText = gameData.count;
        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
    }   
}

export default handleClick;