"use strict";

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

const seattle = {
  name: "Seattle",
  minCust: 23,
  maxCust: 65,
  avgCookiePerSale: 6.3,
  salesPerHour: [],
  totalsales: 0,
  salesPerHourFunc: function () {
    for (let i = 0; i < openingHours.length - 1; i++) {
      this.salesPerHour.push(Math.floor(random(this.minCust, this.maxCust) * this.avgCookiePerSale));
    }
  },
  render: function () {
    this.salesPerHourFunc();
    const list = document.getElementById(this.name);
    for (let i = 0; i < openingHours.length - 1; i++) {
      const listEntry = document.createElement("li");
      listEntry.textContent = `${openingHours[i]} - ${openingHours[i + 1]}: ${this.salesPerHour[i]} cookies sold`;
      list.appendChild(listEntry);
      this.totalsales += this.salesPerHour[i];
    }
    const listEntry = document.createElement("li");
    listEntry.textContent = `Total: ${this.totalsales}`;
    list.appendChild(listEntry);
  },
};

const tokyo = {
  name: "Tokyo",
  minCust: 3,
  maxCust: 24,
  avgCookiePerSale: 1.2,
  salesPerHour: [],
  totalsales: 0,
  salesPerHourFunc: function () {
    for (let i = 0; i < openingHours.length - 1; i++) {
      this.salesPerHour.push(Math.floor(random(this.minCust, this.maxCust) * this.avgCookiePerSale));
    }
  },
  render: function () {
    this.salesPerHourFunc();
    const list = document.getElementById(this.name);
    for (let i = 0; i < openingHours.length - 1; i++) {
      const listEntry = document.createElement("li");
      listEntry.textContent = `${openingHours[i]} - ${openingHours[i + 1]}: ${this.salesPerHour[i]} cookies sold`;
      list.appendChild(listEntry);
      this.totalsales += this.salesPerHour[i];
    }
    const listEntry = document.createElement("li");
    listEntry.textContent = `Total: ${this.totalsales}`;
    list.appendChild(listEntry);
  },
};

const dubai = {
  name: "Dubai",
  minCust: 11,
  maxCust: 38,
  avgCookiePerSale: 3.7,
  salesPerHour: [],
  totalsales: 0,
  salesPerHourFunc: function () {
    for (let i = 0; i < openingHours.length - 1; i++) {
      this.salesPerHour.push(Math.floor(random(this.minCust, this.maxCust) * this.avgCookiePerSale));
    }
  },
  render: function () {
    this.salesPerHourFunc();
    const list = document.getElementById(this.name);
    for (let i = 0; i < openingHours.length - 1; i++) {
      const listEntry = document.createElement("li");
      listEntry.textContent = `${openingHours[i]} - ${openingHours[i + 1]}: ${this.salesPerHour[i]} cookies sold`;
      list.appendChild(listEntry);
      this.totalsales += this.salesPerHour[i];
    }
    const listEntry = document.createElement("li");
    listEntry.textContent = `Total: ${this.totalsales}`;
    list.appendChild(listEntry);
  },
};

const paris = {
  name: "Paris",
  minCust: 20,
  maxCust: 38,
  avgCookiePerSale: 2.3,
  salesPerHour: [],
  totalsales: 0,
  salesPerHourFunc: function () {
    for (let i = 0; i < openingHours.length - 1; i++) {
      this.salesPerHour.push(Math.floor(random(this.minCust, this.maxCust) * this.avgCookiePerSale));
    }
  },
  render: function () {
    this.salesPerHourFunc();
    const list = document.getElementById(this.name);
    for (let i = 0; i < openingHours.length - 1; i++) {
      const listEntry = document.createElement("li");
      listEntry.textContent = `${openingHours[i]} - ${openingHours[i + 1]}: ${this.salesPerHour[i]} cookies sold`;
      list.appendChild(listEntry);
      this.totalsales += this.salesPerHour[i];
    }
    const listEntry = document.createElement("li");
    listEntry.textContent = `Total: ${this.totalsales}`;
    list.appendChild(listEntry);
  },
};

const lima = {
  name: "Lima",
  minCust: 2,
  maxCust: 16,
  avgCookiePerSale: 4.6,
  salesPerHour: [],
  totalsales: 0,
  salesPerHourFunc: function () {
    for (let i = 0; i < openingHours.length - 1; i++) {
      this.salesPerHour.push(Math.floor(random(this.minCust, this.maxCust) * this.avgCookiePerSale));
    }
  },
  render: function () {
    this.salesPerHourFunc();
    const list = document.getElementById(this.name);
    for (let i = 0; i < openingHours.length - 1; i++) {
      const listEntry = document.createElement("li");
      listEntry.textContent = `${openingHours[i]} - ${openingHours[i + 1]}: ${this.salesPerHour[i]} cookies sold`;
      list.appendChild(listEntry);
      this.totalsales += this.salesPerHour[i];
    }
    const listEntry = document.createElement("li");
    listEntry.textContent = `Total: ${this.totalsales}`;
    list.appendChild(listEntry);
  },
};

seattle.render();
tokyo.render();
dubai.render();
paris.render();
lima.render();
