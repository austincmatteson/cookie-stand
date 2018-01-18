'use strict';

var hoursOfOperation = ['Store Location', '6:00am', '7:00am', '8:00am', '9:00am', '10:00am', '11:00am', '12:00pm', '1:00pm', '2:00pm', '3:00pm', '4:00pm', '5:00pm', '6:00pm', '7:00pm', '8:00pm', 'Daily Location Total'];

var allStores = [];

var storeForm = document.getElementById('store-form');

// Location	      Min / Cust	Max / Cust	Avg Cookie Sale
// 1st and Pike	  23	  65	        6.3
// SeaTac Airport	3	    24	        1.2
// Seattle Center	11	  38	        3.7
// Capitol Hill	  20	  38	        2.3
// Alki	          2	    16	        4.6

var storeTable = document.getElementById('storeSales');

function Store(minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale, storefront) {
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
  this.storefront = storefront;
  allStores.push(this);
}

Store.prototype.randomHourlyCustomers = function() {
  var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
  return customers;
};

Store.prototype.hourlyCookiesPurchased = function() {
  var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
  return cookies + ' cookies';
};

Store.prototype.cookieSales = function() {
  var sales = [];
  var total = 0;
  for(var i = 1; i < hoursOfOperation.length; i++) {
    if(i === (hoursOfOperation.length - 1)) {
      sales[i] = total + ' cookies';
      console.log(hoursOfOperation[i] + ' ' + sales[i]);
    } else {
      sales[i] = this.hourlyCookiesPurchased();
      console.log(hoursOfOperation[i] + ' ' + sales[i]);
      total += parseInt(sales[i]);
    }
  }
  return sales;
};

Store.prototype.render = function() {
  var trEl = document.createElement('tr');
  var todaySales = this.cookieSales();
  for (var i = 0; i < hoursOfOperation.length; i++) {
    var tdEl = document.createElement('td');
    if(i === 0) {
      tdEl.textContent = this.storefront;
      trEl.appendChild(tdEl);
    } else {
      tdEl.textContent = todaySales[i];
      trEl.appendChild(tdEl);
    }
  }
  storeTable.appendChild(trEl);
};

function makeHeaderRow() {
  var trEl = document.createElement('tr');
  for(var i = 0; i < hoursOfOperation.length; i++){
    var thEl = document.createElement('th');
    thEl.textContent = hoursOfOperation[i];
    trEl.appendChild(thEl);
  }
  storeTable.appendChild(trEl);
}

function renderAllStores() {
  for(var i in allStores) {
    allStores[i].render();
  }
}

function addNewStore(event) {
  event.preventDefault();
  console.log(event.target.storeName.value);
  var newStore = event.target.storeName.value;
  var minCustomers = event.target.minCust.value;
  var maxCustomers = event.target.maxCust.value;
  var avgCookies = event.target.avgCook.value;

  new Store(minCustomers, maxCustomers, avgCookies, newStore);

  storeTable.innerHTML = '';
  makeHeaderRow();
  renderAllStores();
}

var firstAndPike = new Store(23, 65, 6.3, '1st & Pike');
var seaTac = new Store(3, 34, 1.2, 'SeaTac Airport');
var seattleCenter = new Store(11, 38, 3.7, 'Seattle Center');
var capitolHill = new Store(20, 38, 2.3, 'Capitol Hill');
var alki = new Store(2, 16, 4.6, 'Alki');

storeForm.addEventListener('submit', addNewStore);

makeHeaderRow();
renderAllStores();