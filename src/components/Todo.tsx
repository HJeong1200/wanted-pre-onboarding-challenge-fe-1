import { TodoType } from "../types/Types";

export function Todo({ id, title, updatedAt, createdAt, content }: TodoType) {
  return (
    <li className="Todo_Container" key={id}>
      <div className="Todo_Title">{title}</div>
      <div className="Todo_Info">{(updatedAt || createdAt).slice(0, 10)}</div>
      <div className="Todo_Content">{content}</div>
    </li>
  );
}
