import React, { useEffect } from "react";
import requestHeaders from "../constants/Header";
import { TodoType } from "../types/Types";

const useGetTodos = () => {
  const [todoList, setTodoList] = React.useState<TodoType[] | []>([]);

  useEffect(() => {
    fetch("http://localhost:8080/todos", {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setTodoList(data);
      });
  }, []);

  return { todoList, setTodoList };
};

export default useGetTodos;
