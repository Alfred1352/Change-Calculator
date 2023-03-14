// Write your JavaScript here
var dollars = 100;
//document.getElementById('dollars-output').innerHTML = dollars;
var quarters = 25;
//document.getElementById('quarters-output').innerHTML = quarters;
var dimes = 10;
//document.getElementById('dimes-output').innerHTML = dimes;
var nickels = 5;
//document.getElementById('nickels-output').innerHTML = nickels;;




function calculateCurrency() {
  var amountDue = document.getElementById('amount-due').value;
  var amountReceived = document.getElementById('amount-received').value;
  let changeDue = amountReceived - amountDue;

  dollars = Math.floor(changeDue / 1.00);
  document.getElementById('dollars-output').innerHTML = dollars;
  var remainder = changeDue - dollars;
  console.log(dollars);

  quarters = Math.floor(remainder / 0.25);
  document.getElementById('quarters-output').innerHTML = quarters;
  var remainder = remainder - quarters * 0.25;
  console.log(quarters);

  dimes = Math.floor(remainder / 0.10);
  document.getElementById('dimes-output').innerHTML = dimes;
  var remainder = remainder - dimes * 0.10;
  console.log(dimes);
  
  nickels = Math.floor(remainder / 0.05);
  document.getElementById('nickels-output').innerHTML = nickels;
  var remainder = remainder - nickels * 0.05;
  console.log(nickels);

  var pennies = Math.round(remainder / 0.01);
  document.getElementById('pennies-output').innerHTML = pennies;
  
  
}

document.getElementById('calculate-change').addEventListener('click', calculateCurrency)