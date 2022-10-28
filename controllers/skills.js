 // controllers/skills.js

 // Should name the model in uppercase and singular
 const Skill = require('../models/skill');

 module.exports = {
   index,
   show,
   new: newSkills
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
  