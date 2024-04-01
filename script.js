const startButton = document.querySelector('button');
const puzzleContainer = document.querySelector('.container');

const uniqueNumbers = new Set();
while (uniqueNumbers.size < 9) {
    uniqueNumbers.add(Math.ceil(Math.random() * 9))    
}
const imageIndexArray = [...uniqueNumbers];

startButton.addEventListener('click', function () {
    const gameScreen = document.querySelector('.game-screen');
    gameScreen.classList.remove('hide');

    const startScreen = document.querySelector('.start-screen');
    startScreen.classList.add('hide');

    const originalImage =document.getElementById('originalImage');
    originalImage.setAttribute('src', "./data/image1/originalImage.png");

    for (let i = 0; i < 9;i++) {
        console.log(i);
        const div = document.createElement('div');
        div.classList.add('image-container');

        const img = document.createElement('img');
        img.setAttribute('src', `./data/image1/image${imageIndexArray[i]}.jpg`);
        div.appendChild(img);

        puzzleContainer.appendChild(div);
    }
});




