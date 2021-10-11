import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header.jsx";
import CreatePost from "./components/CreatePost.jsx";
import Post from "./components/Post.jsx";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import ScrollRestoration from "react-scroll-restoration";

export default function App() {
  return (
    <BrowserRouter>
      <ScrollRestoration />
      <Header />
      <Switch>
        <Route path="/" exact>
          <Post />
        </Route>
        <Route path="/createpost">
          <CreatePost />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
