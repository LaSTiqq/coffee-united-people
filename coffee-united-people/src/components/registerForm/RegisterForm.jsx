import "./registerForm.css";

const RegisterForm = () => {
  return (
    <div className="background">
      <h1>Registering Form</h1>
      <form>
        <input type="text" placeholder="Nickname" />
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <div className="wrapperRegister">
          <p>
            I agree to the <span>License Terms and Agreement</span>
          </p>
          <input type="checkbox" />
        </div>
        <button type="submit" className="btn">
          Register
        </button>
      </form>
    </div>
  );
};

export default RegisterForm;
