'use strict';

var hoursOfOperation = ['6am: ', '7am: ', '8am: ', '9am: ', '10am: ', '11am: ', '12pm: ', '1pm: ', '2pm: ', '3pm: ', '4pm: ', '5pm: ', '6pm: ', '7pm: ', '8pm: ', 'Total: '];

// Location	      Min / Cust	Max / Cust	Avg Cookie Sale
// 1st and Pike	  23	  65	        6.3
// SeaTac Airport	3	    24	        1.2
// Seattle Center	11	  38	        3.7
// Capitol Hill	  20	  38	        2.3
// Alki	          2	    16	        4.6

var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerSale: 6.3,
  randomHourlyCustomers: function() {
    var customers = Math.floor(Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers);
    return customers;
  },
  hourlyCookiesPurchased: function() {
    var cookies = Math.round(this.avgCookiesPerSale * this.randomHourlyCustomers());
    return cookies + ' cookies';
  },
  cookieSales: function() {
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
  },
  render: function() {
    var ulEl = document.getElementById('1stNPike');
    for (var i = 0; i < this.cookieSales().length; i++) {
      var liEl = document.createElement('li');
      liEl.textContent = hoursOfOperation[i] + this.cookieSales()[i];
      ulEl.appendChild(liEl);
    }
  }
}
