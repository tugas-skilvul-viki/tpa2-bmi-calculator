function calculateBmi(e) {
  e.preventDefault();

  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  let bobot = (weight / ((height / 100) * (height / 100))).toFixed(1);

  bobot = parseFloat(bobot);

  let category = "";

  if (bobot < 18.5) {
    category = "Underweight";
  } else if (bobot >= 18.5 && bobot <= 24.9) {
    category = "Normal Weight";
  } else if (bobot >= 25 && bobot <= 29.9) {
    category = "Overweight";
  } else if (bobot > 30) {
    category = "Obesity";
  } else {
    category = "Error please check your input again !";
  }

  console.log("BMI Category:", category);

  let result = document.getElementById("result");

  result.innerHTML = `
      <p>Your BMI is <b>${bobot}</b> which means You are <b>${category}</b></p>
    `;
}

let button = document.getElementById("btn-submit");
button.addEventListener("click", calculateBmi);
