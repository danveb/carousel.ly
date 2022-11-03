const leftArrow = document.querySelector(".left"); 
const rightArrow = document.querySelector(".right"); 
const slider = document.querySelector(".slider"); 
const images = document.querySelectorAll(".image"); 
const bottomDiv = document.querySelector(".bottom"); 

let slideNumber = 1; 
const length = images.length; 

for(let i = 0; i < length; i++) {
    const div = document.createElement("div"); 
    div.className = "button"; 
    bottomDiv.appendChild(div); 
};

const buttons = document.querySelectorAll(".button"); 
buttons[0].style.backgroundColor = "#fff"; 

const resetBackground = () => {
    buttons.forEach((button) => {
        button.style.backgroundColor = "transparent"; 
    });
};

buttons.forEach((button, idx) => {
    button.addEventListener("click", () => {
        resetBackground(); 
        slider.style.transform = `translateX(-${idx * 800}px)`;
        slideNumber = idx + 1; 
        buttons[idx].style.backgroundColor = "#fff"; 
    });
});

const nextSlide = () => {
    slider.style.transform = `translateX(-${slideNumber * 800}px)`; 
    slideNumber++; 
};

const prevSlide = () => {
    slider.style.transform = `translateX(-${(slideNumber -2) * 800}px)`; 
    slideNumber--; 
};

const getFirstSlide = () => {
    slider.style.transform = `translateX(0)`; 
    slideNumber = 1; 
};

const getLastSlide = () => {
    slider.style.transform = `translateX(-${(length-1) * 800}px)`;
    slideNumber = length; 
};

const changeColor = () => {
    resetBackground(); 
    buttons[slideNumber-1].style.backgroundColor = "#fff"; 
};

rightArrow.addEventListener("click", () => {
    // console.log("clicked"); 
    slideNumber < length ? nextSlide() : getFirstSlide(); 
    changeColor(); 
});

leftArrow.addEventListener("click", () => {
    slideNumber > 1 ? prevSlide() : getLastSlide(); 
    changeColor(); 
});