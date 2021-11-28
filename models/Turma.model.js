module.exports = (sequelize, DataTypes) => {
    const Turma = sequelize.define("Turma", {
        id_turma: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nome_turma: {
            type: DataTypes.STRING,
        },
        data_inicio: {
            type: DataTypes.STRING,
        },
        data_fim: {
            type: DataTypes.STRING,
        },
        is_active: {
            type: DataTypes.STRING,
        }
    });
    Turma.associate = function (models) {
        Turma.belongsToMany(models.Aluno, {
            as: 'Alunos',
            through: { model: models.Aluno_Turma, unique: false },
            foreignKey: 'fk_turma'
        });

        Turma.belongsTo(models.Serie, {
            as: "Series",
            foreignKey: 'fk_serie',
        });
    }
    return Turma;
};