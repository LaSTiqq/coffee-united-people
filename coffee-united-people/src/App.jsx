import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedInContextProvider from "./utils/loggedInContext";
import MainPage from "./pages/mainPage/MainPage";
import RegisterPage from "./pages/registerPage/RegisterPage";
import LoginPage from "./pages/loginPage/LoginPage";
import DashboardPage from "./pages/dashboardPage/DashboardPage";
import PeoplePage from "./pages/peoplePage/PeoplePage";
import ChatPage from "./pages/chatPage/ChatPage";

function App() {
  return (
    <LoggedInContextProvider>
      <Router>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/people" element={<PeoplePage />} />
          <Route path="/chat" element={<ChatPage />} />
        </Routes>
      </Router>
    </LoggedInContextProvider>
  );
}

export default App;
