 // controllers/skills.js

 // Should name the model in uppercase and singular
 const Skill = require('../models/skill');

 module.exports = {
   index,
   show,
   new: newSkills,
   create
 };

  
  function index(req, res) {
    res.render('skills/index', {
      skills: Skill.getAll()
    });

  }
 
  function show(req, res) {
    res.render('skills/show', {
      todo: Todo.getOne(req.params.id),
    });
  }

  function newSkills(req, res) {
    res.render('skills/new')
  }
  
  function create(req, res) {
    console.log(req.body);
    // skills.create(req.body)
    res.redirect('/skills')
  } 