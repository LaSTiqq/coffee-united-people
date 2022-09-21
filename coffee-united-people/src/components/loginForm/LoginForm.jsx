import { useState, useContext } from "react";
import { loggedInContext } from "../../utils/loggedInContext";
import { useNavigate } from "react-router-dom";
import coffee from "../../asssets/coffee.gif";
import axios from "axios";
import "./loginForm.css";

const LoginForm = ({ dashboard }) => {
  let navigate = useNavigate();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const loginContext = useContext(loggedInContext);
  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async () => {
    try {
      const request = await axios.post(
        "http://localhost:3001/login/",
        loginData
      );
      if (request) {
        loginContext.setLoggedInStatus(true);
        navigate(`/${dashboard}`);
      }
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
        <button onClick={handleSubmit} type="button" className="btn">
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;
