import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { TodoList } from "../types/Types";

export function Main() {
  const [todoList, setTodoList] = useState<TodoList[]>([]);
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoContent, setNewTodoContent] = useState("");
  const navigate = useNavigate();

  const requestHeaders: HeadersInit = new Headers();
  requestHeaders.set(
    "Authorization",
    localStorage.getItem("token") || "no token"
  );

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }

    fetch("http://localhost:8080/todos", {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data.data);
      });
  }, [todoList]);

  const inputNewTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodoTitle = e.target.value;
    setNewTodoTitle(newTodoTitle);
  };

  const inputNewTodoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    const newTodoContent = e.target.value;
    setNewTodoContent(newTodoContent);
  };

  const submitNewTodo = () => {
    requestHeaders.set("Content-Type", "application/json");

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
      .then((data) => {
        setTodoList([...todoList, data.data]);
      });
  };

  return (
    <div className="Todo_Container">
      <ul className="Todo_List_Container"></ul>
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
    </div>
  );
}
