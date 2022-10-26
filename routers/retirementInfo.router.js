const express = require('express');

const { getRetirementInfoByUserID, updateRetirementInfo, getRetirementAge, updateInvestment, updateSalary, updateHousePrice } = require('../controllers/RetirementInfoController/retirementInfo.controller')

const retirementInfoRouter = express.Router();

retirementInfoRouter.get('/getretirementinfo', getRetirementInfoByUserID);
retirementInfoRouter.post('/updateretirementinfo', updateRetirementInfo);
retirementInfoRouter.get('/getretirementage', getRetirementAge)
retirementInfoRouter.put('/updateinvestment', updateInvestment);
retirementInfoRouter.put('/updatesalary', updateSalary);
retirementInfoRouter.put('/updatehouseprice', updateHousePrice);


module.exports = {
    retirementInfoRouter
}