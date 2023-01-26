import { LoggedInContext } from "../../utils/LoggedInContext";
import { useNavigate } from "react-router-dom";
import { useEffect, useState, useContext } from "react";
import { io } from "socket.io-client";
import "./chat.css";

const socket = io("http://localhost:3001", {
  path: "/chat/",
});

const Chat = () => {
  let navigate = useNavigate();
  const LoginContext = useContext(LoggedInContext);
  useEffect(() => {
    if (!LoginContext.isLoggedIn) {
      navigate("/login");
    }
  });
  const [message, setMessage] = useState("");
  const [messageReceived, setMessageReceived] = useState("");
  const sendMessage = () => {
    socket.emit("send_message", { message });
  };

  useEffect(() => {
    socket.on("receive_message", (data) => {
      setMessageReceived(data.message);
    });
  }, []);
  return (
    <div className="container-fluid gx-0">
      <div className="row gx-0">
        <div className="col-md-12">
          <div className="chatBackground">
            <h1 className="text-center fw-bold mt-2 mb-4">Chat</h1>
            <div className="box my-5">
              <div className="box-header fw-bold">Chat:</div>
              <div className="box-body">{messageReceived}</div>
              <div className="box-footer d-flex">
                <input
                  type="text"
                  className="form-control"
                  onChange={(event) => {
                    setMessage(event.target.value);
                  }}
                  placeholder="Message..."
                />
                <button onClick={sendMessage} className="btn btn-sm btn-dark">
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
