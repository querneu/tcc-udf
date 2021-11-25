module.exports = (sequelize, DataTypes) => {
    const Ano = sequelize.define("Ano", {
        id_ano: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_ano: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.STRING,
        }
    });
    return Ano;
};