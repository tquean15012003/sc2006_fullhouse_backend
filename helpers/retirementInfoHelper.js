const getRetirementAgeHelper = (salary, carCat, housePrice, currentSaving, investmentPercentage, noChild, ageOfGrad) => {

    let savings = 0 // money from savings

    let investment = 0 // money from investment

    let total = 0 // total money get after retirement

    let costofliving = 0;

    let y = 0;

    let grad = parseInt(ageOfGrad)

    let costOfCar = parseInt(carCostMap[carCat]);

    let init = parseInt(currentSaving) - (noChild * 170000) - parseInt(housePrice) - costOfCar;

    while (total < ((84 - parseInt(grad)) * 70000)) {
        if (grad <= 55) {
            if (grad < 31) {
                if (y === 0) {
                    costofliving = 1500;
                    y = 1;
                }
                let postMoney = salary * 0.8 - costofliving
                savings = savings + postMoney * (100 - investmentPercentage) / 100 * 12
                investment = investment +  postMoney * investmentPercentage / 100 * 12

                investment = investment * 1.05
                salary = salary * 1.03
                total = init + investment + savings
                grad++;
                costofliving = costofliving * 1.05
            } else {
                if (y === 1) {
                    costofliving = 1500;
                    y = 0;
                }

                let postMoney = salary * 0.8 - costofliving
                savings = savings + postMoney * (100 - investmentPercentage) / 100 * 12
                investment = investment + postMoney * investmentPercentage / 100 * 12

                investment = investment * 1.05
                salary = salary * 1.03
                total = init + investment + savings
                grad++;
                costofliving = costofliving * 1.05
            }
        } else if (grad <= 60) {
            if (y === 0) {
                costofliving = 2000;
                y = 1;
            }

            let postMoney = salary * 0.86 - costofliving
            savings = savings + postMoney * (100 - investmentPercentage) / 100 * 12
            investment = investment + postMoney * investmentPercentage / 100 * 12

            investment = investment * 1.05
            salary = salary * 1.01
            total = init + investment + savings
            grad++;
            costofliving = costofliving * 1.05
        } else if (grad <= 65) {
            if (y === 1) {
                costofliving = 2000;
                y = 0;
            }

            let postMoney = salary * 0.92 - costofliving
            savings = savings + postMoney * (100 - investmentPercentage) / 100 * 12
            investment = investment + postMoney * investmentPercentage / 100 * 12


            investment = investment * 1.05
            salary = salary
            total = init + investment + savings
            grad++;
            costofliving = costofliving * 1.05
        } else if (grad <= 70) {
            if (y === 0) {
                costofliving = 2000;
                y = 1;
            }

            let postMoney = salary * 0.94 - costofliving
            savings = savings + postMoney * (100 - investmentPercentage) / 100 * 12
            investment = investment + postMoney * investmentPercentage / 100 * 12

            investment = investment * 1.05
            salary = salary
            total = init + investment + savings
            grad++;
            costofliving = costofliving * 1.05
        } else {
            if (y === 1) {
                costofliving = 2000;
                y = 0;
            }

            let postMoney = salary * 0.95 - costofliving
            savings = savings + postMoney * (100 - investmentPercentage) / 100 * 12
            investment = investment + postMoney * investmentPercentage / 100 * 12

            investment = investment * 1.05
            salary = salary
            total = init + investment + savings
            grad++;
            costofliving = costofliving * 1.05
        }
    }

    return grad;

}

module.exports = {
    getRetirementAgeHelper
}

const carCostMap = {
    "A": 80500,
    "a": 80500,
    "B": 95856,
    "b": 95856,
    "C": 65991,
    "c": 65991,
    "D": 11751,
    "d": 11751,
    "E": 105001,
    'e': 105001,
    "No car": 0
}