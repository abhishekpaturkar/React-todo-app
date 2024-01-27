// Todo.js

import React from "react";

export default function Todo(props) {
  const { todo, setTodos } = props;

  const updateTodo = async (todoId, todoStatus) => {
    const res = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: "PUT",
      body: JSON.stringify({ status: todoStatus }),
      headers: {
        "Content-Type": "application/json",
      },
    });

    const json = await res.json();
    if (json._id) {
      setTodos((currentTodos) => {
        return currentTodos.map((currentTodo) => {
          if (currentTodo._id === todoId) {
            return { ...currentTodo, status: !currentTodo.status };
          }
          return currentTodo;
        });
      });
    } else {
      console.error("Failed to update todo:", json.msg);
    }
  };

  const deleteTodo = async (todoId) => {
    const res = await fetch(`http://localhost:3000/api/todos/${todoId}`, {
      method: "DELETE",
    });
    const json = await res.json();
    if (json._id) {
      setTodos((currentTodos) => {
        return currentTodos.filter((currentTodo) => currentTodo._id !== todoId);
      });
    } else {
      console.error("Failed to delete todo:", json.msg);
    }
  };

  return (
    <div className="todo">
      <p>{todo.todo}</p>
      <div className="mutations">
        <button
          className="todo__status"
          onClick={() => updateTodo(todo._id, todo.status)}
        >
          {todo.status ? "☑" : "☐"}
        </button>
        <button
          className="todo__delete"
          onClick={() => deleteTodo(todo._id)}
        >
          🗑️
        </button>
      </div>
    </div>
  );
}
