import { useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import "./registerForm.css";

const RegisterForm = () => {
  let navigate = useNavigate();
  const [registerData, setRegisterData] = useState({
    nickname: "",
    email: "",
    password: "",
  });

  const handleLoginInput = (e) => {
    setRegisterData((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const request = await axios.post(
        "http://localhost:3001/register",
        registerData
      );
      if (request) {
        alert("Register success, sign in now");
        navigate("/login");
      }
    } catch (error) {
      alert(
        "User with that nickname or email already exists, press OK to try again"
      );
      Array.from(document.querySelectorAll("input")).forEach(
        (input) => (input.value = "")
      );
    }
  };
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="background d-flex flex-column justify-content-center">
            <h2 className="mb-5">Registering Form</h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="nickname"
                className="form-control"
                required
                onChange={handleLoginInput}
                placeholder="Nickname"
              />
              <input
                type="email"
                name="email"
                className="form-control"
                required
                onChange={handleLoginInput}
                placeholder="Email"
              />
              <input
                type="password"
                name="password"
                className="form-control"
                required
                onChange={handleLoginInput}
                placeholder="Password"
              />
              <div className="wrapperRegister">
                <p>
                  I agree to the <span>License Terms and Agreement</span>
                </p>
                <input defaultChecked type="checkbox" />
              </div>
              <button type="submit" className="btnRegister">
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;
