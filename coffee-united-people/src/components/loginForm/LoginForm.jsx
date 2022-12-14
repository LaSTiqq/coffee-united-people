import { useState, useContext } from "react";
import { LoggedInContext } from "../../utils/LoggedInContext";
import { useNavigate } from "react-router-dom";
import coffee from "../../asssets/coffee.gif";
import axios from "axios";
import "./loginForm.css";

const LoginForm = () => {
  let navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const handleLoginInput = (e) => {
    setLoginData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/login",
        loginData
      );
      if (request) {
        LoginContext.setLoggedInStatus(true);
        alert("Login success, press OK to continue");
        navigate("/dashboard");
      }
    } catch (error) {
      alert("Wrong email or password, press OK to try again");
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
  };

  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-md-12">
          <div className="background d-flex flex-column justify-content-center">
            <h1 className="text-center mt-2 mb-4">Signing In Form</h1>
            <form onSubmit={handleSubmit}>
              <img src={coffee} alt="Coffee GIF" />
              <input
                className="form-control"
                required
                onChange={handleLoginInput}
                name="email"
                type="email"
                placeholder="Email"
              />
              <input
                className="form-control"
                required
                onChange={handleLoginInput}
                name="password"
                type="password"
                placeholder="Password"
              />
              <button type="submit" className="btnRegister">
                Log In
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
