/* const imagesThemselves = document.querySelectorAll('.image-itself'); */
const imagesContainer = document.querySelector('.images-container');
const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');
let imageIndexCounter = 0;
let imagePositionCounter = 0;
const picturePaths = [
    "https://img1.wallspic.com/previews/6/3/0/9/7/179036/179036-umbrella-pink-magenta-city-midnight-x750.jpg",
    "https://img2.wallspic.com/previews/8/1/6/9/7/179618/179618-spider_man-superhero-television-spider_man_no_way_home-spider_man_homecoming-x750.jpg",
    "https://img3.wallspic.com/previews/7/3/6/9/7/179637/179637-freestyle_motocross-motorcycle-ktm-dakar_rally-off_road_racing-x750.jpg",
    "https://img2.wallspic.com/previews/2/1/8/9/7/179812/179812-summit-soundbar-television-bluetooth-usb-x750.jpg",
    "https://img2.wallspic.com/previews/9/6/3/9/7/179369/179369-woman-earth-atmosphere-world-light-x750.jpg",
    "https://img1.wallspic.com/previews/2/1/3/9/7/179312/179312-cherry_blossom-prunus-flower-plant-petal-x750.jpg",
    "https://img1.wallspic.com/previews/8/2/4/9/7/179428/179428-visual_arts-graphic_design-purple-entertainment-art-x750.jpg",
    "https://img2.wallspic.com/previews/1/4/8/9/7/179841/179841-astronaut_sitting-astronaut-outer_space-space_station-space_exploration-x750.jpg",
    "https://img3.wallspic.com/previews/6/6/9/8/7/178966/178966-light-water-cloud-plant-water_resources-x750.jpg",
    "https://img3.wallspic.com/previews/0/5/1/9/7/179150/179150-glowing_purge_mask-mask-plant-purple-fun-x750.jpg"
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