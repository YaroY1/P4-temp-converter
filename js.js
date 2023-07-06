const converter = document.querySelector("#converter");
const result = document.querySelector(".result");
const convBtn = document.querySelector(".conv");
const resetBtn = document.querySelector(".reset");
const changeBtn = document.querySelector(".change");
const one = document.querySelector(".one");
const two = document.querySelector(".two");

let fahrenheit;
let celsius;

const changeOneTwo = () => {
	if (one.textContent === "°C") {
		one.textContent = "°F";
		two.textContent = "°C";
		result.textContent = "";
	} else if (one.textContent === "°F") {
		one.textContent = "°C";
		two.textContent = "°F";
		result.textContent = "";
	}
};

const tempChanger = () => {
	if (one.textContent === "°C" && converter.value !== "") {
		fahrenheit = converter.value * 1.8 + 32;
		result.textContent = `${converter.value}°C to ${fahrenheit.toFixed(1)}°F `;
		converter.value = "";
	} else if (one.textContent === "°F" && converter.value !== "") {
		celsius = (converter.value - 32) / 1.8;
		result.textContent = `${converter.value}°F to ${celsius.toFixed(1)}°C`;
		converter.value = "";
	} else if (converter.value === "") {
		result.textContent = "Musisz podać jakąś wartość";
	}
};

const reset = () => {
	result.textContent = "";
	converter.value = "";
};

resetBtn.addEventListener("click", reset);
changeBtn.addEventListener("click", changeOneTwo);
convBtn.addEventListener("click", tempChanger);
