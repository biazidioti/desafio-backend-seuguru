module.exports = (sequelize, DataTypes) => {
  const Insurance = sequelize.define('Insurance', 
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    insuranceName: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Insurances',
  });

  Insurance.associate = (models) => {
    Insurance.hasMany(models.Coverage, { as: 'coverages', foreignKey: 'seguro_id' });
  };

  return Insurance;
};
