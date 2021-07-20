import { BrowserRouter, Route } from "react-router-dom";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import TodoListPage from "./pages/TodoList";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={LoginPage}></Route>
      <Route path="/signup" component={SignupPage}></Route>
      <Route path="/todolist" component={TodoListPage}></Route>
    </BrowserRouter>
  );
}

export default App;
