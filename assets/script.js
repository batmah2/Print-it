document.addEventListener("DOMContentLoaded", function() {
	const caroussel = document.querySelector(".caroussel");
	const image = caroussel.querySelector("img");	
	let currentImageIndex = 0;
	const nextButton = document.getElementById("nextBtn");
	const prevButton = document.getElementById("prevBtn");
	const slides = [
		{
			"image":"slide1.jpg",
			"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
		},
		{
			"image":"slide2.jpg",
			"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
		},
		{
			"image":"slide3.jpg",
			"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
		},
		{
			"image":"slide4.png",
			"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
		}
	]	
	
	function createBulletPoints() {
        const dots = document.querySelector(".dots");
        for (let i = 0; i < slides.length; i++) {
            if (i === 0) {
                dots.innerHTML += `<div class="dot dot_selected"></div>`;
            } else {
                dots.innerHTML += `<div class="dot"></div>`
            }
        }
    }

    createBulletPoints();

	function showImg(index) {
		image.src = `./assets/images/slideshow/` + slides[index].image;

		const tagLine = document.querySelector(".tagLine")
		tagLine.innerHTML = slides[index].tagLine;

		const bulletPoints = document.querySelectorAll(".dot");
        bulletPoints.forEach(function(bulletPoint, bulletIndex) {
            if (bulletIndex === index) {
              bulletPoint.classList.add("dot_selected");
            } else {
              bulletPoint.classList.remove("dot_selected");
            }
        });
	}


	
	prevButton.addEventListener("click", function() {
		currentImageIndex = (currentImageIndex - 1 + slides.length) % slides.length;
		showImg(currentImageIndex);
	})

	nextButton.addEventListener("click", function() {
		currentImageIndex = (currentImageIndex + 1 + slides.length) % slides.length;
		showImg(currentImageIndex);
	})
});

  
