const { getRetirementInfoByUserID } = require('./getRetirementInfoByUserID.controller')
const { updateRetirementInfo } = require('./updateRetirementInfo.controller')
const { getRetirementAge } = require('./getRetirementAge.controller')

module.exports = {
    getRetirementInfoByUserID,
    updateRetirementInfo,
    getRetirementAge
}