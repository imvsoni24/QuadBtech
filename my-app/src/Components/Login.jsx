import React from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [user, setUser] = React.useState({});
  let details = JSON.parse(localStorage.getItem("userDetails")) || [];
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let found = false;
    for (let i = 0; i < details.length; i++) {
      if (
        user.email === details[i].email &&
        user.password === details[i].password
      ) {
        found = true;
        break;
      }
    }
    if (found) {
      alert("Succesfully Login");
      navigate("/show");
      localStorage.setItem("loginDetails", JSON.stringify(user));
    } else {
      alert("User Credentials are wrong");
    }
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
      <input type="submit" value="Login" />
    </form>
  );
};

export default Login;
