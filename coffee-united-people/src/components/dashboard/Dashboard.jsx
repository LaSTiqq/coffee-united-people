// import { useEffect, useContext } from "react";
// import { LoggedInContext } from "../../utils/LoggedInContext";
// import { useNavigate } from "react-router-dom";
import userLogo from "../../asssets/user.png";
import like from "../../asssets/like.png";
import meme1 from "../../asssets/meme1.jpg";
import meme2 from "../../asssets/meme2.jpg";
import meme3 from "../../asssets/meme3.jpg";
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
                <img src={userLogo} alt="Default avatar" />
                <p className="mb-0 ms-3">
                  <span className="fw-bold">Nickname 1</span> posted:
                </p>
              </div>
              <img
                src={meme1}
                alt="meme"
                className="d-block mx-auto mt-3 meme-img"
              />
              <div className="meme-footer d-flex justify-content-between align-items-center mt-1">
                <img
                  src={like}
                  alt="Like icon"
                  title="Like"
                  className="ms-3 mt-1"
                />
                <p className="mb-0 me-3">Add a comment...</p>
              </div>
            </div>
            <div className="meme">
              <div className="user">
                <img src={userLogo} alt="Default avatar" />
                <p className="mb-0 ms-3">
                  <span className="fw-bold">Nickname 2</span> posted:
                </p>
              </div>
              <img
                src={meme2}
                alt="meme"
                className="d-block mx-auto mt-3 meme-img"
              />
              <div className="meme-footer d-flex justify-content-between align-items-center mt-1">
                <img
                  src={like}
                  alt="Like icon"
                  title="Like"
                  className="ms-3 mt-1"
                />
                <p className="mb-0 me-3">Add a comment...</p>
              </div>
            </div>
            <div className="meme">
              <div className="user">
                <img src={userLogo} alt="Default avatar" />
                <p className="mb-0 ms-3">
                  <span className="fw-bold">Nickname 3</span> posted:
                </p>
              </div>
              <img
                src={meme3}
                alt="meme"
                className="d-block mx-auto mt-3 meme-img"
              />
              <div className="meme-footer d-flex justify-content-between align-items-center mt-1">
                <img
                  src={like}
                  alt="Like icon"
                  title="Like"
                  className="ms-3 mt-1"
                />
                <p className="mb-0 me-3">Add a comment...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
