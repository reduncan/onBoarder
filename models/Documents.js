module.exports = function(sequelize, DataTypes) {
  
    const Documents = sequelize.define("documents", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: DataTypes.STRING(100),
        path: DataTypes.STRING(150) 
    });
    return Documents;
  };