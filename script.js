const imagesThemselves = document.querySelectorAll('.image-itself');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let imageIndexCounter = 0;
let imagePositionCounter = 0;

// PREV
prevButton.addEventListener('click', () => {
    // REMOVING THE CLASS FROM THE CURRENT ACTIVE ELEMENT
    imagesThemselves[imageIndexCounter].classList.remove('image-itself-active');
    // PUSHING THE NOW DEACTIVE ELEMENT TO THE RIGHT
    imagePositionCounter -= 310;
    imagesThemselves[0].style.marginLeft = `-${imagePositionCounter}px`;
    // ADDING THE CLASS TO THE CURRENT ACTIVE ELEMENT
    imageIndexCounter--;
    imagesThemselves[imageIndexCounter].classList.add('image-itself-active');
    // ENABLING THE NEXT BUTTON
    nextButton.disabled = false;

    // DISABLING THE PREV BUTTON IF IMAGEINDEXCONTAINER VARIABLE EQUALS TO 0
    if (imageIndexCounter === 0) {
        prevButton.disabled = true;
    };
});

// NEXT
nextButton.addEventListener('click', () => {
    // REMOVING THE CLASS FROM THE CURRENT ACTIVE ELEMENT
    imagesThemselves[imageIndexCounter].classList.remove('image-itself-active');
    // PUSHING THE NOW DEACTIVE ELEMENT TO THE LEFT
    imagePositionCounter += 310;
    imagesThemselves[0].style.marginLeft = `-${imagePositionCounter}px`;
    // ADDING THE CLASS TO THE CURRENT ACTIVE ELEMENT
    imageIndexCounter++;
    imagesThemselves[imageIndexCounter].classList.add('image-itself-active');
    // ENABLING THE PREV BUTTON
    prevButton.disabled = false;

    // DISABLING THE NEXT BUTTON IF THE LENGTH OF THE IMAGES EQUALS TO IMAGEINDEXCONTAINER VARIABLE
    if (imageIndexCounter === imagesThemselves.length - 1) {
        nextButton.disabled = true;
    };
});