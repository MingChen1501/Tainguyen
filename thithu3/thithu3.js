var slideIndex = 0;// index của anh 1
showSlides();

function showSlides() {
  let slides = document.getElementsByClassName("slides"); 
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex].style.display = "block";
  slideIndex++;
  // tăng index sau khi tắt display hết n ảnh và gán = 0 khi = n
  if (slideIndex > slides.length - 1) slideIndex = 0;
  setTimeout(showSlides, 500);
}