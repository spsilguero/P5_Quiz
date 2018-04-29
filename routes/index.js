var express = require('express');
var router = express.Router();

//Importar el modelo
var models = require("../models");
var Sequelize = require('sequelize');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Index' });
});

// Creditos
router.get('/credits', function (req, res, next) {
    res.render('credits', { title: 'Créditos' });
});

// Quizzes
router.get('/quizzes', function (req, res, next) {
    
    models.quiz.findAll()
    .then(quizzes => {
    	res.render('credits', {quizzes, title: 'Lista de Quizzes'});
    })
    .catch(error => next(error));
});

module.exports = router;