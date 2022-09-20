import Header from "../../components/header/Header";
import Content from "../../components/content/Content";
import Footer from "../../components/footer/Footer";

const MainPage = () => {
  return (
    <>
      <Header button={""} />
      <Content buttonRegister={"register"} buttonLogin={"login"} />
      <Footer />
    </>
  );
};

export default MainPage;
