const carouselImages = [
    "images/ring/Custom Ring 4.png",
    "images/ring/Custom Ring 7.png",
    "images/ring/Custom Ring 9.png",
    "images/bracelet/Custom Bracelet 2.png",
    "images/bracelet/Custom Bracelet 5.png",
    "images/bracelet/Custom Bracelet 9.png",
    "images/necklace/Custom Necklace 1.png",
    "images/necklace/Custom Necklace 4.png",
    "images/necklace/Custom Necklace 7.png"
];

 let currentIndex = 0;

const carouselImg = document.querySelector(".carousel-img");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

function updateImage() {
    carouselImg.classList.add("fade");
    setTimeout(() => {
        carouselImg.src = carouselImages[currentIndex];
        carouselImg.classList.remove("fade");
    }, 300);
}

nextBtn.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateImage();
});

prevBtn.addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + carouselImages.length) % carouselImages.length;
    updateImage();
});

setInterval(() => {
    currentIndex = (currentIndex + 1) % carouselImages.length;
    updateImage();
}, 5000);