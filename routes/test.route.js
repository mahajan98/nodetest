"use strict";
const express = require("express");
const router = express.Router();
const testController = require("../controller/test.controller");


router.post("/addAndEdit",
   testController.add
);

router.get("/get/:id",
testController.get
);

router.post("/get/sortBySalary",
testController.getSortSalary
);

router.delete("/delete/:id",
testController.deleted
);

module.exports = router;


