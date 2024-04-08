function createLimitButton() {
    
    const chioceSection = document.querySelector('.choice-screen')
    
    const limitTimeArray = [10, 20, 30, 40];
    limitTimeArray.map((item) => {
        const limitButton = document.createElement('button');
        limitButton.textContent = item;
        chioceSection.appendChild(limitButton);
    })
}