import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import Chat from "../../components/chat/Chat";
import Footer from "../../components/footer/Footer";

const ChatPage = () => {
  return (
    <>
      <Header button={"dashboard"} />
      <Sidebar
        buttonDashboard={"dashboard"}
        buttonPeople={"people"}
        buttonChat={"chat"}
      />
      <Chat />
      <Footer />
    </>
  );
};

export default ChatPage;
