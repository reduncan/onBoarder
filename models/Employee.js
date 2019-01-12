module.exports = function (sequelize, DataTypes) {

  const Employee = sequelize.define("employee", {
    user_name: {
      type: DataTypes.VARCHAR,
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
      type: DataTypes.VARCHAR,
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
      type: DataTypes.VARCHAR,
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
      type: DataTypes.VARCHAR,
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
      type: DataTypes.VARCHAR,
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
      type: DataTypes.VARCHAR(255),
      allowNull: false
    },
    street2: {
      type: DataTypes.VARCHAR(255),
      allowNull: false
    },
    city: {
      type: DataTypes.VARCHAR(50),
      allowNull: false
    },
    state: {
      type: DataTypes.VARCHAR(12),
      allowNull: false
    },
    zip_code: {
      type: DataTypes.INTEGER(5),
      allowNull: false
    },
    office: {
      type: DataTypes.VARCHAR(10),
      allowNull: false
    },
    dob: {
      type: DataTypes.VARCHAR(10),
      allowNull: false,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    ss_number: {
      type: DataTypes.VARCHAR(11),
      allowNull: false,
      validate: {
        is: /^\d{3}[-.]\d{2}[-.]\d{4}$/i
      }
    },
    hire_date: {
      type: DataTypes.VARCHAR(10),
      allowNull: false,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    activated_date: {
      type: DataTypes.VARCHAR(10),
      allowNull: false,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
    },
    termination_date: {
      type: DataTypes.VARCHAR(10),
      allowNull: true,
      validate: {
        is: /^\d{2}[\/.-]\d{2}[\/.-]\d{4}$/i
      }
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
      type: DataTypes.VARCHAR,
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
      type: DataTypes.VARCHAR,
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