module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('Users',
      [{
        id: 1,
        name: 'Lewis Hamilton',
        age: 36,
        address: 'Av. Pres. Juscelino Kubitschek',
        number: 77,
        zipcode: 05021010,
        email: 'lewishamilton@gmail.com',
        password: '123456',
      },
      {
        id: 2,
        name: 'Michael Schumacher',
        age: 52,
        address: 'Av. Pres. Juscelino Kubitschek',
        number: 77,
        zipcode: 05021001,
        email: 'michaelSchumacher@gmail.com',
        password: '123456',
      },
      {
        id: 3,
        name: 'John Doe',
        age: 23,
        address: 'Av. Pres. Juscelino Kubitschek',
        number: 12,
        zipcode: 05021000,
        email: 'johndoe@gmail.com',
        password: '123456',
      },
      ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  },
};
