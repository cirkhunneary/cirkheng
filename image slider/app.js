const sliderImages = [
    {
        text: "Beautiful Beach",
        img: "/images/v1.jpg"
    },
    {
        text: "Dark Night Full of Sky",
        img: "/images/v2.jpg"
    },
    {
        text: "Crayon Balloon",
        img: "/images/v3.jpg"
    },
    {
        text: "Icy Mountain",
        img: "/images/v4.jpg"
    },
    {
        text: "Rocky Mountain",
        img: "/images/v5.jpg"
    },
    {
        text: "Beautiful Waterfall",
        img: "/images/v6.jpg"
    },
    {
        text: "Summer On Island",
        img: "/images/v7.jpg"
    }    
]

const title = document.getElementById("text-title");
const bgImageSlider = document.getElementById("bg-image");
const leftArrow = document.getElementById("arrow-left");
const rightArrow = document.getElementById("arrow-right");

let currentBg = 6;

// to load each of bg-image
window.addEventListener('DOMContentLoaded', function() {
    const slider = sliderImages[currentBg];
    title.textContent = slider.text;
    bgImageSlider.src = slider.img;
});

// to show image
function showPic(){
    const slider = sliderImages[currentBg];
    title.textContent = slider.text;
    bgImageSlider.src = slider.img;
};
 
// left arrow
leftArrow.addEventListener("click", function() {
    currentBg--;
    if(currentBg < 0){
        currentBg = sliderImages.length - 1;
    }
    showPic(currentBg);
});
// right arrow
rightArrow.addEventListener("click", function() {
    currentBg++;
    if(currentBg > sliderImages.length - 1){
        currentBg = 0;
    }
    showPic(currentBg);
});

// auto change bg image every 5s
window.setInterval(function() {
    currentBg++;
    if(currentBg > sliderImages.length - 1){
        currentBg = 0;
    }
    showPic(currentBg);
}, 6000
);

// Tour Part

temples = [
    {
        text: "Ta Phrom Temple",
        img: "/temple/temple1.jpg"
    },
    {
        text: "Angkor Thom Temple",
        img: "/temple/temple2.jpg"
    },
    {
        text: "Apsara in Temple",
        img: "/temple/temple3.jpg"
    },
    {
        text: "Angkor Wat Temple",
        img: "/temple/temple4.jpg"
    }
];

sea = [
    {
        text: "Koh Rong Island",
        img: "/sea/sea1.jpg"
    },
    {
        text: "Koh Songsa Island",
        img: "/sea/sea2.jpg"
    },
    {
        text: "Crap Resort in Sihanouk Ville",
        img: "/sea/sea3.jpg"
    },
    {
        text: "Koh Kong Bridge",
        img: "/sea/sea4.jpg"
    },
    {
        text: "Koh Rong Sonloem",
        img: "/sea/sea5.jpg"
    },
    {
        text: "Sihanouk Ville",
        img: "/sea/sea6.jpg"
    }
];

mountains = [
    {
        text: "Chriev Mountain",
        img: "/mountain/mountain1.jpg"
    },
    {
        text: "Chriev Waterfall",
        img: "/mountain/mountain2.jpeg"
    },
    {
        text: "Oral Mountain",
        img: "/mountain/mountain3.jpg"
    },
    {
        text: "Khnong Psa Mountain",
        img: "/mountain/mountain4.jpg"
    },
    {
        text: "Camping at Khnong Psa",
        img: "/mountain/mountain1.jpg"
    }
];

const tourTemple = document.getElementById("temple");
const templeImage = document.getElementById("temple-image");    
const templeTitle = document.getElementById("temple-title");
const seaImage = document.getElementById("sea-image");
const seaTitle = document.getElementById("sea-title");
const mountainImage = document.getElementById("mountain-image");
const mountainTitle = document.getElementById("mountain-title");

// For temple div
let currentTemple = 0;

// to load each of the temple images
window.addEventListener('DOMContentLoaded', function() {
    const templePic = temples[currentTemple];
    templeTitle.textContent = templePic.text;
    templeImage.src = templePic.img;
});
// to show image
function showTemple(){
    const templePic = temples[currentTemple];
    templeTitle.textContent = templePic.text;
    templeImage.src = templePic.img;
};
//  Set time to load image
window.setInterval(function() {
    currentTemple++;
    if(currentTemple > temples.length - 1){
        currentTemple = 0;
    }
    showTemple(currentTemple);
}, 4000
);

// For sea div
let currentSea = 0;

// to load each of the sea images
window.addEventListener('DOMContentLoaded', function() {
    const seaPic = sea[currentSea];
    seaTitle.textContent = seaPic.text;
    seaImage.src = seaPic.img;
});
// to show image
function showSea(){
    const seaPic = sea[currentSea];
    seaTitle.textContent = seaPic.text;
    seaImage.src = seaPic.img;
};
//  Set time to load image
window.setInterval(function() {
    currentSea++;
    if(currentSea > sea.length - 1){
        currentSea = 0;
    }
    showSea(currentSea);
}, 5000
);

// For Mountain Part
let currentMountain = 0;

// to load each of the sea images
window.addEventListener('DOMContentLoaded', function() {
    const mountainPic = mountains[currentMountain];
    mountainTitle.textContent = mountainPic.text;
    mountainImage.src = mountainPic.img;
});
// to show image
function showMountain(){
    const mountainPic = mountains[currentMountain];
    mountainTitle.textContent = mountainPic.text;
    mountainImage.src = mountainPic.img;
};
//  Set time to load image
window.setInterval(function() {
    currentMountain++;
    if(currentMountain > mountains.length - 1){
        currentMountain = 0;
    }
    showMountain(currentMountain);
}, 4000
);
