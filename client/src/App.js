import "./App.css";
import Topbar from "./Components/Topbar/Topbar";
import WritePage from "./Pages/WritePage";
import "draft-js/dist/Draft.css";

//for testing
import Posts from "./Components/Posts/Posts";
import HomePage from "./Pages/HomePage";
function App() {
  return (
    <div className="App">
      <Topbar />
      {/* <HomePage /> */}
      <WritePage />
    </div>
  );
}

export default App;
