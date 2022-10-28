const skills = ['HTML','CSS','Javascript']
  

  module.exports = {
    getAll,
    getOne,
    create,
   deleteOne
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

  function deleteOne(id){
    const idx = todos.findIndex(
      todo => skills.id === parseInt(id)); 
      todos.splice(idx, 1); 
  }