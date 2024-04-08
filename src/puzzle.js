import gameData from "./gameData.js";
import { checkAnswer } from "./utils.js";
import {changeCount} from "./change.js"


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
}


function handlePuzzleElementClick(event) {
    const currentElement = event.target;

    if (!gameData.previouslySelectedElement) {
        gameData.updatePreviouslySelectedElement(currentElement);
        gameData.previouslySelectedElement.style.opacity = 0.3;

    } else if (gameData.previouslySelectedElement === currentElement) {
        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
                   
    } else {
        gameData.updateCount();
        changeCount();
        swapElements(gameData.previouslySelectedElement, currentElement);
        checkAnswer();

        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
    }   
}

export { loadPuzzleImages, createImageContainer, swapElements, handlePuzzleElementClick };