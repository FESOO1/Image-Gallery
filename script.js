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
    "https://img1.wallspic.com/previews/8/6/5/9/7/179568/179568-companion_dog-american_cocker_spaniel-border_collie-cavalier_king_charles_spaniel-alaskan_klee_kai-x750.jpg",
    "https://img3.wallspic.com/previews/7/3/3/9/7/179337/179337-8k_nature-nature-tablet-water-water_resources-x750.jpg",
    "https://img1.wallspic.com/previews/1/4/3/9/7/179341/179341-bryce_canyon_national_park-zion_national_park-national_park-park-bryce_canyon_zion_national_park-x750.jpg",
    "https://img3.wallspic.com/previews/2/8/3/9/7/179382/179382-wood-huawei-harmonyos-tablet-harmonyos_4-x750.jpg",
    "https://img1.wallspic.com/previews/5/6/1/9/7/179165/179165-forest-damaksnis-atmosphere-plant-light-x750.jpg",
    "https://img1.wallspic.com/previews/2/4/1/9/7/179142/179142-nebulosa_bubble-nebula-star-bubble_nebula-hubble_space_telescope-x750.jpg"
];

// DISPLAYING IMAGES

function displayingImages() {
    for (let i = 0; i < picturePaths.length; i++) {
        const newImage = document.createElement('img');
        newImage.classList.add('image-itself');
        newImage.src = picturePaths[i];

        imagesContainer.appendChild(newImage);
    };
    imagesContainer.firstElementChild.classList.add('image-itself-active');
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

// IMAGES THEMSELVES
const imagesThemselves = imagesContainer.querySelectorAll('img');

for (let i = 0; i < imagesThemselves.length; i++) {
    // HOVER
    imagesThemselves[i].addEventListener('mouseleave', () => {
        imagesThemselves[i].classList.remove('image-itself-hover');
    });
    imagesThemselves[i].addEventListener('mouseenter', () => {
        if (!imagesThemselves[i].classList.contains('image-itself-active')) {
            imagesThemselves[i].classList.add('image-itself-hover');
        };
    });
    // CLICK
    imagesThemselves[i].addEventListener('click', () => {
        for (const imagesItself of imagesThemselves) {
            imagesItself.classList.remove('image-itself-active');
        };
        imagesThemselves[i].classList.remove('image-itself-hover');
        imagesThemselves[i].classList.add('image-itself-active');
        
        imagePositionCounter = 310 * i;
        imagesThemselves[0].style.marginLeft = `-${imagePositionCounter}px`;
        
        // UPDATING THE VALUES
        imageIndexCounter = i;

        switch (i) {
            case 0:
                prevButton.disabled = true;
                break;
            case 1:
                prevButton.disabled = false;
                break;
            case 2:
                prevButton.disabled = false;
                break;
            case 3:
                prevButton.disabled = false;
                break;
            case 4:
                prevButton.disabled = false;
                break;
            case imagesThemselves.length - 1:
                nextButton.disabled = true;
                break;
            case imagesThemselves.length - 2:
                nextButton.disabled = false;
                break;
            case imagesThemselves.length - 3:
                nextButton.disabled = false;
                break;
            case imagesThemselves.length - 4:
                nextButton.disabled = false;
                break;
            case imagesThemselves.length - 5:
                nextButton.disabled = false;
                break;
        };
    });
};