module.exports = function(sequelize, DataTypes) {
  
    const Documents = sequelize.define("documents", {
        id: {
            type: DataTypes.INTEGER
        },
        name: DataTypes.VARCHAR(100),
        path: DataTypes.VARCHAR(150) 
    });
    return Documents;
  };