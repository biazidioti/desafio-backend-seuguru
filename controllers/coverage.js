const coverageService = require('../services/coverage');

const createCoverage = async (req, res) => {
    const { coverageName, fator, seguro_id } = req.body;
    const newCoverage = { coverageName, fator, seguro_id };
    const result = await coverageService.createCoverage(newCoverage);
    if (result.error) {
        return res.status(500).json({ message: 'Erro interno no servidor' })
    }

    return res.status(201).json({
        coverageName: newCoverage.coverageName,
        fator: newCoverage.fator,
    });
};

const getCoverage = async (_req, res) => {
 const coverages = await coverageService.getCoverage();
 return res.status(200).json({ message: coverages });
};

module.exports = { createCoverage, getCoverage };