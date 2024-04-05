const gameData = {
  previouslySelectedElement: null,
  imageSet: 1,
  imageIndexArray: [],
  count: 0,
  playTime: null,
  currentImageIndexArray: [],
  clear : false,

  changeOriginalImageset: function () {
    this.imageSet = Math.ceil(Math.random() * 3);

    const originalImage = document.getElementById("originalImage");
    originalImage.setAttribute(
      "src",
      `./data/image${this.imageSet}/originalImage.png`
    );

  },

  generateImageIndexes: function () {
    const uniqueNumbers = new Set();

    while (uniqueNumbers.size < 9) {
      uniqueNumbers.add(Math.ceil(Math.random() * 9));
    }
    this.imageIndexArray = [...uniqueNumbers];
    this.currentImageIndexArray = this.imageIndexArray;
  },

  updatePreviouslySelectedElement: function (newElement) {
    this.previouslySelectedElement = newElement;
  },

  updateCount: function () {
    this.count += 1;
  },

  resetCount: function () {
    this.count = 0;
  },

  updatePlayTime: function () {
    this.playTime +=1 
  },

  resetPlayTime: function () {
    this.playTime = 0;
  }
};

export default gameData;
