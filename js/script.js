let currencyElement = document.querySelector(".js-currency");
let amountElement = document.querySelector(".js-amount");
let resultElement = document.querySelector(".js-result");
let form = document.querySelector(".js-form");



form.addEventListener("submit", (event) => {
    event.preventDefault()

let currency = currencyElement.value
let amount = +amountElement.value;

let priceEUR = 4.32;
let priceUSD = 3.99;
let priceGBP = 5.04;
let priceCHF = 4.53;

    
    switch (currency) {
        case ("EUR"):
            result = amount / priceEUR;
            break;
        case ("USD"):
            result = amount / priceUSD;
            break;
        case ("GBP"):
            result = amount / priceGBP;
            break;
        case ("CHF"):
            result = amount / priceCHF;
            break;
    }

    resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;
});