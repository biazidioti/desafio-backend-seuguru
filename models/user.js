module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', 
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    name: DataTypes.STRING,
    age: DataTypes.INTEGER,
    address: DataTypes.STRING,
    number: DataTypes.INTEGER,
    zipcode: DataTypes.INTEGER,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Users',
  });

  return User;
};
