module.exports = function(sequelize, DataTypes) {
    var User = sequelize.define("User", {
        // id: {
        //     type: DataTypes.STRING,
        //     primaryKey: true,
        // },
        // name: {
        //     type: DataTypes.STRING,
        //     allowNull: false
        // },
        // picture_url: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // points_banked: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // points_available: {
        //     type: DataTypes.INTEGER,
        //     allowNull: false,
        // },
        // completed_tasks: {
        //     type: DataTypes.STRING,
        //     allowNull: false,
        // },
        // FamilyUuid: {
        //     type: DataTypes.STRING,
        // },
        // gender: {
        //     type: DataTypes.STRING,
        // },
        // role: {
        //     type: DataTypes.STRING,
        //     defaultValue: "Admin"
        // },

    }, {
        timestamps: false
        
      });

    User.sync({force: false})
    return User;

};




