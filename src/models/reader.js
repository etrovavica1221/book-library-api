module.exports = (sequelize, DataTypes) => {
  const schema = {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: {
          msg: 'Please use a valid email address!',
        },
        notNull: {
          msg: 'Email cannot be empty!',
        },
      },
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: {
          msg: 'Name cannot be empty!',
        },
        notNull: {
          msg: 'Please provide your name!',
        },
      },
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          msg: 'Password cannot be empty!',
        },
        isLonger(value) {
          if (value.length < 8)
            throw new Error('The password must be longer than 8 characters!');
        },
      },
    },
  };
  return sequelize.define('Reader', schema);
};
