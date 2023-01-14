import React, { useState } from "react";
import { TodoList } from "./TodoList";
import { TodoType } from "../types/Types";
import { Outlet } from "react-router";
import requestHeaders from "../constants/Header";

export function Main() {
  const [todoList, setTodoList] = React.useState<TodoType[] | []>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");

  const inputNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodoTitle = e.target.value;
    setNewTodoTitle(newTodoTitle);
  };

  const inputNewTodoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodoContent = e.target.value;
    setNewTodoContent(newTodoContent);
  };

  const submitNewTodo = () => {
    const body = {
      title: newTodoTitle,
      content: newTodoContent,
    };

    fetch("http://localhost:8080/todos", {
      method: "POST",
      headers: requestHeaders,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setTodoList([...todoList, data]);
      });
  };

  return (
    <div className="Todo_Container">
      <TodoList todoList={todoList} setTodoList={setTodoList} />
      <form
        action="submit"
        onSubmit={(e) => e.preventDefault()}
        className="Todo_Form_Container"
      >
        <input
          type="text"
          className="Todo_Title_Input"
          onChange={inputNewTodoTitle}
        />
        <textarea
          className="Todo_Content_Input"
          onChange={inputNewTodoContent}
        ></textarea>
        <input type="submit" value="Submit" onClick={submitNewTodo} />
      </form>
      <Outlet context={todoList} />
    </div>
  );
}
