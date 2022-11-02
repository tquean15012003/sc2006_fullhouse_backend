const express = require('express');

const { getGuestRetirementAge, getRetirementInfoByUserID, updateRetirementInfo, getRetirementAge, updateInvestment, updateSalary, updateHousePrice } = require('../controllers/RetirementInfoController/retirementInfo.controller')
const { authenticate } = require('../middlewares/authenticate.js')

const retirementInfoRouter = express.Router();

retirementInfoRouter.get('/getretirementinfo',  authenticate, getRetirementInfoByUserID);
retirementInfoRouter.post('/updateretirementinfo', authenticate, updateRetirementInfo);
retirementInfoRouter.get('/getretirementage', authenticate, getRetirementAge)
retirementInfoRouter.put('/updateinvestment',authenticate, updateInvestment);
retirementInfoRouter.put('/updatesalary', authenticate, updateSalary);
retirementInfoRouter.put('/updatehouseprice', authenticate, updateHousePrice);
retirementInfoRouter.post('/getguestretirementage', getGuestRetirementAge)

module.exports = {
    retirementInfoRouter
}