import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/PetHomePage">PetHomePage</Link>
          </li>
          <li>
            <Link to="/MypetForm">MypetForm</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;