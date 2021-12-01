var slideIndex = 0;
var isStart = true;
loadShow();
stop();
start();
slideShows();
nextSlide();
preSlide();
function loadShow() {
    let slides = document.getElementsByClassName("slides"); 
    for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    }
    if (slideIndex > slides.length - 1) slideIndex = 0;
    slides[slideIndex].style.display = "block";
    console.log(slideIndex);
}

function slideShows() {
    let autoshow = setInterval(() => {
        {
            if (!isStart) {
                clearInterval(autoshow);
                //break
            } else {
                slideIndex++;
                let slides = document.getElementsByClassName("slides"); 
                for (i = 0; i < slides.length; i++) {
                slides[i].style.display = "none";
                }
                if (slideIndex > slides.length - 1) slideIndex = 0;
                slides[slideIndex].style.display = "block";
                console.log(slideIndex);
            }
        }
        console.log("second")
    }, 10000);
}
function stop() {
    let buttonStop = document.getElementById("stop")
    if (buttonStop) {
        buttonStop.addEventListener("click", () => {
            if (isStart) {
                isStart = false;
                console.log("stop")
            }
        })
    }
}
function start() {
    const buttonStart = document.getElementById("start");
    if (buttonStart) {
        buttonStart.addEventListener("click", () => {
            if (!isStart) {
                isStart = true;
                slideShows();
                console.log("start")
            }
        })
    }
}


function nextSlide() {
    let button = document.getElementById("next");
    if (button) {
        button.addEventListener("click", () => {
            //if (isStart)
            stop();
            slideIndex++;
            let slides = document.getElementsByClassName("slides"); 
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
            }
            if (slideIndex > slides.length - 1) slideIndex = 0;
            slides[slideIndex].style.display = "block";
            console.log(slideIndex)
            start();
        })
    }
}

function preSlide() {
    let button = document.getElementById("pre");
    if (button) {
        button.addEventListener("click", () => {
            stop();
            slideIndex--;
            let slides = document.getElementsByClassName("slides"); 
            for (i = 0; i < slides.length; i++) {
              slides[i].style.display = "none";
            }
            if (slideIndex < 0) slideIndex = slides.length - 1;
            slides[slideIndex].style.display = "block";
            console.log(slideIndex);
            start();
        })
    }
}


