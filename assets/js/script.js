function app() {
	let id = document.getElementById("app");

	/* floating */
	let floating = document.createElement("div");
	floating.classList.add("floating");

	let installAppBtn = document.createElement("a");
	installAppBtn.setAttribute("class", "floating__btn add-button");
	installAppBtn.title = "Install App";

	let installAppBtnSVG = document.createElement("svg");
	installAppBtnSVG.setAttribute("height", "48");
	installAppBtnSVG.setAttribute("width", "48");
	installAppBtnSVG.setAttribute("viewBox", "0 0 48 48");
	installAppBtnSVG.setAttribute("xmlns", "http://www.w3.org/2000/svg");

	let installAppBtnSVGPath = document.createElement("path");
	installAppBtnSVGPath.setAttribute("fill-rule", "evenodd");
	installAppBtnSVGPath.setAttribute("clip-rule", "evenodd");
	installAppBtnSVGPath.id = "install__app";
	installAppBtnSVGPath.setAttribute("d", "M8 7C8 4.23858 10.2386 2 13 2H35C37.7614 2 40 4.23858 40 7V41C40 43.7614 37.7614 46 35 46H13C10.2386 46 8 43.7614 8 41V7ZM13 6C12.4477 6 12 6.44772 12 7V41C12 41.5523 12.4477 42 13 42H35C35.5523 42 36 41.5523 36 41V7C36 6.44772 35.5523 6 35 6H13ZM18 10C18 9.44772 18.4477 9 19 9H29C29.5523 9 30 9.44772 30 10V12C30 12.5523 29.5523 13 29 13H19C18.4477 13 18 12.5523 18 12V10ZM24 39C25.6569 39 27 37.6569 27 36C27 34.3431 25.6569 33 24 33C22.3431 33 21 34.3431 21 36C21 37.6569 22.3431 39 24 39Z");
	/* end floating */

	let box = document.createElement("section");
	box.classList.add("box");

	let title = document.createElement("div");
	title.classList.add("title");

	let titleH1 = document.createElement("h1");
	titleH1.innerHTML = "Password Generator";

	/* screen */
	let resultBox = document.createElement("div");
	resultBox.classList.add("result__box");

	let result = document.createElement("input");
	result.type = "text";
	result.id = "result";
	result.placeholder = "New Password Generator";
	result.readOnly = "readonly";

	let btnCopy = document.createElement("button");
	btnCopy.innerHTML = "Copy";
	btnCopy.id = "copy";
	btnCopy.classList.add("btn");
	/* end screen */

	/* alert */
	let alert_box = document.createElement("div");
	alert_box.classList.add("alert__box");

	let alert = document.createElement("span");
	alert.classList.add("alert");
	alert.id = "alert";

	let alertMessage = document.createElement("span");
	alertMessage.classList.add("message");
	alertMessage.id = "message";
	/* end alert */

	/* items */
	let items = document.createElement("div");
	items.classList.add("items");

	let item1 = document.createElement("div");
	item1.classList.add("item");

	let passwordLengthL = document.createElement("label");
	passwordLengthL.for = "password__length";
	passwordLengthL.innerHTML = "Password Length :";

	let passwordLengthI = document.createElement("input");
	passwordLengthI.type = "number";
	passwordLengthI.value = "20";
	passwordLengthI.min = "6";
	passwordLengthI.id = "password__length";

	let item2 = document.createElement("div");
	item2.classList.add("item");

	let uppercaseL = document.createElement("label");
	uppercaseL.htmlFor = "uppercase";
	uppercaseL.innerHTML = "Include Uppercase :";

	let uppercaseI = document.createElement("input");
	uppercaseI.type = "checkbox";
	uppercaseI.checked = "checked";
	uppercaseI.id = "uppercase";

	let item3 = document.createElement("div");
	item3.classList.add("item");

	let lowercaseL = document.createElement("label");
	lowercaseL.htmlFor = "lowercase";
	lowercaseL.innerHTML = "Include Lowercase :";

	let lowercaseI = document.createElement("input");
	lowercaseI.type = "checkbox";
	lowercaseI.checked = "checked";
	lowercaseI.id = "lowercase";

	let item4 = document.createElement("div");
	item4.classList.add("item");

	let numbersL = document.createElement("label");
	numbersL.htmlFor = "numbers";
	numbersL.innerHTML = "Include Numbers :";

	let numbersI = document.createElement("input");
	numbersI.type = "checkbox";
	numbersI.checked = "checked";
	numbersI.id = "numbers";

	let item5 = document.createElement("div");
	item5.classList.add("item");

	let symbolsL = document.createElement("label");
	symbolsL.htmlFor = "symbols";
	symbolsL.innerHTML = "Include Symbols :";

	let symbolsI = document.createElement("input");
	symbolsI.type = "checkbox";
	symbolsI.checked = "checked";
	symbolsI.id = "symbols";

	let btnBox = document.createElement("div");
	btnBox.classList.add("btn__box");

	let generateBtn = document.createElement("button");
	generateBtn.innerHTML = "Generate Password";
	generateBtn.id = "generate";
	generateBtn.setAttribute("class", "btn btn__block");
	/* end items */

	/* footer */
	let footer = document.createElement("footer");
	let footerP = document.createElement("p");
	let footerY = (new Date().getFullYear() > 2020) ? (" - " + new Date().getFullYear()) : ('');
	let footerA = document.createElement("a");
	footerA.href = "https://mkabumattar.github.io/";
	footerA.innerHTML = "Mohammad Khaled Abu Mattar";
	footerP.innerHTML = "All Copyrights Reserved &#169; 2020" + footerY + ", ❤ Made With  & a lot ☕ By ";
	/* end footer */

	/******************** layout ********************/
	/* floating */
	id.appendChild(floating);
	floating.appendChild(installAppBtn);
	installAppBtn.appendChild(installAppBtnSVG);
	installAppBtnSVG.appendChild(installAppBtnSVGPath);
	/* end floating */

	id.appendChild(box);
	box.appendChild(title);
	title.appendChild(titleH1);

	/* result */
	box.appendChild(resultBox);
	resultBox.appendChild(result);
	resultBox.appendChild(btnCopy);
	/* end result */

	/* alart */
	box.appendChild(alert_box);
	alert_box.appendChild(alert);
	alert.appendChild(alertMessage);
	/* end alart */

	/* items */
	box.appendChild(items);
	items.appendChild(item1);
	item1.appendChild(passwordLengthL);
	item1.appendChild(passwordLengthI);
	items.appendChild(item2);
	item2.appendChild(uppercaseL);
	item2.appendChild(uppercaseI);
	items.appendChild(item3);
	item3.appendChild(lowercaseL);
	item3.appendChild(lowercaseI);
	items.appendChild(item4);
	item4.appendChild(numbersL);
	item4.appendChild(numbersI);
	items.appendChild(item5);
	item5.appendChild(symbolsL);
	item5.appendChild(symbolsI);
	box.appendChild(btnBox);
	btnBox.appendChild(generateBtn);
	/* end items */

	/* footer */
	id.appendChild(footer);
	footer.appendChild(footerP);
	footerP.appendChild(footerA);
	/* end footer */
	/****************** end layout ******************/
}

