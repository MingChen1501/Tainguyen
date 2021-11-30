var slideIndex = 0;
var isStart = true;
slideShows();
nextSlide();
startSlide();
stopSlide();
preSlide();
function slideShows() {
    if (isStart) {
        let slides = document.getElementsByClassName("slides"); 
        for (i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        if (slideIndex > slides.length - 1) slideIndex = 0;
        slides[slideIndex].style.display = "block";
        slideIndex++;
        console.log("a");
        // tăng index sau khi tắt display hết n ảnh và gán = 0 khi = n
        setInterval(slideShows,2000);
    }
}
function stopSlide() {
    let button = document.getElementById("stop");
    if (button) {
        button.addEventListener("click", () => {
            if (isStart) {
                isStart = false;
                slideIndex -= 1;
                console.log("stop");
            }
        })
    }
}
function startSlide() {
    let button = document.getElementById("start");
    if (button) {
        button.addEventListener("click", () => {
            if (!isStart) {
                isStart = true;
                console.log("start");
                slideShows();
            }
        })
    }
}
function nextSlide() {
    let button = document.getElementById("next");
    if (button) {
        button.addEventListener("click", () => {
            if (!isStart) {
                slideIndex++;
                let slides = document.getElementsByClassName("slides"); 
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
                }
                if (slideIndex > slides.length - 1) slideIndex = 0;
                slides[slideIndex].style.display = "block";
            } else {
                clearTimeout()
                slideIndex++;
                let slides = document.getElementsByClassName("slides"); 
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
                }
                if (slideIndex > slides.length - 1) slideIndex = 0;
                slides[slideIndex].style.display = "block";
            }
        })
    }
}

function preSlide() {
    let button = document.getElementById("pre");
    if (button) {
        button.addEventListener("click", () => {
            if (!isStart) {
                slideIndex--;
                let slides = document.getElementsByClassName("slides"); 
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
                }
                if (slideIndex < 0) slideIndex = slides.length - 1;
                slides[slideIndex].style.display = "block";

            } else {
                slideIndex--;
                let slides = document.getElementsByClassName("slides"); 
                for (i = 0; i < slides.length; i++) {
                  slides[i].style.display = "none";
                }
                if (slideIndex < 0) slideIndex = slides.length - 1;
                slides[slideIndex].style.display = "block";
            }
        })
    }
}



/* //var slideIndex = 1;
//showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
} */