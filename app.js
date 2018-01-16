'use strict';

var hoursOfOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

// Location	      Min / Cust	Max / Cust	Avg Cookie Sale
// 1st and Pike	  23	  65	        6.3
// SeaTac Airport	3	    24	        1.2
// Seattle Center	11	  38	        3.7
// Capitol Hill	  20	  38	        2.3
// Alki	          2	    16	        4.6

// var storeTable = document.getElementById('storeSales');

function Store(minHourlyCustomers, maxHourlyCustomers, avgCookiesPerSale) {
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerSale = avgCookiesPerSale;
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
  for(var i = 0; i < hoursOfOperation.length; i++) {
    if(i === (hoursOfOperation.length - 1)) {
      sales[i] = total + ' cookies';
      console.log(hoursOfOperation[i] + sales[i]);
    } else {
      sales[i] = this.hourlyCookiesPurchased();
      console.log(hoursOfOperation[i] + sales[i]);
      total += parseInt(sales[i]);
    }
  }
  return sales;
};

Store.prototype.render = function() {
  var ulEl = document.getElementById('1stNPike');
  var todaySales = this.cookieSales();
  for (var i = 0; i < todaySales.length; i++) {
    var liEl = document.createElement('li');
    liEl.textContent = hoursOfOperation[i] + todaySales[i];
    ulEl.appendChild(liEl);
  }
};

var firstAndPike = new Store(23, 65, 6.3);
firstAndPike.render();

// var firstAndPike = {
//   minHourlyCustomers: 23,
//   maxHourlyCustomers: 65,
//   avgCookiesPerSale: 6.3,
//   randomHourlyCustomers: function() {
//     var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
//     return customers;
//   },
//   hourlyCookiesPurchased: function() {
//     var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
//     return cookies + ' cookies';
//   },
//   cookieSales: function() {
//     var sales = [];
//     var total = 0;
//     for(var i = 0; i < hoursOfOperation.length; i++) {
//       if(i === (hoursOfOperation.length - 1)) {
//         sales[i] = total + ' cookies';
//         console.log(hoursOfOperation[i] + sales[i]);
//       } else {
//         sales[i] = this.hourlyCookiesPurchased();
//         console.log(hoursOfOperation[i] + sales[i]);
//         total += parseInt(sales[i]);
//       }
//     }
//     return sales;
//   },
//   render: function() {
//     var ulEl = document.getElementById('1stNPike');
//     var todaySales = this.cookieSales();
//     for (var i = 0; i < todaySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + todaySales[i];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var seaTac = {
//   minHourlyCustomers: 3,
//   maxHourlyCustomers: 34,
//   avgCookiesPerSale: 1.2,
//   randomHourlyCustomers: function() {
//     var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
//     return customers;
//   },
//   hourlyCookiesPurchased: function() {
//     var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
//     return cookies + ' cookies';
//   },
//   cookieSales: function() {
//     var sales = [];
//     var total = 0;
//     for(var i = 0; i < hoursOfOperation.length; i++) {
//       if(i === (hoursOfOperation.length - 1)) {
//         sales[i] = total + ' cookies';
//         console.log(hoursOfOperation[i] + sales[i]);
//       } else {
//         sales[i] = this.hourlyCookiesPurchased();
//         console.log(hoursOfOperation[i] + sales[i]);
//         total += parseInt(sales[i]);
//       }
//     }
//     return sales;
//   },
//   render: function() {
//     var ulEl = document.getElementById('seaTac');
//     var todaySales = this.cookieSales();
//     for (var i = 0; i < todaySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + todaySales[i];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var seattleCenter = {
//   minHourlyCustomers: 11,
//   maxHourlyCustomers: 38,
//   avgCookiesPerSale: 3.7,
//   randomHourlyCustomers: function() {
//     var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
//     return customers;
//   },
//   hourlyCookiesPurchased: function() {
//     var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
//     return cookies + ' cookies';
//   },
//   cookieSales: function() {
//     var sales = [];
//     var total = 0;
//     for(var i = 0; i < hoursOfOperation.length; i++) {
//       if(i === (hoursOfOperation.length - 1)) {
//         sales[i] = total + ' cookies';
//         console.log(hoursOfOperation[i] + sales[i]);
//       } else {
//         sales[i] = this.hourlyCookiesPurchased();
//         console.log(hoursOfOperation[i] + sales[i]);
//         total += parseInt(sales[i]);
//       }
//     }
//     return sales;
//   },
//   render: function() {
//     var ulEl = document.getElementById('seaCenter');
//     var todaySales = this.cookieSales();
//     for (var i = 0; i < todaySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + todaySales[i];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var capitolHill = {
//   minHourlyCustomers: 20,
//   maxHourlyCustomers: 38,
//   avgCookiesPerSale: 2.3,
//   randomHourlyCustomers: function() {
//     var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
//     return customers;
//   },
//   hourlyCookiesPurchased: function() {
//     var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
//     return cookies + ' cookies';
//   },
//   cookieSales: function() {
//     var sales = [];
//     var total = 0;
//     for(var i = 0; i < hoursOfOperation.length; i++) {
//       if(i === (hoursOfOperation.length - 1)) {
//         sales[i] = total + ' cookies';
//         console.log(hoursOfOperation[i] + sales[i]);
//       } else {
//         sales[i] = this.hourlyCookiesPurchased();
//         console.log(hoursOfOperation[i] + sales[i]);
//         total += parseInt(sales[i]);
//       }
//     }
//     return sales;
//   },
//   render: function() {
//     var ulEl = document.getElementById('capHill');
//     var todaySales = this.cookieSales();
//     for (var i = 0; i < todaySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + todaySales[i];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// var alki = {
//   minHourlyCustomers: 2,
//   maxHourlyCustomers: 16,
//   avgCookiesPerSale: 4.6,
//   randomHourlyCustomers: function() {
//     var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
//     return customers;
//   },
//   hourlyCookiesPurchased: function() {
//     var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
//     return cookies + ' cookies';
//   },
//   cookieSales: function() {
//     var sales = [];
//     var total = 0;
//     for(var i = 0; i < hoursOfOperation.length; i++) {
//       if(i === (hoursOfOperation.length - 1)) {
//         sales[i] = total + ' cookies';
//         console.log(hoursOfOperation[i] + sales[i]);
//       } else {
//         sales[i] = this.hourlyCookiesPurchased();
//         console.log(hoursOfOperation[i] + sales[i]);
//         total += parseInt(sales[i]);
//       }
//     }
//     return sales;
//   },
//   render: function() {
//     var ulEl = document.getElementById('alki');
//     var todaySales = this.cookieSales();
//     for (var i = 0; i < todaySales.length; i++) {
//       var liEl = document.createElement('li');
//       liEl.textContent = hoursOfOperation[i] + todaySales[i];
//       ulEl.appendChild(liEl);
//     }
//   }
// };

// firstAndPike.render();
// seaTac.render();
// seattleCenter.render();
// capitolHill.render();
// alki.render();