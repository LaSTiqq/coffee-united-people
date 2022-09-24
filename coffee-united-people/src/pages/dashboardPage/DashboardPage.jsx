import Header from "../../components/header/Header";
import Dashboard from "../../components/dashboard/Dashboard";
import Sidebar from "../../components/sidebar/Sidebar";

const DashboardPage = () => {
  return (
    <>
      <Header button={"dashboard"} />
      <Sidebar
        buttonDashboard={"dashboard"}
        buttonPeople={"people"}
        buttonChat={"chat"}
      />
      <Dashboard />
    </>
  );
};

export default DashboardPage;
