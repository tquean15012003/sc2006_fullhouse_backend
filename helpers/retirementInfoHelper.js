const getRetirementAgeHelper = (salary, carCat, housePrice, currentSaving, investmentPercentage, noChild, ageOfGrad) => {
    savings = 0;
    investment = 0; //KIV
    total = 0;
    costofliving = 0;
    costcar = 0;
    y=0;
    grad = ageOfGrad;
    salary = salary;
    costofcar = 0;

    if (carCat == 'A' || carCat == 'a')
    {
        costcar = 80500;
    }
    else if (carCat == 'B'|| carCat == 'b')
    {
        costcar = 95856;
    }
    else if (carCat == 'C'|| carCat == 'c')
    {
        costcar = 65991;
    }
    else if (carCat == 'D'|| carCat == 'd')
    {
        costcar = 11751;
    }
    else if (carCat == 'E'|| carCat == 'e')
    {
        costcar = 105001;
    }

    init = currentSaving - (noChild * 170000) - housePrice - costcar;

    while (total < (84 - grad) * 48000) {
        if (grad <= 55) {
            if (grad < 31) {
                if (y == 0) {
                    costofliving = 1500;
                    y = 1;
                }
                for (let x = 0; x < 12; x++) {
                    savings = savings + (((salary * 80 / 100) - costofliving) * (100 - investmentPercentage) / 100);
                    investment = investment + (((salary * 80 / 100) - costofliving) * (investmentPercentage / 100));
                }
                investment = investment + (investment * 5 / 100);
                salary = salary + (salary * 3 / 100);
                if (costcar != 0)
                savings = savings - 6500;
                total = init + investment + savings;
                grad++;
                costofliving = costofliving * (105 / 100);
            }
            else {
                if (y == 1) {
                    costofliving = 5200;
                    y = 0;
                }
                for (let x = 0; x < 12; x++) {
                    savings = savings + (((salary * 80 / 100) - costofliving) * ((100 - investmentPercentage) / 100));
                    investment = investment + (((salary * 80 / 100) - costofliving) * (investmentPercentage / 100));
                }
                investment = investment + (investment * 5 / 100);
                salary = salary + (salary * 3 / 100);
                if (costcar != 0)
                savings = savings - 6500;
                total = init + investment + savings;
                grad++;
                costofliving = costofliving * (105 / 100);
            }
        }
        else if (grad <= 60) {
            if (y == 0) {
                costofliving = 2000;
                y = 1;
            }
            for (let x = 0; x < 12; x++) {
                savings = savings + (((salary * 86 / 100) - costofliving) * ((100 - investmentPercentage) / 100));
                investment = investment + (((salary * 86 / 100) - costofliving) * (investmentPercentage / 100));
            }
            investment = investment + (investment * 5 / 100);
            salary = salary + (salary * 1 / 100);
            if (costcar != 0)
            savings = savings - 6500;
            total = init + investment + savings;
            grad++;
            costofliving = costofliving * (105 / 100);
        }
        else if (grad <= 65) {
            if (y == 1) {
                costofliving = 2000;
                y = 0;
            }
            for (let x = 0; x < 12; x++) {
                savings = savings + (((salary * 92 / 100) - costofliving) * ((100 - investmentPercentage) / 100);
                investment = investment + (((salary * 92 / 100) - costofliving) * investmentPercentage / 100);
            }
            investment = investment + (investment * 5 / 100);
            if (costcar != 0)
            savings = savings - 6500;
            total = init + investment + savings;
            grad++;
            costofliving = costofliving * (105 / 100);
        }
        else if (grad <= 70) {
            if (y == 0) {
                costofliving = 2000;
                y = 1;
            }
            for (let x = 0; x < 12; x++) {
                savings = savings + (((salary * 94 / 100) - costofliving) * (100 - investmentPercentage) / 100);
                investment = investment + (((salary * 94 / 100) - costofliving) * investmentPercentage / 100);
            }
            investment = investment + (investment * 5 / 100);
            if (costcar != 0)
            savings = savings - 6500;
            total = init + investment + savings;
            grad++;
            costofliving = costofliving * (105 / 100);
        }
        else {
            if (y == 1) {
                costofliving = 2000;
                y = 0;
            }
            for (let x = 0; x < 12; x++) {
                savings = savings + (((salary * 95 / 100) - costofliving) * (100 - investmentPercentage) / 100);
                investment = investment + (((salary * 95 / 100) - costofliving) * investmentPercentage / 100);
            }
            investment = investment + (investment * 5 / 100);
            if (costcar != 0)
            savings = savings - 6500;
            total = init + investment + savings;
            grad++;
            costofliving = costofliving * (105 / 100);
        }

    }
    return grad; // retirementAge
}

module.exports = {
    getRetirementAgeHelper
}