const btnClrGgenerator = document.querySelector("#btn-clr-generator");
const btnCopy = document.querySelector("#btnCopy");
const colorCode = document.querySelector("#colorCode");
const background = document.querySelector("html");

function getData() {
  fetch(`https://www.thecolorapi.com/random?format=json`)
    .then((response) => response.json())
    .then((data) => {
      generateRandomColor(data);
      console.log(`Name: ${data.name.value}`);
      console.log(`RGB: ${data.rgb.value}`);
      console.log(`HSL: ${data.hsl.value}`);
      console.log(`HSV: ${data.hsv.value}`);
      console.log(`CMYK: ${data.cmyk.value}`);
    });
}

btnClrGgenerator.addEventListener("click", getData);

function generateRandomColor(data) {
  const hexCode = data.hex.value;
  colorCode.textContent = `${hexCode}`;
  background.style.backgroundColor = hexCode;
}
