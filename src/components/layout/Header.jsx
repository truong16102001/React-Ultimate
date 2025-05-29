import "./Header.css";
const Header = () => {
  return (
    <>
      <ul>
        <li>
          <a className="active" href="/">
            Home
          </a>
        </li>
        <li>
          <a href="/manage/users">Users</a>
        </li>
        <li>
          <a href="/todo">Todo App</a>
        </li>
      </ul>
    </>
  );
};

export default Header;
