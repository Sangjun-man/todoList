import React, { useRef, useState } from "react";
import styles from "./TodoList.module.css";
import { BsTrash, BsCheck } from "react-icons/bs";

const {
  container,
  todoList,
  todoContainer,
  todoInput,
  todoItem,
  todoContents,
  todoDelete,
  todoCheckBox,
} = styles;

const TodoItem = ({ todo, onDelete, onToggle }) => {
  return (
    <div className={todoItem}>
      <div
        className={todoCheckBox}
        onClick={() => {
          onToggle(todo.id);
        }}
      >
        {todo.checked && <BsCheck />}
      </div>
      <div
        className={todoContents}
        onClick={() => {
          onToggle(todo.id);
        }}
      >
        {todo.content}
      </div>
      <div
        className={todoDelete}
        onClick={() => {
          onDelete(todo.id);
        }}
      >
        <BsTrash />
      </div>
    </div>
  );
};

const TodoList = (props) => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "테스트1",
      checked: false,
    },
    {
      id: 2,
      content: "테스트2",
      checked: false,
    },
    {
      id: 3,
      content: "테스트33333",
      checked: true,
    },
  ]);
  const inputRef = useRef();
  const onCreate = (content) => {
    setTodos(
      todos.concat({
        id: Date.now(),
        content: content,
        checked: false,
      })
    );
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };

  return (
    <div className={container}>
      <div className={todoContainer}>
        <div className={todoList}>
          {todos.map((todo) => (
            <TodoItem todo={todo} onDelete={onDelete} onToggle={onToggle} />
          ))}
        </div>
        <div className={todoInput}>
          <input ref={inputRef} />
          <button
            onClick={() => {
              onCreate(inputRef.current.value);
              inputRef.current.value = "";
            }}
          >
            추가하기
          </button>
        </div>
      </div>
    </div>
  );
};
export default TodoList;
