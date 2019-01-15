module.exports = function (sequelize, DataTypes) {

    const PreEmployee = sequelize.define("preEmployee", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        first_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 30],
                    msg: "First Name cannot be longer than 30 characters"
                },
                isAlpha: {
                    msg: "First Name can only be letters"
                }
            }
        },
        last_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [1, 30],
                    msg: "Last Name cannot be longer than 30 characters"
                },
                isAlpha: {
                    msg: "Last Name can only be letters"
                }
            }
        },
        email: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: {
                    args: [6, 100],
                    msg: "Email must be between 6 and 100 characters"
                },
                isEmail: {
                    msg: "Must be in valid email format, john@johndoe.com"
                }
            }
        },
        hire_date: {
            type: DataTypes.STRING(10),
            allowNull: false,
            validate: {
                is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
            }
        },
        requiredDocs: {
            type: DataTypes.STRING,
            allowNull: false
        },
        employeeCompleted: {
            type: DataTypes.BOOLEAN,
            default: false
        }
    });
    return PreEmployee;
};