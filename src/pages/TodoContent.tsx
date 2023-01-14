import React from "react";
import { useNavigate, useOutletContext, useParams } from "react-router";
import { TodoType } from "../types/Types";
import requestHeaders from "../constants/Header";

export function TodoContent() {
  const params = useParams();
  const todoList: TodoType[] = useOutletContext();
  const curTodo = todoList.filter((el) => el.id === params.id);
  const { id, title, content, updatedAt, createdAt } = curTodo[0];
  const navigate = useNavigate();

  const deleteTodo = () => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: requestHeaders,
    }).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="Todo_Content_Container">
      <div className="Todo_Content_Title">{title}</div>
      <div className="Todo_Content_Content">{content}</div>
      <div className="Todo_Content_Time">{updatedAt || createdAt}</div>
      <button>수정</button>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
}
