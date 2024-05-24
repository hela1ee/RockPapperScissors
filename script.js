
const gameContainer = document.querySelector(".container");
const userResult = document.querySelector(".user_result img");
const cpuResult = document.querySelector(".cpu_result img");
const result = document.querySelector(".result");
const optionImages = document.querySelectorAll(".option_image");

optionImages.forEach((image, index) =>{
	image.addEventListener("click", (e) =>{
		image.classList.add("active");

		userResult.src = cpuResult.src = "./img/Rock-logo.png";
		result.textContent = "раз два три...";

		optionImages.forEach((image2, index2) =>{
		image.classList.add("active");
			index !== index2 && image2.classList.remove("active");
		});

		gameContainer.classList.add("start");

		setTimeout(() =>{

		gameContainer.classList.remove("start");

		let imageSrc = e.target.querySelector("img").src;
		userResult.src = imageSrc; 

		let randomNumber = Math.floor(Math.random() *3);

		let cpuImages = ["./img/Rock-logo.png", "./img/Paper-logo.png", "./img/Scissors-logo.png"];
		cpuResult.src = cpuImages[randomNumber];

		}, 1800);
	});
});