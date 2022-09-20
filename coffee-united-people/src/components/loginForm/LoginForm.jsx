import { Link } from "react-router-dom";
import axios from "axios";
import { useState } from "react";
import coffee from "../../asssets/coffee.gif";
import "./loginForm.css";

const LoginForm = ({ dashboard }) => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      await axios.post("http://localhost:3001/login/", loginData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="background">
      <h1>Signing In Form</h1>
      <form>
        <img src={coffee} alt="Coffee GIF" width="64" height="64" />
        <input
          onChange={handleLoginInput}
          type="email"
          name="email"
          placeholder="Email"
        />
        <input
          onChange={handleLoginInput}
          type="password"
          name="password"
          placeholder="Password"
        />
        <Link to={`/${dashboard}`}>
          <button onClick={handleSubmit} type="button" className="btn">
            Log In
          </button>
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
