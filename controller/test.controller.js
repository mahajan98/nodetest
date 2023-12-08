const {
  addHandler,
  getHandler,
  deleteHandler,
  salarySortHandler
} = require('../service/test.service');

const add = async (req, res) => {
  try {

    const result = await addHandler(req, res);
    console.log(" result", result);
    res.send(result)
  } catch (error) {
    console.log("error", error);
  }
};


const get = async (req, res) => {
  try {

    const result = await getHandler(req, res);
    res.send(result)


  } catch (error) {

    res.send(error)
  }
};

const getSortSalary = async (req, res) => {
  try {

    const result = await salarySortHandler(req, res);
    res.send(result)


  } catch (error) {

    res.send(error)
  }
};

const deleted = async (req, res) => {
  try {
    const result = await deleteHandler(req, res);
    res.send(result)
  
  } catch (error) {
    console.log("error", error);
    res.send(error)
  }
};




module.exports = {
  add,
get,
  deleted,
  getSortSalary
};
