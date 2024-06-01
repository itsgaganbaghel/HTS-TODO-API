const express = require("express");
const router = express.Router();

// import controller
const { createTodo } = require("../controller/CreateTodo");
const { getTodo } = require("../controller/GetTodo");
const { updateTodo } = require("../controller/UpdateTodo");
const { getOneById } = require("../controller/GetOneById");
const { deleteTodo } = require("../controller/DeleteTodo");

// define api routes
//* path , controller - map path to controller

router.post("/createTodo", createTodo);
router.get("/getTodo", getTodo);
router.get("/getTodo/:id", getOneById);
router.patch("/updateTodo/:id", updateTodo);
router.delete("/deleteTodo/:id", deleteTodo);

module.exports = router;
