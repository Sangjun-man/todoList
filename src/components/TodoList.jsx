import React, { useState, useRef } from "react";
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

const TodoItem = ({ onToggle, onDelete, content, id, checked }) => {
  return (
    <div className={todoItem} key={id}>
      <div
        className={todoCheckBox}
        onClick={() => {
          onToggle(id);
        }}
      >
        {checked && <BsCheck />}
      </div>
      <div
        className={todoContents}
        onClick={() => {
          onToggle(id);
        }}
      >
        {" "}
        {content}
      </div>
      <div
        className={todoDelete}
        onClick={() => {
          onDelete(id);
        }}
      >
        <BsTrash />
      </div>
    </div>
  );
};

const TodoList = (props) => {
  //  const history = useHistory();

  const [todos, setTodos] = useState([]);
  const inputs = useRef();
  const onCreate = (inputs) => {
    setTodos(
      todos.concat({
        id: Date.now(),
        content: inputs.current.value,
        checked: false,
      })
    );
    inputs.current.value = "";
  };
  const onToggle = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, checked: !todo.checked } : todo
      )
    );
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className={container}>
      <div className={todoContainer}>
        <div className={todoList}>
          {todos.map((todo) => (
            <TodoItem
              onToggle={onToggle}
              onDelete={onDelete}
              id={todo.id}
              content={todo.content}
              checked={todo.checked}
            />
          ))}
        </div>
        <div className={todoInput}>
          <input ref={inputs} />
          <button
            onClick={() => {
              onCreate(inputs);
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
