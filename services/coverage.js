const { Coverage } = require('../models');

const createCoverage = async ({coverageName, fator, seguro_id}) => {
    try { 
        const result = await Coverage.create({ coverageName, fator, seguro_id });
        return result;
    } catch (error) {
        console.error(error.message);
        return { error: error.message };
    }
};

const getCoverage = async () => {
    const cov = await Coverage.findAll();
    return cov
};

module.exports = { createCoverage, getCoverage };