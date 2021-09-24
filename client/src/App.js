import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import WritePage from "./Pages/WritePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BlogPageFull from "./Pages/BlogPageFull";

//React router
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";

//For testing, remember to delete!!!!!!!!
import Posts from "./Components/Posts/Posts";
import HomePage from "./Pages/HomePage";

//Context
import authContext from "./Context/AuthContext";
import { useState } from "react";

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  return (
    <authContext.Provider value={{ isAuthenticated, setAuthenticated }}>
      <Router>
        <div className="App">
          <Topbar />

          <Switch>
            <Route path="/home">
              <HomePage />
            </Route>

            <Route path="/signin">
              {isAuthenticated ? <Redirect to="/home" /> : <Login />}
            </Route>

            <Route path="/signup">
              <Signup />
            </Route>

            <Route path="/write">
              {isAuthenticated ? <WritePage /> : <Redirect to="/signin" />}
            </Route>
          </Switch>
        </div>
      </Router>
    </authContext.Provider>
  );
}

export default App;
