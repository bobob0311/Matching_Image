const startButton = document.querySelector('button');
const puzzleContainer = document.querySelector('.container');

let previouslySelectedElement = null;

startButton.addEventListener('click', function () {
    const imageSet = Math.ceil((Math.random() * 3)); 
    console.log(imageSet);

    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');

    const originalImage =document.getElementById('originalImage');
    originalImage.setAttribute('src', `./data/image${imageSet}/originalImage.png`);

    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < 9) {
        uniqueNumbers.add(Math.ceil(Math.random() * 9))    
    }
    const imageIndexArray = [...uniqueNumbers];

    for (let i = 0; i < 9;i++) {
        console.log(i);
        const div = document.createElement('div');
        div.classList.add('image-container');

        const img = document.createElement('img');
        img.setAttribute('src', `./data/image${imageSet}/image${imageIndexArray[i]}.jpg`);
        div.appendChild(img);

        div.addEventListener('click',  (event) =>  {
            const currentElement = event.target;
            if (!previouslySelectedElement) {
                previouslySelectedElement = currentElement;
                previouslySelectedElement.style.opacity = 0.3;
            } else {
                if (previouslySelectedElement === currentElement) {
                    previouslySelectedElement.style.opacity = 1;
                    previouslySelectedElement = null;
                } else {
                    const parent1 = previouslySelectedElement.parentNode;
                    const parent2 = currentElement.parentNode;
                    
                    parent1.removeChild(previouslySelectedElement);
                    parent2.removeChild(currentElement);

                    parent1.appendChild(currentElement);
                    parent2.appendChild(previouslySelectedElement);

                    previouslySelectedElement.style.opacity = 1;
                    previouslySelectedElement = null;
                }
            }
        });
        puzzleContainer.appendChild(div);
    }
});






