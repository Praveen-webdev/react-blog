import { Nav } from "react-bootstrap";
import { useHistory } from "react-router-dom";

const Header = () => {
  const history = useHistory();
  return (
    <Nav variant="tabs" defaultActiveKey="/">
      <Nav.Item onClick={() => history.push("/")}>
        <Nav.Link eventKey="/">Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item onClick={() => history.push("/createpost")}>
        <Nav.Link eventKey="link-1">Create post</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Header;