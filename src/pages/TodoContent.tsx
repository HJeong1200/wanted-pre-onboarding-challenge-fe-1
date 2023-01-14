import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import requestHeaders from "../constants/Header";
import { TODOSURL } from "../constants/URL";
import useGetTodo from "../hooks/useGetTodo";

export function TodoContent() {
  const params = useParams();
  const navigate = useNavigate();
  const curTodo = useGetTodo(params.id);
  const { title, content, createdAt, updatedAt } = curTodo;
  const [isEditMode, setIsEditMode] = useState(false);
  const [editedTitle, setEditedTitle] = useState(title);
  const [editedContent, setEditedContent] = useState(content);
  const CONTENTURL = `${TODOSURL}/${params.id}`;

  const deleteTodo = () => {
    fetch(CONTENTURL, {
      method: "DELETE",
      headers: requestHeaders,
    }).then(() => {
      navigate("/");
      window.location.reload();
    });
  };

  const editTodo = () => {
    setIsEditMode((isEditMode) => !isEditMode);
    setEditedTitle(title);
    setEditedContent(content);
  };

  const editTodoTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedTitle(e.target.value);
  };

  const editTodoContent = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setEditedContent(e.target.value);
  };

  const sendEditedTodo = () => {
    const body = {
      title: editedTitle,
      content: editedContent,
    };

    fetch(CONTENTURL, {
      method: "PUT",
      headers: requestHeaders,
      body: JSON.stringify(body),
    })
      .then((res) => res.json())
      .then(() => window.location.reload());
  };

  return (
    <div className="Todo_Content_Container">
      <div className="Todo_Content_Title">
        {isEditMode ? (
          <input onChange={editTodoTitle} defaultValue={title} />
        ) : (
          title
        )}
      </div>
      <div className="Todo_Content_Content">
        {isEditMode ? (
          <textarea onChange={editTodoContent} defaultValue={content} />
        ) : (
          content
        )}
      </div>
      <div className="Todo_Content_Time">{updatedAt || createdAt}</div>
      {isEditMode ? (
        <>
          <button onClick={sendEditedTodo}>수정</button>
          <button onClick={editTodo}>취소</button>
        </>
      ) : (
        <>
          <button onClick={editTodo}>수정</button>
          <button onClick={deleteTodo}>삭제</button>
        </>
      )}
    </div>
  );
}
