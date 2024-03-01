
{

    const calculateResult = (currency, amount) => {
        let priceEUR = 4.32;
        let priceUSD = 3.99;
        let priceGBP = 5.04;
        let priceCHF = 4.53;


        switch (currency) {
            case ("EUR"):
                return amount / priceEUR;

            case ("USD"):
                return amount / priceUSD;

            case ("GBP"):
                return amount / priceGBP;

            case ("CHF"):
                return amount / priceCHF;

        }
    };



    const resultText = (amount, result, currency) => {

        let resultElement = document.querySelector(".js-result");
        resultElement.innerText = `${amount} PLN = ${result.toFixed(2)} ${currency}`;

    };

    const onFormSubmit = (event) => {
        event.preventDefault()

        let currencyElement = document.querySelector(".js-currency");
        let amountElement = document.querySelector(".js-amount");

        let currency = currencyElement.value
        let amount = +amountElement.value;

        const result = calculateResult(currency, amount);

        resultText(amount, result, currency);

    };



    const init = () => {
        const form = document.querySelector(".js-form");

        form.addEventListener("submit", onFormSubmit);

    };

    init();
};