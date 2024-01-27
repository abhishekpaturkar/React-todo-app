const express = require("express")
const router = express.Router();
const {connectionDB, Todo} = require("./db")


// GET/todos
router.get("/todos", async (req, res) => {
    const todos = await Todo.find();
    res.status(200).json(todos)
})

// POST /todos
router.post("/todos", async (req, res) => {
    let {todo} = req.body;
    
    if(!todo) {
        res.status(400).json({msg : "error no to found"})
    }

    todo = (typeof todo === "string") ? todo : JSON.stringify(todo);

    const newTodo = await Todo.create({todo});
    res.status(201).json({ todo, status : newTodo.status, id : newTodo._id})
})


// DELETE /todos/:id
router.delete("/todos/:id", async (req, res) => {
    const id = req.params.id;
  
    const deleteTodo = await Todo.findByIdAndDelete(id);
    if (!deleteTodo) {
      res.status(404).json({ msg: "Todo not found" });
      return;
    }
    res.status(200).json(deleteTodo);
  });
  


// PUT /todos/:id
router.put("/todos/:id", async (req, res) => {
    const id = req.params.id;
    const { status } = req.body;
  
    if (typeof status !== "boolean") {
      return res.status(400).json({
        msg: "Invalid status",
      });
    }
  
    const updatedTodo = await Todo.findByIdAndUpdate(id, { status: !status }, { new: true });
    if (!updatedTodo) {
      res.status(404).json({ msg: "Todo not found" });
      return;
    }
    res.status(200).json(updatedTodo);
  });
  
  

module.exports = router;