const carouselImages = [
    "images/ring/Custom Ring 1.png",
    "images/ring/Custom Ring 2.png",
    "images/ring/Custom Ring 3.png",
    "images/ring/Custom Ring 4.png",
    "images/ring/Custom Ring 5.png",
    "images/ring/Custom Ring 6.png",
    "images/ring/Custom Ring 7.png",
    "images/ring/Custom Ring 8.png",
    "images/ring/Custom Ring 9.png",
    "images/ring/Custom Ring 10.png"
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