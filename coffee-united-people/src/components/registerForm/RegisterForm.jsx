import "./registerForm.css";

const RegisterForm = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="background d-flex flex-column justify-content-center">
            <h1 className="mb-5">Registering Form</h1>
            <form>
              <input
                type="text"
                className="form-control"
                required
                placeholder="Nickname"
              />
              <input
                type="email"
                className="form-control"
                required
                placeholder="Email"
              />
              <input
                type="password"
                className="form-control"
                required
                placeholder="Password"
              />
              <div className="wrapperRegister">
                <p>
                  I agree to the <span>License Terms and Agreement</span>
                </p>
                <input type="checkbox" />
              </div>
              <button type="button" className="btnRegister">
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
