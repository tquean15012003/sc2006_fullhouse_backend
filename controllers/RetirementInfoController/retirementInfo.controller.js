const { getRetirementInfoByUserID } = require('./getRetirementInfoByUserID.controller')
const { updateRetirementInfo, updateInvestment, updateSalary, updateHousePrice } = require('./updateRetirementInfo.controller')
const { getRetirementAge } = require('./getRetirementAge.controller')

module.exports = {
    getRetirementInfoByUserID,
    updateRetirementInfo,
    updateInvestment,
    getRetirementAge,
    updateSalary,
    updateHousePrice
}