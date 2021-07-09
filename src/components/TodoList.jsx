import React from "react";
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

const TodoItem = (props) => {
  return (
    <div className={todoItem}>
      <div className={todoCheckBox}>
        <BsCheck />
      </div>
      <div className={todoContents}> 투두내용</div>
      <div className={todoDelete}>
        <BsTrash />
      </div>
    </div>
  );
};

const TodoList = (props) => (
  <div className={container}>
    <div className={todoContainer}>
      <div className={todoList}>
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </div>
      <div className={todoInput}>
        <input />
        <button>추가하기</button>
      </div>
    </div>
  </div>
);

export default TodoList;
