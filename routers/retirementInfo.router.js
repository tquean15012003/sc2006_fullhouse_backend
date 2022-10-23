const express = require('express');

const { getRetirementInfoByUserID, updateRetirementInfo, getRetirementAge } = require('../controllers/RetirementInfoController/retirementInfo.controller')

const retirementInfoRouter = express.Router();

retirementInfoRouter.get('/getretirementinfo', getRetirementInfoByUserID);
retirementInfoRouter.post('/updateretirementinfo', updateRetirementInfo);
retirementInfoRouter.get('/getretirementage', getRetirementAge)

module.exports = {
    retirementInfoRouter
}