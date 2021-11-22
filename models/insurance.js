module.exports = (sequelize, DataTypes) => {
  const Insurances = sequelize.define('Insurances', 
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    insuranceName: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Insurances',
  });

  Insurances.associate = (models) => {
    Insurances.hasMany(models.Coverages, { as: 'coverages', foreignKey: 'seguro_id' });
  };

  return Insurances;
};
