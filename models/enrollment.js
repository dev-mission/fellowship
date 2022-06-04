const { Model } = require('sequelize');

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Enrollment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Enrollment.belongsTo(models.User);
      Enrollment.belongsTo(models.Cohort);
    }
  }
  Enrollment.init(
    {},
    {
      sequelize,
      modelName: 'Enrollment',
    }
  );
  return Enrollment;
};
