const { Model } = require('sequelize');

// eslint-disable-next-line no-unused-vars
module.exports = (sequelize, DataTypes) => {
  class Attendee extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Attendee.belongsTo(models.Meeting);
      Attendee.belongsTo(models.User);
    }
  }
  Attendee.init(
    {},
    {
      sequelize,
      modelName: 'Attendee',
    }
  );
  return Attendee;
};
