import React, { useEffect } from "react";
import requestHeaders from "../constants/Header";
import { TodoType } from "../types/Types";

const useGetTodo = (id: any) => {
  const [curTodo, setCurTodo] = React.useState<TodoType>({} as TodoType);
  useEffect(() => {
    fetch(`http://localhost:8080/todos/${id}`, {
      method: "GET",
      headers: requestHeaders,
    })
      .then((res) => res.json())
      .then(({ data }) => {
        setCurTodo(data);
      });
  }, [id]);

  return curTodo;
};

export default useGetTodo;
