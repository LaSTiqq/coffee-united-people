// import { useEffect, useContext } from "react";
// import { LoggedInContext } from "../../utils/LoggedInContext";
// import { useNavigate } from "react-router-dom";
import user from "../../asssets/user.png";
import "./dashboard.css";

const Dashboard = () => {
  // let navigate = useNavigate();
  // const LoginContext = useContext(LoggedInContext);
  // useEffect(() => {
  //   if (!LoginContext.isLoggedIn) {
  //     navigate("/login");
  //   }
  // });
  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-md-12">
          <div className="dashboardBackground">
            <div className="meme">
              <div className="user">
                <img src={user} alt="Default avatar" />
                <p>Nickname 1</p>
              </div>
            </div>
            <div className="meme">
              <div className="user">
                <img src={user} alt="Default avatar" />
                <p>Nickname 2</p>
              </div>
            </div>
            <div className="meme">
              <div className="user">
                <img src={user} alt="Default avatar" />
                <p>Nickname 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
