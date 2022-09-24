// import { useEffect, useContext } from "react";
// import { LoggedInContext } from "../../utils/LoggedInContext";
// import { useNavigate } from "react-router-dom";
import "./chat.css";

const Chat = () => {
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
          <div className="chatBackground">
            <h1 className="text-center fw-bold my-3">Chat</h1>
            <div className="box my-5">
              <div className="box-header">Chat:</div>
              <div className="box-body"></div>
              <div className="box-footer">
                <input type="text" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
