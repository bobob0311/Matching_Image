const startButton = document.querySelector('button');
const puzzleContainer = document.querySelector('.container');
const changeImageButton = document.querySelector('#changeImage');


const gameData = {
    previouslySelectedElement : null,
    imageSet : 1,
    imageIndexArray: [],
    
    changeOriginalImageset: function () {
        this.imageSet = Math.ceil((Math.random() * 3)); 

        const originalImage = document.getElementById('originalImage');
        originalImage.setAttribute('src', `./data/image${this.imageSet}/originalImage.png`);
    },

    generateImageIndexes: function () {
        const uniqueNumbers = new Set();

        while (uniqueNumbers.size < 9) {
            uniqueNumbers.add(Math.ceil(Math.random() * 9))    
        }
        this.imageIndexArray = [...uniqueNumbers];
    },

    updatePreviouslySelectedElement: function (newElement) {
        this.previouslySelectedElement = newElement;
    }
}


function loadPuzzleImages(imageSet, imageIndexArray) {
    const puzzleImages = document.querySelectorAll('.container img');
    puzzleImages.forEach((img,index) => {
        img.setAttribute('src', `./data/image${imageSet}/image${imageIndexArray[index]}.jpg`);
    })
}

function createImageContainer(imageSet, imageIndex) {    
    const div = document.createElement('div');
    div.classList.add('image-container');

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

}

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

        gameData.previouslySelectedElement.style.opacity = 1;
        gameData.updatePreviouslySelectedElement(null);
    }   
}
startButton.addEventListener('click', function () {
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');

    gameData.changeOriginalImageset();
    gameData.generateImageIndexes();

    for (let i = 0; i < 9; i++) {
        const div = createImageContainer(gameData.imageSet, gameData.imageIndexArray[i]);


        div.addEventListener('click',  handleClick);
        puzzleContainer.appendChild(div);
    }
});

changeImageButton.addEventListener('click', function () {
    gameData.changeOriginalImageset();
    loadPuzzleImages(gameData.imageSet, gameData.imageIndexArray);
})






