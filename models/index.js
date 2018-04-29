var path = require('path');

//Load ORM
const Sequelize = require('sequelize');

// To use SQLite data base:
const sequelize = new Sequelize ("sqlite:quizzes.sqlite");

//Import the definition of the Quiz Table from quiz.js
var quiz = sequelize.import(path.join(__dirname, 'quiz'));

//Create tables
sequelize.sync()
.then(() => sequelize.models.quiz.count())
.then(count => {
  if (!count) {
    return sequelize.models.quiz.bulkCreate([
      {question: "Capital de Italia", answer:"Roma"},
      {question: "Capital de Francia", answer:"Paris"},
      {question: "Capital de España", answer:"Madrid"},
      {question: "Capital de Portugal", answer:"Lisboa"}
    ]);
  }
})
.catch(error => {
  console.log(error);
});

exports.quiz = quiz;