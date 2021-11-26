const simulatorService = require('../services/simulator');

const simulatorCal = async (req, res) => {
    const { user_id, insurance_id, coverages } = req.body;
    const result = await simulatorService.simulatorcal(req.body);
    return res.status(201).json({ result })
};

module.exports = { simulatorCal };
