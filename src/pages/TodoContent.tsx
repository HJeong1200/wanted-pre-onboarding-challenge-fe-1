import { useNavigate, useParams } from "react-router";
import requestHeaders from "../constants/Header";
import useGetTodo from "../hooks/useGetTodo";

export function TodoContent() {
  const params = useParams();
  const navigate = useNavigate();
  console.log(params.id);
  const curTodo = useGetTodo(params.id);
  console.log(curTodo);
  const deleteTodo = () => {
    fetch(`http://localhost:8080/todos/${params.id}`, {
      method: "DELETE",
      headers: requestHeaders,
    }).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  return (
    <div className="Todo_Content_Container">
      <div className="Todo_Content_Title">{curTodo.title}</div>
      <div className="Todo_Content_Content">{curTodo.content}</div>
      <div className="Todo_Content_Time">
        {curTodo.updatedAt || curTodo.createdAt}
      </div>
      <button>수정</button>
      <button onClick={deleteTodo}>삭제</button>
    </div>
  );
}
