document.title = "Pracryptmate | Password Generator";
const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD";
const lowercaseStr = "abcdefghijklmnopqrstuvwxyzhgsfd";
const numbersStr = "0123456789635694378265487";
const symbolstr = "!\";#$%&\'()*+,-./:;<=>?@[]^_`{|}~";

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
const generateStrengthFeedbackBtn = document.getElementById("generate__strength__feedback__btn");
const generateStrengthFeedbackMoreInfo = document.getElementById("generate__strength__feedback__moreinfo");
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
const passwordStrengthFeedbackBtn = document.getElementById("password__strength__feedback__btn");
const passwordStrengthFeedbackMoreInfo = document.getElementById("password__strength__feedback__moreinfo");


const box = document.getElementById("box");
const infBox = document.getElementById("info__box");
const exitInfoBtn = document.getElementById("exit__info");


let passwordLength, endResult, passwordCharSet;

passwordGeneratorBtn.addEventListener("click", () => {
	document.title = "Pracryptmate | Password Generator";
	passwordGeneratorTab.classList.add("active");
	passwordCheckupTab.classList.remove("active");
	passwordGeneratorBox.classList.remove("box__hide");
	passwordCheckupBox.classList.add("box__hide");
});

passwordCheckupBtn.addEventListener("click", () => {
	document.title = "Pracryptmate | Password Checkup";
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
		checkPassword(result, generateStrength, generateStrengthScore, generateStrengthFeedback, generateStrengthFeedbackMoreInfo);
		generateStrengthFeedbackBtn.classList.remove("info__btn__hide");
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

generateStrengthFeedbackBtn.addEventListener("click", () => {
	infBox.classList.remove("box__hide");
	exitInfoBtn.classList.remove("box__hide");
	generateStrengthFeedbackMoreInfo.classList.remove("info__hide");
	passwordStrengthFeedbackMoreInfo.classList.add("info__hide");
	box.classList.add("box__hide");
});

passwordStrengthFeedbackBtn.addEventListener("click", () => {
	infBox.classList.remove("box__hide");
	exitInfoBtn.classList.remove("box__hide");
	passwordStrengthFeedbackMoreInfo.classList.remove("info__hide");
	generateStrengthFeedbackMoreInfo.classList.add("info__hide");
	box.classList.add("box__hide");
});

exitInfoBtn.addEventListener("click", () => {
	infBox.classList.add("box__hide");
	exitInfoBtn.classList.add("box__hide");
	generateStrengthFeedbackMoreInfo.classList.add("info__hide");
	box.classList.remove("box__hide");
});


checkPasswordInput.addEventListener("input", function () {
	checkPassword(checkPasswordInput, passwordStrength, passwordStrengthScore, passwordStrengthFeedback, passwordStrengthFeedbackMoreInfo);

	if (checkPasswordInput.value !== "") {
		passwordStrengthFeedbackBtn.classList.remove("info__btn__hide");
	} else {
		passwordStrengthFeedbackBtn.classList.add("info__btn__hide");
	}
});

function checkPassword(e, backgroundColor, score, feedback, info) {

	let feedback_tmpl, guess_times_tmpl, props_tmpl, results_tmpl;

	results_tmpl = '{{#results}}\n<table>\n  <tr>\n    <td>Password: </td>\n    <td colspan="2"><strong>{{password}}</strong></td>\n  </tr>\n  <tr>\n    <td>Guesses Log<sub>10</sub>: </td>\n    <td colspan="2">{{guesses_log10}}</td>\n  </tr>\n  <tr>\n    <td>Score: </td>\n    <td>{{score}} / 4</td>\n  <tr>\n    <td>Function Runtime (ms): </td>\n    <td colspan="2">{{calc_time}}</td>\n  </tr>\n  <tr>\n    <td colspan="3">Guess Times:</td>\n  </tr>\n  {{& guess_times_display}}\n  {{& feedback_display }}\n  <tr>\n    <td colspan="3"><strong>Match Sequence:</strong></td>\n  </tr>\n</table>\n{{& sequence_display}}\n{{/results}}';

	guess_times_tmpl = '<tr>\n  <td>100 / hour:</td>\n  <td>{{online_throttling_100_per_hour}}</td>\n  <td> (throttled online attack)</td>\n</tr>\n<tr>\n  <td>10&nbsp; / second:</td>\n  <td>{{online_no_throttling_10_per_second}}</td>\n  <td> (unthrottled online attack)</td>\n</tr>\n<tr>\n  <td>10k / second:</td>\n  <td>{{offline_slow_hashing_1e4_per_second}}</td>\n  <td> (offline attack, slow hash, many cores)</td>\n<tr>\n  <td>10B / second:</td>\n  <td>{{offline_fast_hashing_1e10_per_second}}</td>\n  <td> (offline attack, fast hash, many cores)</td>\n</tr>';

	feedback_tmpl = '{{#warning}}\n<tr>\n  <td>warning: </td>\n  <td colspan="2">{{warning}}</td>\n</tr>\n{{/warning}}\n{{#has_suggestions}}\n<tr>\n  <td style="vertical-align: top">suggestions:</td>\n  <td colspan="2">\n    {{#suggestions}}\n    - {{.}} <br />\n    {{/suggestions}}\n  </td>\n</tr>\n{{/has_suggestions}}';

	props_tmpl = '<div class="match-sequence">\n{{#sequence}}\n<table>\n  <tr>\n    <td colspan="2">\'{{token}}\'</td>\n  </tr>\n  <tr>\n    <td>Pattern:</td>\n    <td>{{pattern}}</td>\n  </tr>\n  <tr>\n    <td>Guesses Log<sub>10</sub>:</td>\n    <td>{{guesses_log10}}</td>\n  </tr>\n  {{#cardinality}}\n  <tr>\n    <td>cardinality:</td>\n    <td>{{cardinality}}</td>\n  </tr>\n  <tr>\n    <td>length:</td>\n    <td>{{length}}</td>\n  </tr>\n  {{/cardinality}}\n  {{#rank}}\n  <tr>\n    <td>Dictionary Name:</td>\n    <td>{{dictionary_name}}</td>\n  </tr>\n  <tr>\n    <td>Rank:</td>\n    <td>{{rank}}</td>\n  </tr>\n  <tr>\n    <td>Reversed:</td>\n    <td>{{reversed}}</td>\n  </tr>\n  {{#l33t}}\n  <tr>\n    <td>l33t subs:</td>\n    <td>{{sub_display}}</td>\n  </tr>\n  <tr>\n    <td>un-l33ted:</td>\n    <td>{{matched_word}}</td>\n  </tr>\n  {{/l33t}}\n  <tr>\n    <td>Base Guesses:</td>\n    <td>{{base_guesses}}</td>\n  </tr>\n  <tr>\n    <td>Uppercase Variations:</td>\n    <td>{{uppercase_variations}}</td>\n  </tr>\n  <tr>\n    <td>l33t-variations:</td>\n    <td>{{l33t_variations}}</td>\n  </tr>\n  {{/rank}}\n  {{#graph}}\n  <tr>\n    <td>graph:</td>\n    <td>{{graph}}</td>\n  </tr>\n  <tr>\n    <td>turns:</td>\n    <td>{{turns}}</td>\n  </tr>\n  <tr>\n    <td>shifted count:</td>\n    <td>{{shifted_count}}</td>\n  </tr>\n  {{/graph}}\n  {{#base_token}}\n  <tr>\n    <td>Base Token:</td>\n    <td>\'{{base_token}}\'</td>\n  </tr>\n  <tr>\n    <td>Base Guesses:</td>\n    <td>{{base_guesses}}</td>\n  </tr>\n  <tr>\n    <td>Number Repeats:</td>\n    <td>{{repeat_count}}</td>\n  </tr>\n  {{/base_token}}\n  {{#sequence_name}}\n  <tr>\n    <td>Sequence Name:</td>\n    <td>{{sequence_name}}</td>\n  </tr>\n  <tr>\n    <td>Sequence Size</td>\n    <td>{{sequence_space}}</td>\n  </tr>\n  <tr>\n    <td>Ascending:</td>\n    <td>{{ascending}}</td>\n  </tr>\n  {{/sequence_name}}\n  {{#regex_name}}\n  <tr>\n    <td>Regex Name:</td>\n    <td>{{regex_name}}</td>\n  </tr>\n  {{/regex_name}}\n  {{#day}}\n  <tr>\n    <td>Day:</td>\n    <td>{{day}}</td>\n  </tr>\n  <tr>\n    <td>Month:</td>\n    <td>{{month}}</td>\n  </tr>\n  <tr>\n    <td>Year:</td>\n    <td>{{year}}</td>\n  </tr>\n  <tr>\n    <td>Separator:</td>\n    <td>\'{{separator}}\'</td>\n  </tr>\n  {{/day}}\n</table>\n{{/sequence}}\n</div>';


	let strength = ['Worst', 'Bad', 'Weak', 'Good', 'Strong'];

	let results_lst = [];

	let password = e.value;
	let result = zxcvbn(password);

	rendered = Mustache.render(results_tmpl, {
		results: results_lst
	});

	if (password !== "") {

		result.sequence_display = Mustache.render(props_tmpl, result);
		result.guess_times_display = Mustache.render(guess_times_tmpl, result.crack_times_display);
		result.feedback.has_suggestions = result.feedback.suggestions.length > 0;
		result.feedback_display = Mustache.render(feedback_tmpl, result.feedback);
		results_lst.push(result);

		score.innerHTML = strength[result.score];

		rendered = Mustache.render(results_tmpl, {
			results: results_lst
		});

		feedback.innerHTML = result.feedback.warning + " " + result.feedback.suggestions;
		info.innerHTML = rendered;

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