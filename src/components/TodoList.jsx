import React, { useEffect, useRef, useState } from "react";
import styles from "./TodoList.module.css";
import {
  BsTrash,
  BsCheck,
  BsBoxArrowInRight,
  BsPencilSquare,
  BsPencil,
} from "react-icons/bs";
import { useHistory } from "react-router";

const {
  container,
  todoList,
  todoContainer,
  todoInput,
  todoItem,
  todoContents,
  todoDelete,
  todoCheckBox,
  todoEditIcon,
  todoEditInput,
  menuBar,
  logOut,
} = styles;

const TodoItem = ({ todo, onDelete, onToggle, onEdit, getTodoFunc }) => {
  const [newContent, setNewContent] = useState(todo.content);
  const onNewContentChange = (e) => {
    setNewContent(e.target.value);
  }; //todo Item마다 input의 value 상태유지
  const [inEdit, setInEdit] = useState(false);
  const handleOnEdit = ({ id, content }) => {
    onEdit({ id, content });
    setInEdit(false);
  };

  return (
    <div className={todoItem}>
      <div
        className={todoCheckBox}
        onClick={() => {
          onToggle(todo.id);
        }}
      >
        {todo.isCompleted && <BsCheck />}
      </div>
      {/* 편집 상태인지 아닌지 확인 */}
      {inEdit ? (
        <>
          <input
            onChange={onNewContentChange}
            className={todoEditInput}
            value={newContent}
          />
          <div
            className={todoEditIcon}
            key={todo.id}
            onClick={() => {
              handleOnEdit({ id: todo.id, content: newContent });
            }}
          >
            <BsPencil />
          </div>
        </>
      ) : (
        <>
          <div
            className={todoContents}
            onClick={() => {
              setInEdit(true);
            }}
          >
            {todo.content}
          </div>
          <div
            className={todoEditIcon}
            onClick={() => {
              setInEdit(true);
            }}
          >
            <BsPencilSquare />
          </div>
        </>
      )}
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

const TodoList = ({
  todoList,
  onCreate,
  onDelete,
  onToggle,
  onEdit,
  onLogout,
  onEditModeChange,
}) => {
  const history = useHistory();
  const inputRef = useRef();
  // useEffect(() => {
  //   console.log(todoList[0]);
  //   console.log(todoList.map((todo) => todo.content));
  // }, [todoList]);

  return (
    <div className={container}>
      <div
        className={menuBar}
        onClick={() => {
          onLogout(history);
        }}
      >
        <BsBoxArrowInRight className={logOut} />
      </div>
      <div className={todoContainer}>
        <div className={todoList}>
          {todoList.map((todo) => (
            <TodoItem
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
            />
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
