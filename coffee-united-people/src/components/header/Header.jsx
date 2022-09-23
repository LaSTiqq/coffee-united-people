import { Link } from "react-router-dom";
import logo from "../../asssets/logo.png";
import "./header.css";

const Header = ({ button }) => {
  return (
    <header>
      <nav className="navbar fixed-top">
        <div className="container">
          <Link to={`/${button}`} className="navbar-brand">
            <img src={logo} alt="Logo" width="72" height="72" />
          </Link>
          <div className="headerWrapper me-auto mt-3">
            <Link to={`/${button}`}>
              <h1 className="mb-0">CUP</h1>
              <p>Coffee United People</p>
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
