const { Router } = require("express");

const router = Router();

const {
  getToDo,
  savetToDo,
  deleteToDo,
  UpdateToDo,
  testData,
} = require("../controller/TodoController");

router.get("/", getToDo);
router.post("/save-todo", savetToDo);
router.post("/delete-todo", deleteToDo);
router.post("/update-todo", UpdateToDo);
router.get("/test-Data", testData);

module.exports = router;
