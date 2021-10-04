import { Nav } from "react-bootstrap";
const Header = () => {
  return (
    <Nav variant="tabs" defaultActiveKey="/home">
      <Nav.Item>
        <Nav.Link href="/">Posts</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Create post</Nav.Link>
      </Nav.Item>
    </Nav>
  );
};
export default Header;
