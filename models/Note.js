module.exports = function(sequelize, DataTypes) {
  
  const Employee = sequelize.define("employee", {
    text: DataTypes.STRING,
    complete: DataTypes.BOOLEAN
  });
  return Employee;
};