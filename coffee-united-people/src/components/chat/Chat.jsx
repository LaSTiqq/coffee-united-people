import "./chat.css";

const Chat = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-12">
          <div className="chatBackground">
            <h1 className="text-center">Chat</h1>
            <div className="box my-5">
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
