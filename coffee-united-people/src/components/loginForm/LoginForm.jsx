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
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="background d-flex flex-column justify-content-center">
            <h1 className="mb-5">Signing In Form</h1>
            <form>
              <img src={coffee} alt="Coffee GIF" width="64" height="64" />
              <input
                className="form-control"
                required
                onChange={handleLoginInput}
                type="email"
                name="email"
                placeholder="Email"
              />
              <input
                className="form-control"
                required
                onChange={handleLoginInput}
                type="password"
                name="password"
                placeholder="Password"
              />
              <button
                onClick={handleSubmit}
                type="button"
                className="btnRegister"
              >
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
