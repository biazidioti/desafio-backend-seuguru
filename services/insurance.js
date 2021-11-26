const { Insurance } = require('../models');

const createInsurance = async ({ insuranceName }) => {
    console.log(insuranceName);
    try { 
        const result = await Insurance.create({ insuranceName });
        return result;
    } catch (error) {
        console.error(error.message);
        return { error: error.message };
    }
};

const getInsurance = async () => {
    const ins = await Insurance.findAll();
    return ins
};

module.exports = { createInsurance, getInsurance };
