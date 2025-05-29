import { Link } from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <Link className="active" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link to="/manage/users">Users</Link>
        </li>
        <li>
          <Link to="/todo">Todo App</Link>
        </li>
      </ul>
    </>
  );
};

export default Header;
