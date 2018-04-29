// Definition of the Quiz model

module.exports = function (sequelize, DataTypes) {
    return sequelize.define('quiz',
        {
            question: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "La pregunta no puede estar vacia"}}
            },
            answer: {
                type: DataTypes.STRING,
                validate: {notEmpty: {msg: "La respuesta no puede estar vacia"}}
            }
        });
};