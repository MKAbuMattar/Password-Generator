const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD";
const lowercaseStr = "abcdefghijklmnopqrstuvwxyzhgsfd";
const numbersStr = "0123456789635694378265487";
const symbolstr = "$@!%*#?&";

const passwordGeneratorBtn = document.getElementById("password__generator__btn");
const passwordCheckupBtn = document.getElementById("password__checkup__btn");
const passwordGeneratorTab = document.getElementById("password__generator__tab");
const passwordCheckupTab = document.getElementById("password__checkup__tab");
const passwordGeneratorBox = document.getElementById("password__generator__box");
const passwordCheckupBox = document.getElementById("password__checkup__box");

const result = document.getElementById("result");
const copyBtn = document.getElementById("copy");
const generateStrength = document.getElementById("generate__strength");
const generateStrengthScore = document.getElementById("generate__strength__score");
const generateStrengthFeedback = document.getElementById("generate__strength__feedback");
const alert = document.getElementById("alert");
const alertMessage = document.getElementById("message");
const settingsBtn = document.getElementById("settings__btn");
const settings = document.getElementById("settings");
const passwordLengthInput = document.getElementById("password__length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const customInput = document.getElementById("custom__characters");
const generateBtn = document.getElementById("generate");

const checkPasswordInput = document.getElementById("check__password");
const passwordStrength = document.getElementById("password__strength");
const passwordStrengthScore = document.getElementById("password__strength__score");
const passwordStrengthFeedback = document.getElementById("password__strength__feedback");


let passwordLength, endResult, passwordCharSet;

passwordGeneratorBtn.addEventListener("click", () => {
	passwordGeneratorTab.classList.add("active");
	passwordCheckupTab.classList.remove("active");
	passwordGeneratorBox.classList.remove("box__hide");
	passwordCheckupBox.classList.add("box__hide");
});

passwordCheckupBtn.addEventListener("click", () => {
	passwordGeneratorTab.classList.remove("active");
	passwordCheckupTab.classList.add("active");
	passwordGeneratorBox.classList.add("box__hide");
	passwordCheckupBox.classList.remove("box__hide");
});

generateBtn.addEventListener("click", () => {
	passwordLength = "", endResult = "", passwordCharSet = "";

	if (uppercaseInput.checked) { passwordCharSet += uppercaseStr; }
	if (lowercaseInput.checked) { passwordCharSet += lowercaseStr; }
	if (numbersInput.checked) { passwordCharSet += numbersStr; }
	if (symbolsInput.checked) { passwordCharSet += symbolstr; }
	if (customInput.value) { passwordCharSet += customInput.value; }

	passwordLength = Number(passwordLengthInput.value);

	for (let i = 0; i < passwordLength; i++) {
		endResult += passwordCharSet.charAt(
			Math.floor(Math.random() * passwordCharSet.length)
		);
	}

	if (endResult == "" || Number(endResult.length) < 6) {

		if (passwordLength < 6) {

			alertMessage.innerHTML = "The minimum length for password 6!";
			alert.className = "alert";
			alert.classList.add("fail");

			setTimeout(function () {
				alert.classList.remove("fail");
				result.value = "";
				passwordLengthInput.value = "20";
			}, 3000);

		} else {

			alertMessage.innerHTML = "Please select an option before generating a password!";
			alert.className = "alert";
			alert.classList.add("fail");
			setTimeout(function () {
				alert.classList.remove("fail");
				result.value = "";
				uppercaseInput.checked = "checked";
				lowercaseInput.checked = "checked";
				numbersInput.checked = "checked";
				symbolsInput.checked = "checked";
			}, 3000);
		}

	} else {
		result.value = endResult;
		checkPassword(result, generateStrength, generateStrengthScore, generateStrengthFeedback);
	}
});

copyBtn.addEventListener("click", () => {
	result.select();
	result.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alertMessage.innerHTML = "Copied to Clipboard!"
	alert.className = "alert";
	alert.classList.add("success");
	setTimeout(function () {
		alert.classList.remove("success");
	}, 3000);
});

settingsBtn.addEventListener("click", () => {
	if (settings.classList.contains("items__hide")) {
		settings.classList.remove("items__hide");
	} else {
		settings.classList.add("items__hide");
	}
});

checkPasswordInput.addEventListener("input", function () {
	checkPassword(checkPasswordInput, passwordStrength, passwordStrengthScore, passwordStrengthFeedback);
});


function checkPassword(e, backgroundColor, score, feedback) {

	let strength = ['Worst', 'Bad', 'Weak', 'Good', 'Strong'];

	let password = e.[value];
	let result = zxcvbn(val);

	if (password !== "") {
		score.innerHTML = strength[result.score];
		feedback.innerHTML = result.feedback.warning + " " + result.feedback.suggestions;

		backgroundColor.className = "password__strength";
		switch (result.score) {
			case 0:
				backgroundColor.classList.add("worst");
				break;
			case 1:
				backgroundColor.classList.add("bad");
				break;
			case 2:
				backgroundColor.classList.add("weak");
				break;
			case 3:
				backgroundColor.classList.add("good");
				break;
			case 4:
				backgroundColor.classList.add("strong");
				break;
		}
	}
	else {
		backgroundColor.className = "password__strength";
		score.innerHTML = "";
		feedback.innerHTML = "";
	}
}

/*******************************/

if ('serviceWorker' in navigator) {
	window.addEventListener('load', function () {
		navigator.serviceWorker.register('/Password-Generator/sw.js').then(function (registration) {
			// Registration was successful
			console.log('ServiceWorker registration successful with scope: ', registration
				.scope);
		}, function (err) {
			// registration failed :(
			console.log('ServiceWorker registration failed: ', err);
		});
	});
}

let deferredPrompt;
const addBtn = document.querySelector('.add-button');
addBtn.style.display = 'none';

window.addEventListener('beforeinstallprompt', (e) => {
	// Prevent Chrome 67 and earlier from automatically showing the prompt
	e.preventDefault();
	// Stash the event so it can be triggered later.
	deferredPrompt = e;
	// Update UI to notify the user they can add to home screen
	addBtn.style.display = 'block';

	addBtn.addEventListener('click', (e) => {
		// hide our user interface that shows our A2HS button
		addBtn.style.display = 'none';
		// Show the prompt
		deferredPrompt.prompt();
		// Wait for the user to respond to the prompt
		deferredPrompt.userChoice.then((choiceResult) => {
			if (choiceResult.outcome === 'accepted') {
				console.log('User accepted the A2HS prompt');
			} else {
				console.log('User dismissed the A2HS prompt');
			}
			deferredPrompt = null;
		});
	});
});

window.addEventListener("beforeinstallprompt", function (beforeInstallPromptEvent) {
	beforeInstallPromptEvent.preventDefault(); // Prevents immediate prompt display

	// Shows prompt after a user clicks an "install" button
	installButton.addEventListener("click", function (mouseEvent) {
		// you should not use the MouseEvent here, obviously
		beforeInstallPromptEvent.prompt();
	});

	installButton.hidden = false; // Make button operable
});
