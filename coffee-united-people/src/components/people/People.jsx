import { useEffect, useContext } from "react";
import { LoggedInContext } from "../../utils/LoggedInContext";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import CustomGetHook from "../../utils/CustomGetHook";
import userLogo from "../../asssets/user.png";
import "./people.css";

const People = () => {
  let navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);
  useEffect(() => {
    if (!LoginContext.isLoggedIn) {
      navigate("/login");
    }
  });
  const { dataState } = CustomGetHook("http://localhost:3001/get");

  const displayUsers = () => {
    return (
      <>
        {dataState?.map((user) => {
          return (
            <li key={user._id} className="my-2">
              <div className="wrapperPeople text-center">
                <img
                  src={userLogo}
                  alt="Default avatar"
                  className="me-2 my-2"
                />
                <span className="me-2 fw-bold">Nickname:</span>
                <span>{`${user.nickname}`}&nbsp;|&nbsp;</span>
                <span className="me-2 fw-bold">Email:</span>
                <span>{`${user.email}`}</span>
                <div className="d-flex justify-content-evenly">
                  <p className="text-center text-success mb-2 fw-bold">
                    Add as friend
                  </p>
                  <Link to={"/chat"}>
                    <p className="text-center text-primary mb-2 fw-bold">
                      Send a message
                    </p>
                  </Link>
                </div>
              </div>
            </li>
          );
        })}
      </>
    );
  };

  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-md-12">
          <div className="peopleBackground">
            <h1 className="text-center fw-bold mt-2 mb-4">
              Registered people list
            </h1>
            <ul className="d-flex flex-column ps-0">{displayUsers()}</ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default People;
