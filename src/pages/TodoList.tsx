import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { TodoType } from "../types/Types";

type TodoProps = {
  todoList: TodoType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export function TodoList({ todoList, setTodoList }: TodoProps) {
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

  return (
    <div className="Todo_List_Container">
      {todoList.map((el) => {
        const { id, title } = el;
        return (
          <li key={id}>
            <Link to={id} className="Todo_List">
              {title}
            </Link>
          </li>
        );
      })}
    </div>
  );
}
