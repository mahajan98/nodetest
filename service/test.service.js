const db = require('../config/db.config')

const employee = db.employee


const addHandler = async (req) => {

const {
  id,
  first_name,
  last_name,
  department,
  Address,
  dob,
  salary
  } = req.body
  
  if(id){
    await employee.update({
    first_name,
    last_name,
    department,
    Address,
    dob,
    salary
    },{ where:{
      id:id
    } })
  
  
    return {
        response: " updated successfully"
      }
     
  }
  else{
    await employee.create({
      id,
    first_name,
    last_name,
    department,
    Address,
    dob,
    salary
    })

  }


  return {
      response: " added successfully"
    }
  
  

};

const deleteHandler = async (req) => {

  const {
    id
    } = req.params
    
    await employee.destroy( {
      where:{
        id:id  
      }
    })
  
  
    return {
        response: " deleted successfully"
      }
    
    
  
  };
  
const getHandler = async (req) => {
  try {
    const { id } = req.params
    const resp = await employee.findOne({
      where:{
        id : id
      }
    })
    return {
      response: resp
    }   
  } catch (error) {
    return {
      error: true
    }   
  }
 
};

const salarySortHandler = async (req) => {
  try {
    const { salaryArray } = req.body


    
    salaryArray.sort((a, b) => a.salary - b.salary)
   
    return {
      response: salaryArray
    }   
  } catch (error) {
    return {
      error: true
    }   
  }
 
};





module.exports = {
  addHandler,
  getHandler,
  salarySortHandler,
  deleteHandler
}