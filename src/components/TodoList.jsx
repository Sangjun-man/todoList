import React, { useRef, useState } from "react";
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

const TodoItem = ({ todo, onDelete, onToggle, onEdit, onChange }) => {
  const [newContent, setNewContent] = useState(todo.content);

  const onNewContentChange = (e) => {
    setNewContent(e.target.value);
  };

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

      {todo.edit === false ? (
        <>
          <div className={todoContents}>{todo.content}</div>
          <div
            className={todoEditIcon}
            onClick={() => {
              onEdit(todo.id);
            }}
          >
            <BsPencilSquare />
          </div>
        </>
      ) : (
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
              onChange(todo.id, newContent);
            }}
          >
            <BsPencil />
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

const TodoList = (props) => {
  const history = useHistory();
  const [todos, setTodos] = useState([
    {
      id: 1,
      content: "테스트1",
      checked: false,
      edit: false,
    },
    {
      id: 2,
      content: "테스트2",
      checked: false,
      edit: false,
    },
    {
      id: 3,
      content: "테스트33333",
      checked: true,
      edit: false,
    },
  ]);
  const inputRef = useRef();
  const onCreate = (content) => {
    setTodos(
      todos.concat({
        id: Date.now(),
        content: content,
        checked: false,
        edit: false,
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

  //todo 수정 -> 조건부 랜더링
  //랜더링할때 edit상태인지 아닌지 판별해서 랜더링
  //edit 속성 false면 그냉 div태그
  //edit 속성 ture 면 input 태그
  const onEdit = (id) => {
    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, edit: true } : todo))
    );
  };
  const onChange = (id, content) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, edit: false, content: content } : todo
      )
    );
  };

  const onLogout = () => {
    history.push("./");
  };

  return (
    <div className={container}>
      <div
        className={menuBar}
        onClick={() => {
          onLogout();
        }}
      >
        <BsBoxArrowInRight className={logOut} />
      </div>
      <div className={todoContainer}>
        <div className={todoList}>
          {todos.map((todo) => (
            <TodoItem
              todo={todo}
              onDelete={onDelete}
              onToggle={onToggle}
              onEdit={onEdit}
              onChange={onChange}
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
