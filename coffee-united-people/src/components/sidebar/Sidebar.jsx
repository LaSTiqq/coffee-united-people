import { Link, useNavigate } from "react-router-dom";
import { loggedInContext } from "../../utils/loggedInContext";
import { useContext } from "react";
import dashboard from "../../asssets/dashboard.png";
import people from "../../asssets/people.png";
import chat from "../../asssets/chat.png";
import "./sidebar.css";

const Sidebar = ({ buttonDashboard, buttonPeople, buttonChat }) => {
  const navigate = useNavigate();
  const logout = useContext(loggedInContext);
  const handleClick = () => {
    logout.setLoggedInStatus(false);
    navigate("/");
  };

  return (
    <div className="sidebar">
      <ul>
        <span className="rectangle">
          <Link to={`/${buttonDashboard}`}>
            <img src={dashboard} alt="Dashboard" width="28" height="26" />
            <li>Dashboard</li>
          </Link>
        </span>
        <span className="rectangle">
          <Link to={`/${buttonPeople}`}>
            <img src={people} alt="Friends" width="28" height="26" />
            <li>People</li>
          </Link>
        </span>
        <span className="rectangle">
          <Link to={`/${buttonChat}`}>
            <img src={chat} alt="Chat" width="28" height="26" />
            <li>Chat</li>
          </Link>
        </span>
      </ul>
      <hr />
      <p className="logout" onClick={handleClick}>
        Log Out
      </p>
      <div className="flex">
        <p>Blog</p>
        <p>Developer?</p>
      </div>
    </div>
  );
};

export default Sidebar;
