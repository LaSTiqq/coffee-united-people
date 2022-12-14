import { Link, useNavigate } from "react-router-dom";
import { LoggedInContext } from "../../utils/LoggedInContext.jsx";
import { useContext } from "react";
import dashboard from "../../asssets/dashboard.png";
import people from "../../asssets/people.png";
import chat from "../../asssets/chat.png";
import "./sidebar.css";

const Sidebar = ({ buttonDashboard, buttonPeople, buttonChat }) => {
  const navigate = useNavigate();
  const Logout = useContext(LoggedInContext);
  const handleClick = () => {
    Logout.setLoggedInStatus(false);
    navigate("/");
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-2">
          <div className="sidebar">
            <ul>
              <span className="rectangle">
                <Link to={`/${buttonDashboard}`}>
                  <img src={dashboard} alt="Dashboard" />
                  <li>Dashboard</li>
                </Link>
              </span>
              <span className="rectangle">
                <Link to={`/${buttonPeople}`}>
                  <img src={people} alt="Friends" />
                  <li>People</li>
                </Link>
              </span>
              <span className="rectangle">
                <Link to={`/${buttonChat}`}>
                  <img src={chat} alt="Chat" />
                  <li>Chat</li>
                </Link>
              </span>
            </ul>
            <hr />
            <p className="logout mb-0" onClick={handleClick}>
              Log Out
            </p>
            <div className="helpers mt-1">
              <p className="me-3">Blog</p>
              <p className="ms-3">Developer?</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
