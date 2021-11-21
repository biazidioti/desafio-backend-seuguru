module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Coverages',
      [{
        id: 1,
        seguro_id:1,
        coverageName:'Morte Acidental',
        fator: 0.2,
      },
      {
        id: 2,
        seguro_id:1,
        coverageName:'Invalidez permanente',
        fator: 0.9,
      },
      {
        id: 3,
        seguro_id:2,
        coverageName:'Quebra de Vidros',
        fator: 0.2,
      },
      {
        id: 4,
        seguro_id:2,
        coverageName:'Vendaval',
        fator: 0.1,
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Coverages', null, {});
  },
};

