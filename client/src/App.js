import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import WritePage from "./Pages/WritePage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import BlogPageFull from "./Pages/BlogPageFull";

//for testing
import Posts from "./Components/Posts/Posts";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <HomePage /> */}
      {/* <WritePage /> */}
      {/* <Login /> */}
      <Signup />
      {/* <BlogPageFull /> */}
    </div>
  );
}

export default App;
