// import { useEffect, useContext } from "react";
// import { loggedInContext } from "../../utils/loggedInContext";
// import { useNavigate } from "react-router-dom";
import user from "../../asssets/user.png";
import "./people.css";

const People = () => {
  // let navigate = useNavigate();
  // const loginContext = useContext(loggedInContext);
  // useEffect(() => {
  //   if (!loginContext.isLoggedIn) {
  //     navigate("/login");
  //   }
  // });
  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-md-12">
          <div className="peopleBackground">
            <h1 className="text-center my-3">People</h1>
            <ul>
              <li>
                <img src={user} alt="Default avatar" className="mt-3 me-4" />
                Nickname 1
                <p className="text-center text-success mt-2 fw-bold">
                  Add as friend
                </p>
              </li>
              <li>
                <img src={user} alt="Default avatar" className="mt-3 me-4" />
                Nickname 2
                <p className="text-center text-success mt-2 fw-bold">
                  Add as friend
                </p>
              </li>
              <li>
                <img src={user} alt="Default avatar" className="mt-3 me-4" />
                Nickname 3
                <p className="text-center text-danger mt-2 fw-bold">
                  Delete from friend list
                </p>
              </li>
              <li>
                <img src={user} alt="Default avatar" className="mt-3 me-4" />
                Nickname 4
                <p className="text-center text-danger mt-2 fw-bold">
                  Delete from friend list
                </p>
              </li>
              <li>
                <img src={user} alt="Default avatar" className="mt-3 me-4" />
                Nickname 5
                <p className="text-center text-success mt-2 fw-bold">
                  Add as friend
                </p>
              </li>
              <li>
                <img src={user} alt="Default avatar" className="mt-3 me-4" />
                Nickname 6
                <p className="text-center text-danger mt-2 fw-bold">
                  Delete from friend list
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
