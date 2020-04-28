'use strict';
module.exports = (sequelize, DataTypes) => {
  const Consultation = sequelize.define(
    'Consultation',
    {
      fullName: DataTypes.STRING,
      phone: DataTypes.INTEGER,
      bornDate: DataTypes.STRING,
      age: DataTypes.INTEGER,
      height: DataTypes.INTEGER,
      weight: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      subject: DataTypes.STRING,
      liveConsult: DataTypes.STRING,
      description: DataTypes.STRING,
      status: DataTypes.STRING,
    },
    {}
  );
  Consultation.associate = function (models) {
    // associations can be defined here
    Consultation.belongsTo(models.User);
  };
  return Consultation;
};
