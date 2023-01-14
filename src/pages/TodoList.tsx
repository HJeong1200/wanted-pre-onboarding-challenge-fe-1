import React, { useEffect } from "react";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { TodoType } from "../types/Types";
import requestHeaders from "../constants/Header";
import { TODOSURL } from "../constants/URL";

type TodoProps = {
  todoList: TodoType[];
  setTodoList: React.Dispatch<React.SetStateAction<TodoType[]>>;
};

export function TodoList({ todoList, setTodoList }: TodoProps) {
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }

    fetch(TODOSURL, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => {
        setTodoList(data.data);
      });
  }, []);

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
