import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  let user = JSON.parse(localStorage.getItem("loginDetails"));
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("loginDetails");
    navigate("/login");
  };
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <Link to="/" className="navbar-brand fs-1">
          Shows
        </Link>
        <form className="d-flex">
          <button className="btn btn-outline-success" onClick={logout}>
            {user? "Logout" : "Login"}
          </button>
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
