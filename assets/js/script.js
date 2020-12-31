function app() {
	const id = document.getElementById("app");

	const box = document.createElement("div");
	box.classList.add("box");

	const title = document.createElement("div");
	title.classList.add("title");

	const titleH1 = document.createElement("h1");
	titleH1.innerHTML = "Password Generator";

	/* screen */
	const screen = document.createElement("div");
	screen.classList.add("screen");

	const output = document.createElement("input");
	output.type = "text";
	output.readOnly = "readonly";
	output.value = "";
	output.classList.add("output");

	const btnCopy = document.createElement("button");
	btnCopy.innerHTML = "Copy";
	btnCopy.id = "copy";
	btnCopy.setAttribute("onclick", "copyText()");
	btnCopy.classList.add("btn");
	/* end screen */

	/* items */
	const items = document.createElement("div");
	items.classList.add("items");

	const item1 = document.createElement("div");
	item1.classList.add("item");

	const passlengthL = document.createElement("label");
	passlengthL.for = "passlength";
	passlengthL.innerHTML = "Password Length :";

	const passlengthI = document.createElement("input");
	passlengthI.type = "number";
	passlengthI.value = "12";
	passlengthI.min = "6";
	passlengthI.id = "passlength";

	const item2 = document.createElement("div");
	item2.classList.add("item");

	const upercaseL = document.createElement("label");
	upercaseL.for = "upercase";
	upercaseL.innerHTML = "Include Upercase :";

	const upercaseI = document.createElement("input");
	upercaseI.type = "checkbox";
	upercaseI.checked = "checked";
	upercaseI.id = "upercase";

	const item3 = document.createElement("div");
	item3.classList.add("item");

	const lowercaseL = document.createElement("label");
	lowercaseL.for = "lowercase";
	lowercaseL.innerHTML = "Include Lowercase :";

	const lowercaseI = document.createElement("input");
	lowercaseI.type = "checkbox";
	lowercaseI.checked = "checked";
	lowercaseI.id = "lowercase";

	const item4 = document.createElement("div");
	item4.classList.add("item");

	const numbersL = document.createElement("label");
	numbersL.for = "numbers";
	numbersL.innerHTML = "Include Numbers :";

	const numbersI = document.createElement("input");
	numbersI.type = "checkbox";
	numbersI.checked = "checked";
	numbersI.id = "numbers";

	const item5 = document.createElement("div");
	item5.classList.add("item");

	const symbolsL = document.createElement("label");
	symbolsL.for = "symbols";
	symbolsL.innerHTML = "Include Symbols :";

	const symbolsI = document.createElement("input");
	symbolsI.type = "checkbox";
	symbolsI.checked = "checked";
	symbolsI.id = "symbols";

	const generate = document.createElement("button");
	generate.innerHTML = "Generate Password";
	generate.id = "generate";
	generate.classList.add("btn");

	/* end items */

	/* footer */
	let footer = document.createElement("footer");
	let footerP = document.createElement("p");
	let footerY = new Date().getFullYear() > 2020 && (" - " + new Date().getFullYear());
	let footerA = document.createElement("a");
	footerA.href = "https://mkabumattar.github.io/";
	footerA.innerHTML = "Mohammad Khaled Abu Mattar";
	footerP.innerHTML = "All Copyrights Reserved &#169; 2020" + footerY + ", ❤ Made With  & a lot ☕ By ";
	/* end footer */

	id.appendChild(box);
	box.appendChild(title);
	title.appendChild(titleH1);

	/* screen */
	box.appendChild(screen);
	screen.appendChild(output);
	screen.appendChild(btnCopy);
	/* end screen */

	/* items */
	box.appendChild(items);
	items.appendChild(item1);
	item1.appendChild(passlengthL);
	item1.appendChild(passlengthI);
	items.appendChild(item2);
	item2.appendChild(upercaseL);
	item2.appendChild(upercaseI);
	items.appendChild(item3);
	item3.appendChild(lowercaseL);
	item3.appendChild(lowercaseI);
	items.appendChild(item4);
	item4.appendChild(numbersL);
	item4.appendChild(numbersI);
	items.appendChild(item5);
	item5.appendChild(symbolsL);
	item5.appendChild(symbolsI);
	items.appendChild(generate);
	/* end items */

	/* footer */
	id.appendChild(footer);
	footer.appendChild(footerP);
	footerP.appendChild(footerA);
	/* end footer */
}

app();



/*******************************/

const output = document.querySelector('.screen .output');
const copy = document.getElementById('copy');
const passwordLength = document.getElementById('passlength');
const upercase = document.getElementById('upercase');
const lowercase = document.getElementById('lowercase');
const numbers = document.getElementById('numbers');
const symbols = document.getElementById('symbols');
const generate = document.getElementById('generate');


let symbolstr = '&_)$*%^!=-/<>(@``ç#|@\)=&';
let upercaseStr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZGDJD';
let lowercaseStr = 'abcdefghijklmnopqrstuvwxyzhgsfd';
let numbersStr = '0123456789635694378265487';

generate.addEventListener('click', () => {

	if (upercase.checked && lowercase.checked && symbols.checked && numbers.checked) {
		let random = Math.floor(Math.random() * 10);
		let allStr = '&hA5$jL9@sB5_mP1&nV6)cR5L*gF32';
		output.value = allStr.slice(random, random + +passwordLength.value);

	} else if (upercase.checked && lowercase.checked && numbers.checked) {
		let random = Math.floor(Math.random() * 10);
		let allStr = 'hA5jL9sB5mP1nV6cR5LgF32Lo5Fd18';
		output.value = allStr.slice(random, random + +passwordLength.value);

	} else if (symbols.checked && numbers.checked && lowercase.checked) {
		let random = Math.floor(Math.random() * 10);
		let allStr = '&h5$j9@s5_m1&n6)c5*g32)5l@9p#0';
		output.value = allStr.slice(random, random + +passwordLength.value);

	} else if (upercase.checked && lowercase.checked && symbols.checked) {
		let random = Math.floor(Math.random() * 10);
		let allStr = 'jY=Sn@Vt$&hA$jL@sB_mP&nV)cRL*gF';
		output.value = allStr.slice(random, random + +passwordLength.value);
	} else if (upercase.checked && lowercase.checked) {
		let random = Math.floor(Math.random() * 10);
		let allStr = 'hAjLsBmPnVcRLgFkGvEjIgOpScTnY';
		output.value = allStr.slice(random, random + +passwordLength.value);
	} else if (symbols.checked && numbers.checked) {
		let random = Math.floor(Math.random() * 10);
		let allStr = '&5$9@5_1&6)5*32@4\8=9!5<0#3}0+';
		output.value = allStr.slice(random, random + +passwordLength.value);
	} else if (symbols.checked) {
		let random = Math.floor(Math.random() * 5);
		output.value = symbolstr.slice(random, random + +passwordLength.value);
	} else if (numbers.checked) {
		let random = Math.floor(Math.random() * 5);
		output.value = numbersStr.slice(random, random + +passwordLength.value);
	} else if (lowercase.checked) {
		let random = Math.floor(Math.random() * 10);
		output.value = lowercaseStr.slice(random, random + +passwordLength.value);
	} else if (upercase.checked) {
		let random = Math.floor(Math.random() * 10);
		output.value = upercaseStr.slice(random, random + +passwordLength.value);
	}
});

// Ability to copy the Text.
function copyText() {
	output.select();
	output.setSelectionRange(0, 99999)
	document.execCommand("copy");
	alert("Text has been copied to clipboard.");
}
