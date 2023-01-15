import React, { useEffect } from "react";
import requestHeaders from "../constants/Header";
import { TODOSURL } from "../constants/URL";
import { TodoType } from "../types/Types";

const useGetTodos = () => {
  const [todoList, setTodoList] = React.useState<TodoType[]>([]);

  useEffect(() => {
    fetch(TODOSURL, {
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
