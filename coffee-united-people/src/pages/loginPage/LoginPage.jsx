import Header from "../../components/header/Header";
import LoginForm from "../../components/loginForm/LoginForm";
import Footer from "../../components/footer/Footer";

const LoginPage = () => {
  return (
    <>
      <Header button={""} />
      <LoginForm dashboard={"dashboard"} />
      <Footer />
    </>
  );
};

export default LoginPage;
