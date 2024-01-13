import { Task } from "@/pages/api/types";
import React from "react";
import Todo from "./Todo";

interface todoListProps {
  todos: Task[];
}
const TodoList = ({ todos }: todoListProps) => {
  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <Todo key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;
