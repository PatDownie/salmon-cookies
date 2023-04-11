"use strict";

// this is a bit that makes an opening times array from an opening time and a closing time
// |||
// vvv

let openingHours = [];
let openingTime = 6;
let closingTime = 20;
for (let i = openingTime; i <= closingTime; i++) {
  if (i <= 11) {
    openingHours.push(i + "AM");
  } else if (i == 12) {
    openingHours.push(i + "PM");
  } else {
    openingHours.push(i - 12 + "PM");
  }
}
console.log(openingHours);

function random(min, max) {
  return Math.random() * (max - min) + min;
}

function renderTopRow() {
  const table = document.getElementById("sales-table");
  const newRow = document.createElement("tr");
  table.appendChild(newRow);
  let newCell = document.createElement("td");
  newCell.textContent = "Location";
  newRow.appendChild(newCell);
  for (let i = 0; i < openingHours.length - 1; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `${openingHours[i]} - ${openingHours[i + 1]}`;
    newRow.appendChild(newCell);
  }
  newCell = document.createElement("td");
  newCell.textContent = "Total";
  newRow.appendChild(newCell);
}

let locationObjectArray = [];

function CookieShop(name, minCust, maxCust, avgCookiePerSale) {
  this.name = name;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgCookiePerSale = avgCookiePerSale;
  this.salesPerHour = [];
  // this.totalSales = 0;
  const self = this;
  (function () {
    locationObjectArray.push(self);
  })();
}
CookieShop.prototype.salesPerHourFunc = function () {
  for (let i = 0; i < openingHours.length - 1; i++) {
    this.salesPerHour.push(Math.floor(random(this.minCust, this.maxCust) * this.avgCookiePerSale));
  }
};
// CookieShop.prototype.pushSelfToArray = (function () {
//   locationObjectArray.push(this);
// })();
CookieShop.prototype.render = function () {
  this.salesPerHourFunc();
  const table = document.getElementById("sales-table");
  const newRow = document.createElement("tr");
  table.appendChild(newRow);
  let newCell = document.createElement("td");
  newCell.textContent = this.name;
  newRow.appendChild(newCell);
  this.totalSales = 0;
  for (let i = 0; i < openingHours.length - 1; i++) {
    const newCell = document.createElement("td");
    newCell.textContent = `${this.salesPerHour[i]}`;
    newRow.appendChild(newCell);
    this.totalSales += this.salesPerHour[i];
  }
  newCell = document.createElement("td");
  newCell.textContent = this.totalSales;
  newRow.appendChild(newCell);
};

function renderTotalsRow() {
  const table = document.getElementById("sales-table");
  const newRow = document.createElement("tr");
  table.appendChild(newRow);
  let newCell = document.createElement("td");
  newCell.textContent = "Totals";
  newRow.appendChild(newCell);
  for (let k = 0; k < openingHours.length - 1; k++) {
    let hourTotal = 0;
    for (let i = 0; i < locationObjectArray.length; i++) {
      hourTotal += locationObjectArray[i].salesPerHour[k];
    }
    newCell = document.createElement("td");
    newCell.textContent = hourTotal;
    newRow.appendChild(newCell);
  }
  let totalOfTotals = 0;
  for (let i = 0; i < locationObjectArray.length; i++) {
    totalOfTotals += locationObjectArray[i].totalSales;
  }
  newCell = document.createElement("td");
  newCell.textContent = totalOfTotals;
  newRow.appendChild(newCell);
}

const Seattle = new CookieShop("Seattle", 20, 65, 6.3);
const Tokyo = new CookieShop("Tokyo", 3, 24, 1.2);
const Dubai = new CookieShop("Dubai", 11, 38, 3.7);
const Paris = new CookieShop("Paris", 20, 38, 2.3);
const Lima = new CookieShop("Lima", 2, 16, 4.6);

function renderSalesTable() {
  renderTopRow();
  for (let i = 0; i < locationObjectArray.length; i++) {
    locationObjectArray[i].render();
  }
  renderTotalsRow();
}

renderSalesTable();

// vvv form code vvv

const form = document.getElementById("new-shop-form");
form.addEventListener("submit", function (event) {
  event.preventDefault();

  const nameInput = event.target.name.value;
  console.log(nameInput);
  const minCustInput = parseInt(event.target.minCust.value);
  console.log(minCustInput);
  const maxCustInput = parseInt(event.target.maxCust.value);
  console.log(maxCustInput);
  const avgCookiesInput = parseInt(event.target.avgCookies.value);
  console.log(avgCookiesInput);

  const newShop = new CookieShop(nameInput, minCustInput, maxCustInput, avgCookiesInput);

  console.log(locationObjectArray);

  for (let i = 0; i < locationObjectArray.length; i++) {
    if (locationObjectArray[i].name == nameInput) {
      locationObjectArray.pop();
      locationObjectArray.splice(i, 1, newShop);
    }
  }

  console.log(locationObjectArray);

  const table = document.getElementById("sales-table");
  table.innerHTML = "";

  renderSalesTable();
});
