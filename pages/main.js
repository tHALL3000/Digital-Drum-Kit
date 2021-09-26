window.addEventListener("keydown", function (e) {
	const sound = document.querySelector(
		`audio[
			data-key="${e.keyCode}"
		]`
	);
	sound.play();
	console.log(sound);
});
