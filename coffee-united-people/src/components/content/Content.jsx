import { Link } from "react-router-dom";
import "./content.css";

const Content = ({ buttonRegister, buttonLogin }) => {
  return (
    <div className="container-fluid g-0">
      <div className="row g-0">
        <div className="col-12">
          <div className="content">
            <h1>The CUP Social Media App</h1>
            <h2>For those who are addicted or just love coffee</h2>
            <h4>Search for friends, chat, post memes and more</h4>
            <Link to={`/${buttonRegister}`}>
              <button className="btn">Register!</button>
            </Link>
            <p>
              Already have an account?&nbsp;
              <Link to={`/${buttonLogin}`}>
                <span>Sign in</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Content;
