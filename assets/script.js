document.addEventListener("DOMContentLoaded", function() {
	const caroussel = document.querySelector(".caroussel");
	const images = caroussel.querySelectorAll("img");
	const bulletPoints = document.querySelectorAll(".dot")
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
	
	function showImg(index) {
		images.forEach(function(image){
			image.classList.remove("active")
		});
		images[index].classList.add("active");

		const tagLine = document.querySelector(".tagLine")
		tagLine.innerHTML = slides[index].tagLine;

		bulletPoints.forEach(function(bulletPoint, bulletIndex) {
			if (bulletIndex === index) {
			  bulletPoint.classList.add("dot_selected");
			} else {
			  bulletPoint.classList.remove("dot_selected");
			}
		});
	}


	
	prevButton.addEventListener("click", function() {
		currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
		showImg(currentImageIndex);
	})

	nextButton.addEventListener("click", function() {
		currentImageIndex = (currentImageIndex + 1 + images.length) % images.length;
		showImg(currentImageIndex);
	})
});

  
