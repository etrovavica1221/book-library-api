module.exports = (sequelize, DataTypes) => {
  const schema = {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'Title cannot be empty!',
        },
        notEmpty: {
          args: [true],
          msg: 'The book title cannot be empty',
        },
      },
    },
    author: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notNull: {
          args: [true],
          msg: 'Author cannot be empty!',
        },
        notEmpty: {
          args: [true],
          msg: 'The book author cannot be empty',
        },
      },
    },
    ISBN: DataTypes.STRING,
  };

  return sequelize.define('Book', schema);
};
