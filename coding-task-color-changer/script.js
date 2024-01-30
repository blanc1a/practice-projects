const btnClrGgenerator = document.querySelector("#btn-clr-generator");
const btnCopy = document.querySelector("#btnCopy");
const colorCode = document.querySelector("#colorCode");
const background = document.querySelector("html");
const radioBtn = document.querySelector("#filterClrCode");

//Inhalt der API in den state speichern für den default-Wert - ohne Problem bei der Nutzung des eventListeners für die radio buttons
let state = {
  hex: { value: "#2B8582", clean: "2B8582" },
  rgb: {
    fraction: {
      r: 0.16862745098039217,
      g: 0.5215686274509804,
      b: 0.5098039215686274,
    },
    r: 43,
    g: 133,
    b: 130,
    value: "rgb(43, 133, 130)",
  },
  hsl: {
    fraction: {
      h: 0.49444444444444435,
      s: 0.5113636363636364,
      l: 0.34509803921568627,
    },
    h: 178,
    s: 51,
    l: 35,
    value: "hsl(178, 51%, 35%)",
  },
  hsv: {
    fraction: {
      h: 0.49444444444444435,
      s: 0.6766917293233082,
      v: 0.5215686274509804,
    },
    value: "hsv(178, 68%, 52%)",
    h: 178,
    s: 68,
    v: 52,
  },
  name: {
    value: "Lochinvar",
    closest_named_hex: "#2C8C84",
    exact_match_name: false,
    distance: 122,
  },
  cmyk: {
    fraction: {
      c: 0.6766917293233081,
      m: 0,
      y: 0.02255639097744374,
      k: 0.4784313725490196,
    },
    value: "cmyk(68, 0, 2, 48)",
    c: 68,
    m: 0,
    y: 2,
    k: 48,
  },
  XYZ: {
    fraction: {
      X: 0.3480745098039215,
      Y: 0.4456839215686274,
      Z: 0.5499941176470587,
    },
    value: "XYZ(35, 45, 55)",
    X: 35,
    Y: 45,
    Z: 55,
  },
  image: {
    bare: "https://www.thecolorapi.com/id?format=svg&named=false&hex=2B8582",
    named: "https://www.thecolorapi.com/id?format=svg&hex=2B8582",
  },
  contrast: { value: "#000000" },
  _links: { self: { href: "/id?hex=2B8582" } },
  _embedded: {},
};
btnClrGgenerator.addEventListener("click", getData);
console.dir(radioBtn);
radioBtn.addEventListener("change", changeColorCode);

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
      //auch nötig, damit die neuen Daten übergeben werden
      state = data;
    });
}

function generateRandomColor(data) {
  const hexCode = data.hex.value;
  colorCode.textContent = `${hexCode}`;
  background.style.backgroundColor = hexCode;
}

function changeColorCode(event) {
  console.log("data:" + event.target);
  const checkedRadio = event.target.id;
  console.log(checkedRadio);
  if (checkedRadio === "hex") {
    colorCode.textContent = state.hex.value;
  } else if (checkedRadio === "rgb") {
    colorCode.textContent = state.rgb.value;
  } else if (checkedRadio === "hsl") {
    colorCode.textContent = state.hsl.value;
  } else if (checkedRadio === "hsv") {
    colorCode.textContent = state.hsv.value;
  } else if (checkedRadio === "cmyk") {
    colorCode.textContent = state.cmyk.value;
  }
}
