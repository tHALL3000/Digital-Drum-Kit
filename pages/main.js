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
});

function removeTransition(e) {
	if (e.propertyName !== "transform")
		return;

	this.classList.remove("playing");
}

const allKeys = Array.from(document.querySelectorAll(".keyButton"));
allKeys.forEach((keyButton) =>
	keyButton.addEventListener(
		"transitionend",
		removeTransition
	)
);
