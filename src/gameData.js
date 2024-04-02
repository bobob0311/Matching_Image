const gameData = {
  previouslySelectedElement: null,
  imageSet: 1,
  imageIndexArray: [],

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
  },

  updatePreviouslySelectedElement: function (newElement) {
    this.previouslySelectedElement = newElement;
  },
};

export default gameData;
