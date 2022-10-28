const skills = ['HTML','CSS','Javascript']
  
  module.exports = {
    getAll,
    getOne,
    create
  };
  
  function getAll() {
    return skills;
  }
 
  function getOne(id) {
    id = parseInt(id)
    return skills.find((skills) => skills.id === id)
  }

  function create(newSkills) {
    skills.push(newSkills)
    console.log(skills)
  }