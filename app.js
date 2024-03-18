// one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
} 

const fromEuroToDollar = (euro) => {
    return euro * oneEuroIs.USD
}


const fromDollarToYen = (dollar) => {
    return (dollar * oneEuroIs.JPY) / oneEuroIs.USD
}


const fromYenToPound = (yen) => {
    return (yen * oneEuroIs.GBP) / oneEuroIs.JPY
}

module.exports = { fromEuroToDollar , fromDollarToYen, fromYenToPound };