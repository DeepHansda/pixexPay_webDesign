var slidesContainer = document.querySelector(".slides-container");



var slideIndex=0;
const showSlides = ()=>{

    var slides = document.querySelectorAll(".slides")

    for(let i=0; i < slides.length; i++){
        slides[i].style.display="none";
    }

    slideIndex++;

    if(slideIndex > slides.length){ slideIndex = 1 ;}

    slides[slideIndex-1].style.display="block";

    setTimeout(showSlides,2000);
}

showSlides();