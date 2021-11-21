module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Insurances',
      [{
        id: 1,
        insuranceName: 'seguro de vida',
      },
      {
        id: 2,
        insuranceName: 'seguro residencial',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Insurances', null, {});
  },
};
