import { Link } from "react-router-dom";
import "./content.css";

const Content = ({ buttonRegister, buttonLogin }) => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12 content">
          <h1 className="text-center">The CUP Social Media App</h1>
          <h2 className="text-center">
            For those who are addicted or just love coffee
          </h2>
          <h4 className="text-center">
            Search for friends, chat, post memes and more
          </h4>
          <Link to={`/${buttonRegister}`}>
            <button className="btnRegister d-block mx-auto">Register!</button>
          </Link>
          <p className="text-center">
            Already have an account?&nbsp;
            <Link to={`/${buttonLogin}`}>
              <span>Sign in</span>
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Content;
