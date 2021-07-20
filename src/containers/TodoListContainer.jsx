import React, { useState, useEffect } from "react";
import {
  createTodo,
  deleteTodo,
  editTodo,
  getTodoList,
  toggleTodo,
} from "../api/todos";
import TodoList from "../components/TodoList";
const TodoListContainer = (props) => {
  const [todoList, setTodoList] = useState([]);
  const getTodoFunc = () => {
    getTodoList().then((response) => {
      setTodoList(response.data);
    });
  }; //todolist 불러오는 코드 자주 쓰이니 아예 따로함수로 빼서 만들어줌

  useEffect(() => {
    getTodoFunc();
  }, []); //마운트 시 todoList 불러옴

  const onCreate = (content) => {
    createTodo(content).then(() => getTodoFunc());
  };
  const onDelete = (id) => {
    deleteTodo(id).then(() => getTodoFunc());
  };
  const onToggle = (id) => {
    toggleTodo(id).then(() => getTodoFunc());
  };
  const onEdit = ({ id, content }) => {
    editTodo({ id, content }).then(() => {
      getTodoFunc();
    });
  };
  const onLogout = (myhistory) => {
    myhistory.push("/");
  };

  if (!todoList) {
    return <div>로딩중 ...</div>;
  }

  return (
    <TodoList
      todoList={todoList}
      onCreate={onCreate}
      onDelete={onDelete}
      onToggle={onToggle}
      onEdit={onEdit}
      onLogout={onLogout}
    />
  );
};
export default TodoListContainer;
