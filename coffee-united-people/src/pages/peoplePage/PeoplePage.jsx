import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import People from "../../components/people/People";
import Footer from "../../components/footer/Footer";

const PeoplePage = () => {
  return (
    <>
      <Header button={"dashboard"} />
      <Sidebar
        buttonDashboard={"dashboard"}
        buttonPeople={"people"}
        buttonChat={"chat"}
      />
      <People />
      <Footer />
    </>
  );
};

export default PeoplePage;
