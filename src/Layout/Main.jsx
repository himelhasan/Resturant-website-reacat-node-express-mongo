import { Outlet } from "react-router-dom";
import Footer from "../Components/Global/Footer";
import Header from "../Components/Global/Header";

const Main = () => {
  return (
    <>
      <Header />
      <Outlet></Outlet>
      <Footer />
    </>
  );
};

export default Main;
