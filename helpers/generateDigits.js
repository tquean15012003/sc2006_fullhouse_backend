// generate 6 digits

const generateSixDigits = () => {
    return JSON.stringify(Math.floor(100000 + Math.random() * 900000))
}

module.exports = {
    generateSixDigits
}