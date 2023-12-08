module.exports = (sequelize, Sequelize) => {
  const Employee = sequelize.define("employee", {
    id: {
      primaryKey: true,
      type: Sequelize.INTEGER(11),
      autoIncrement: true,
    },
    first_name: {
      type: Sequelize.STRING(20),
      allowNull: false,
    },
    last_name: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    departments: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    Address: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    salary: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    dob: {
      type: Sequelize.STRING(50),
      allowNull: true,
    },
    created_at: {
      type: Sequelize.DATE,
      allowNull: false,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    created_by: {
      type: Sequelize.INTEGER(11),
      allowNull: true
    },
    modified_at: {
      type: Sequelize.DATE,
      allowNull: true,
      defaultValue: Sequelize.literal('CURRENT_TIMESTAMP')
    },
    modified_by: {
      type: Sequelize.INTEGER(11),
      allowNull: true,
    },
    is_deleted: {
      type: Sequelize.TINYINT(1),
      allowNull: true,
      defaultValue: 0
    },
    deleted_at: {
      type: Sequelize.DATE,
      allowNull: true,
    },
  });
  return Employee;
};
