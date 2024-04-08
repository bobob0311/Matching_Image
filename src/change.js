import gameData from "./gameData.js";

const countBox = document.getElementById('counter');
const timeBox = document.getElementById('time');

function changeCount() {
    countBox.innerText = gameData.count;
}

function changeTime() {
    timeBox.innerText = gameData.playTime;
}

export { changeCount, changeTime };