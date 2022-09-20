import { Link } from "react-router-dom";
import logo from "../../asssets/logo.png";
import "./header.css";

const Header = ({ button }) => {
  return (
    <header>
      <Link to={`/${button}`}>
        <img src={logo} alt="Logo" width="64" height="64" />
      </Link>
      <div className="wrapper">
        <Link to={`/${button}`}>
          <h1>CUP</h1>
          <p>Coffee United People</p>
        </Link>
      </div>
    </header>
  );
};

export default Header;
