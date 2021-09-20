import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import WritePage from "./Pages/WritePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BlogPageFull from "./Pages/BlogPageFull";

//React router
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

//For testing, remember to delete!!!!!!!!
import Posts from "./Components/Posts/Posts";
import HomePage from "./Pages/HomePage";

//Context
import { isLoginContext } from "./Context/LoginContext";

function App() {
  return (
    <Router>
      <div className="App">
        <Topbar />
        {/* <HomePage /> */}
        {/* <WritePage /> */}
        {/* <BlogPageFull /> */}
        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>

          <Route path="/signin">
            <Login />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/write">
            <WritePage />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
