//  .............. Percentage Formula ............
function getPercentage() {
  let name = prompt("Enter your Name");
  let total_Marks = Number(document.getElementById('tm1').value);
  let obtain_Marks = Number(document.getElementById('obt1').value);
  let percentage = (obtain_Marks / total_Marks) * 100;
  alert(name + " your percentage value is " + percentage + "%");
  console(name + " your percentage value is " + percentage + "%");
}

//  ............... BMI Formula .................
function getBMI() {
  let name = prompt("Enter your Name");
   let weight = Number(document.getElementById('weight').value);
  let height = Number(document.getElementById('height').value);
  let BMI = weight / height ** 2;
  alert(name + " your BMI value is " + BMI);
  console(name + " your BMI value is " + BMI);
}

// ................ BMR Formula ..................
function getBMR() {
  let name = prompt("Enter your Name");
   let weight1 = Number(document.getElementById('weight1').value);
  let height1 = Number(document.getElementById('height1').value);
  let age1 = Number(document.getElementById('age1').value);
  let BMR = (10 * weight1) + (6.25 * height1) - (5 * age1) + 5 + "calories/day";
  alert(name + " your BMR value is " + BMR);
  console(name + " your BMR value is " + BMR);
}

// ................ Zakat Formula ..................
function getZakat() {
  let name = prompt("Enter your Name");
  let zakatableAmount = Number(document.getElementById('zakat').value);
  let zakat = zakatableAmount * 0.025 + " PKR";
   alert(name + " your zakat value is " + zakat);
  console(name + " your zakat value is " + zakat);
}

// ................ Ushr Formula ..................
function getUshr() {
  let name = prompt("Enter your Name");
   let fasal = Number(document.getElementById('ushr').value);
  let ushr = fasal * 0.10 + " PKR Ushr";
   alert(name + " your ushr value is " + ushr);
  console(name + " your ushr value is " + ushr);
}
