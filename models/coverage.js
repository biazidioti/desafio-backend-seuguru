module.exports = (sequelize, DataTypes) => {
  const Coverages = sequelize.define('Coverages', 
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    seguro_id: { type: DataTypes.INTEGER, foreignKey: true },
    coverageName: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Coverages',
  });

  Coverages.associate = (models) => {
    Coverages.belongsTo(models.Insurances, { as: 'insurances', foreignKey: 'seguro_id' });
  };

  return Coverages;
};