import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [user, setUser] = React.useState({});
  let details = JSON.parse(localStorage.getItem("userDetails")) || [];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    details.push(user);
    localStorage.setItem("userDetails", JSON.stringify(details));
    navigate("/login");
  };
  return (
    <form
      style={{
        width: "70%",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        placeholder="Enter Your Name"
        name="name"
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <input
        required
        type="email"
        placeholder="Enter Your Email"
        name="email"
        onChange={handleChange}
      />
      <br />
      <br />
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        onChange={handleChange}
        required
      />
      <br />
      <br />
      <input type="submit" value="Signup" />
      Or
      <Link to="/login">
        <button>Click here to Login</button>
      </Link>
    </form>
  );
};

export default Signup;