app();

/*******************************/
const uppercaseStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD";
const lowercaseStr = "abcdefghijklmnopqrstuvwxyzhgsfd";
const numbersStr = "0123456789635694378265487";
const symbolstr = "&_)$*%^!=-/<>(@``ç#|@\)=&";

const result = document.getElementById("result");
const copyBtn = document.getElementById("copy");
const alert = document.getElementById('alert');
const alertMessage = document.getElementById('message');
const passwordLengthInput = document.getElementById("password__length");
const uppercaseInput = document.getElementById("uppercase");
const lowercaseInput = document.getElementById("lowercase");
const numbersInput = document.getElementById("numbers");
const symbolsInput = document.getElementById("symbols");
const generateBtn = document.getElementById("generate");
let passwordLength, endResult, passwordCharSet;


generateBtn.addEventListener('click', () => {
	passwordLength = "", endResult = "", passwordCharSet = "";

	if (uppercaseInput.checked) { passwordCharSet += uppercaseStr; }
	if (lowercaseInput.checked) { passwordCharSet += lowercaseStr; }
	if (numbersInput.checked) { passwordCharSet += numbersStr; }
	if (symbolsInput.checked) { passwordCharSet += symbolstr; }

	passwordLength = Number(passwordLengthInput.value);

	for (let i = 0; i < passwordLength; i++) {
		endResult += passwordCharSet.charAt(
			Math.floor(Math.random() * passwordCharSet.length)
		);
	}

	if (endResult == "" || Number(endResult.length) < 6) {

		if (passwordLength < 6) {

			alertMessage.innerHTML = "The minimum length for password 6!"
			alert.classList.add('fail');

			setTimeout(function () {
				alert.classList.remove('fail');
				result.value = "";
				passwordLengthInput.value = "20";
			}, 3000);

		} else {

			alertMessage.innerHTML = "Please select an option before generating a password!"
			alert.classList.add('fail');

			setTimeout(function () {
				alert.classList.remove('fail');
				result.value = "";
				uppercaseInput.checked = "checked";
				lowercaseInput.checked = "checked";
				numbersInput.checked = "checked";
				symbolsInput.checked = "checked";
			}, 3000);
		}

	} else {
		result.value = endResult;
	}

});

copyBtn.addEventListener('click', () => {
	result.select();
	result.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alertMessage.innerHTML = "Copied to Clipboard!"
	alert.classList.add('success');
	setTimeout(function () {
		alert.classList.remove('success');
	}, 3000);
});
