import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export function Main() {
  const [todoList, setTodoList] = useState([]);
  const [newTodo, setNewTodo] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("token")) {
      navigate("/auth/login");
    }
  }, []);

  const inputNewTodo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newTodo = e.target.value;
    setNewTodo(newTodo);
  };

  const submitNewTodo = () => {
    console.log(newTodo);
  };

  return (
    <div className="Todo_Container">
      <ul className="Todo_List_Container"></ul>
      <input type="text" className="Todo_Input" onChange={inputNewTodo} />
      <button className="New_Todo_Submit" onClick={submitNewTodo}>
        Submit
      </button>
    </div>
  );
}
