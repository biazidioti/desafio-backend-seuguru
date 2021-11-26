const { Coverage } = require('../models');

const simulatorcal = async ({ insurance_id, coverages }) => {
    
    const output = coverages.map(async (coverage) => {
        const cobertura = await Coverage.findByPk(coverage.coverage_id);
        const premio = cobertura.fator * coverage.capital;
        const cov = { 
            coverage_id: cobertura.seguro_id, 
            name: cobertura.coverageName, 
            premio: premio 
        }
        return cov;
    })
    const valor = await Promise.all(output);
    return { 
        insurance_id, 
        coverages: valor, 
        total: valor.reduce((acc, item) => acc + item.premio, 0), 
    }
};

module.exports = { simulatorcal };
