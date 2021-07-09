import { BrowserRouter, Route } from "react-router-dom";
import Login from "./components/Login";
import TodoList from "./components/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}></Route>
      {/* <Route path="/signup" component={Signup}></Route> */}
      <Route path="/todolist" component={TodoList}></Route>
    </BrowserRouter>
  );
}

export default App;
