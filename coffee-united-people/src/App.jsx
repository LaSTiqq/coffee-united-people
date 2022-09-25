import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoggedInContextProvider from "./utils/loggedInContext.jsx";
import MainPage from "./pages/mainPage/MainPage.jsx";
import RegisterPage from "./pages/registerPage/RegisterPage.jsx";
import LoginPage from "./pages/loginPage/LoginPage.jsx";
import DashboardPage from "./pages/dashboardPage/DashboardPage.jsx";
import PeoplePage from "./pages/peoplePage/PeoplePage.jsx";
import ChatPage from "./pages/chatPage/ChatPage.jsx";

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
