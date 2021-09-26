window.addEventListener("keydown", function (e) {
	const sound = document.querySelector(
		`audio[
			data-key="${e.keyCode}"
		]`
	);
	const key = document.querySelector(
		`.keyButton[
			data-key="${e.keyCode}"
		]`
	);

	sound.currentTime = 0;
	sound.play();
	key.classList.add("playing");
	console.log(sound);
});

function removeTransition(e) {
	if (e.propertyName !== "transform")
		return;

	key.classList.remove("playing");
}

const allKeys = document.querySelectorAll(".keyButton");
allKeys.forEach((key) =>
	key.addEventListener(
		"transitionend",
		removeTransition
	)
);
