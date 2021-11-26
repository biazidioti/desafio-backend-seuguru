module.exports = (sequelize, DataTypes) => {
  const Coverage = sequelize.define('Coverage', 
  {
    id: { type: DataTypes.INTEGER, primaryKey: true },
    seguro_id: { type: DataTypes.INTEGER, foreignKey: true },
    coverageName: DataTypes.STRING,
    fator: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'Coverages',
  });

  Coverage.associate = (models) => {
    Coverage.belongsTo(models.Insurance, { as: 'insurances', foreignKey: 'seguro_id' });
  };

  return Coverage;
};