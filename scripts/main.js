"use strict";

console.log('\'Allo \'Allo!');

function createNode(element) {
    return document.createElement(element);
}

function append(parent, el) {
  return parent.appendChild(el);
}

//var currencytri = [BTC,ETH,BNB,DOGE,XRP,ADA,DOT,BCH,LTC,UNI,LINK,VET,USDC,XLM,ETC,THETA,SOL,TRX]

const ul = document.getElementById('currencyupdate');
const url = "https://api.nomics.com/v1/currencies/ticker?key=c52c863f38fa919e6d94d2873272c03a&ids=BTC&interval=1d,30d&convert=EUR&per-page=100&page=1';"

fetch(url)
.then((resp) => resp.json())
.then(function(data) {
  let currencies = data.results;
  return currencies.map(function(currency) {
    let li = createNode('li');
    let span = createNode('span');
    span.innerHTML = `"${currency.currency} ${currency.price}"`;
    document.getElementById('currencyupdate');
    append(li, span);
    append(ul, li);
  })
})
.catch(function(error) {
  console.log(error);
});

 // Uncomment to enable Bootstrap tooltips
// https://getbootstrap.com/docs/4.0/components/tooltips/#example-enable-tooltips-everywhere
// $(function () { $('[data-toggle="tooltip"]').tooltip(); });
// Uncomment to enable Bootstrap popovers
// https://getbootstrap.com/docs/4.0/components/popovers/#example-enable-popovers-everywhere
// $(function () { $('[data-toggle="popover"]').popover(); });
//# sourceMappingURL=main.js.map