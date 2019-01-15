module.exports = function (sequelize, DataTypes) {

  const Employee = sequelize.define("Employee", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    user_name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [8, 15],
          msg: "User Name must be between 8 and 15 characters"
        },
        isAlphaNumeric: {
          msg: "User Name can only be Alpha Numeric characters, no special characters are allowed."
        },
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [8, 15],
          msg: "Password must be between 8 and 15 characters"
        }
      }
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
    primary_phone_number: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^\d{3}[\.-]\d{3}[\.-]\d{4}$/i,
        len: {
          args: [12],
          msg: "Phone Number must be formatted as xxx-xxx-xxxx or xxx.xxx.xxxx"
        }
      }
    },
    secondary_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^\d{3}[\.-]\d{3}[\.-]\d{4}$/i,
        len: {
          args: [12],
          msg: "Phone Number must be formatted as xxx-xxx-xxxx or xxx.xxx.xxxx"
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
    street: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    street2: {
      type: DataTypes.STRING(255),
      allowNull: true
    },
    city: {
      type: DataTypes.STRING(50),
      allowNull: false
    },
    state: {
      type: DataTypes.STRING(12),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    office: {
      type: DataTypes.STRING(10),
      allowNull: false
    },
    dob: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    ss_number: {
      type: DataTypes.STRING(11),
      allowNull: false,
      validate: {
        is: /^\d{3}[-.]\d{2}[-.]\d{4}$/i
      }
    },
    hire_date: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    activated_date: {
      type: DataTypes.STRING(10),
      allowNull: false,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    termination_date: {
      type: DataTypes.STRING(10),
      allowNull: true,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    requiredDocs: {
      type: DataTypes.STRING,
      allowNull: false
    },
    ec_first_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Emergency Contact First Name cannot be longer than 30 characters"
        },
        isAlpha: {
          msg: "Emergency Contact First Name can only be letters"
        }
      }
    },
    ec_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: {
          args: [1, 30],
          msg: "Emergency Contact Last Name cannot be longer than 30 characters"
        },
        isAlpha: {
          msg: "Emergency Contact Last Name can only be letters"
        }
      }
    },
    ec_email: {
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
    ec_phone_number: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: /^\d{3}[\.-]\d{3}[\.-]\d{4}$/i,
        len: {
          args: [12],
          msg: "Phone Number must be formatted as xxx-xxx-xxxx or xxx.xxx.xxxx"
        }
      }
    }
  });
  return Employee;
};