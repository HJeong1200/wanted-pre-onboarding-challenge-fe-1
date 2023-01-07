import { TodoType } from "../types/Types";

export function Todo({ id, title, updatedAt, createdAt, content }: TodoType) {
  const deleteTodo = () => {
    const requestHeaders: HeadersInit = new Headers();
    requestHeaders.set(
      "Authorization",
      localStorage.getItem("token") || "no token"
    );
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "DELETE",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then((data) => console.log(data));
  };

  return (
    <li className="Todo_Container">
      <div className="Todo_Title">{title}</div>
      <div className="Todo_Info">{(updatedAt || createdAt).slice(0, 10)}</div>
      <div className="Todo_Content">{content}</div>
      <button className="Delete_Todo" onClick={deleteTodo}>
        삭제
      </button>
      <button className="Update_Todo">편집</button>
    </li>
  );
}
