/* const imagesThemselves = document.querySelectorAll('.image-itself'); */
const imagesContainer = document.querySelector('.images-container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let imageIndexCounter = 0;
let imagePositionCounter = 0;
const picturePaths = [
    "https://images.unsplash.com/photo-1516117172878-fd2c41f4a759",
    "https://images.unsplash.com/photo-1532009324734-20a7a5813719",
    "https://images.unsplash.com/photo-1524429656589-6633a470097c",
    "https://images.unsplash.com/photo-1530224264768-7ff8c1789d79",
    "https://images.unsplash.com/photo-1569092052906-ff3762bf3f48",
    "https://images.unsplash.com/photo-1541698444083-023c97d3f4b6",
    "https://images.unsplash.com/photo-1574169208507-8437614484d9",
    "https://images.unsplash.com/photo-1593642532973-d31b6557fa68",
    "https://images.unsplash.com/photo-1513938709626-033611b8cc03",
    "https://images.unsplash.com/photo-1506765515384-028b60a970df"
];

// DISPLAYING IMAGES

function displayingImages() {
    for (let i = 0; i < picturePaths.length; i++) {
        const newImage = document.createElement('img');
        newImage.classList.add('image-itself');
        newImage.src = picturePaths[i];

        imagesContainer.appendChild(newImage);
        imagesContainer.firstElementChild.classList.add('image-itself-active');
    };
};

displayingImages();

// PREV
prevButton.addEventListener('click', () => {
    const imagesThemselves = imagesContainer.querySelectorAll('img');
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
    const imagesThemselves = imagesContainer.querySelectorAll('img');
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