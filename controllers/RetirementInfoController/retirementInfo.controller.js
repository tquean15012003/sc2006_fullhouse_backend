const { getRetirementInfoByUserID } = require('./getRetirementInfoByUserID.controller')
const { updateRetirementInfo, updateInvestment, updateSalary, updateHousePrice } = require('./updateRetirementInfo.controller')
const { getRetirementAge, getGuestRetirementAge} = require('./getRetirementAge.controller')

module.exports = {
    getRetirementInfoByUserID,
    updateRetirementInfo,
    updateInvestment,
    getRetirementAge,
    updateSalary,
    updateHousePrice,
    getGuestRetirementAge
}