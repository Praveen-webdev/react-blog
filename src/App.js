import "./styles.css";
import Header from "./components/Header.jsx";
import CreatePost from "./components/Header.jsx";
import Post from "./components/Header.jsx";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/" exact>
            <Post />
          </Route>
          <Route path="/createpost">
            <CreatePost />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
