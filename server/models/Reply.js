'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reply = sequelize.define(
    'Reply',
    {
      reply: DataTypes.STRING,
    },
    {}
  );
  Reply.associate = function (models) {
    // associations can be defined here
    Reply.belongsTo(models.Consultation);
  };
  return Reply;
};
