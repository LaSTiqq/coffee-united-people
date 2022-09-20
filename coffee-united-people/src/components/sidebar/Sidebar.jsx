import { Link } from "react-router-dom";
import dashboard from "../../asssets/dashboard.png";
import friends from "../../asssets/friends.png";
import messages from "../../asssets/messages.png";
import "./sidebar.css";

const Sidebar = ({ buttonDashboard, buttonFriends, buttonChat }) => {
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
          <Link to={`/${buttonFriends}`}>
            <img src={friends} alt="Friends" width="28" height="26" />
            <li>Friends</li>
          </Link>
        </span>
        <span className="rectangle">
          <Link to={`/${buttonChat}`}>
            <img src={messages} alt="Messages" width="28" height="26" />
            <li>Chat</li>
          </Link>
        </span>
      </ul>
      <hr />
      <p className="logout">Log Out</p>
      <div className="flex">
        <p>Blog</p>
        <p>Developer?</p>
      </div>
    </div>
  );
};

export default Sidebar;
