const insuranceService = require('../services/insurance');

const createInsurance = async (req, res) => {
    const { insuranceName } = req.body;
    const newInsurance = { insuranceName };
    const result = await insuranceService.createInsurance(newInsurance);
    if (result.error) {
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }

    return res.status(201).json({
        message: newInsurance.insuranceName,
    });
};

const getInsurance = async (_req, res) => {
    const insurances = await insuranceService.getInsurance();
    return res.status(200).json({ message: insurances });
};

module.exports = { createInsurance, getInsurance };