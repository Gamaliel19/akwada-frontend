import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
//import useScrollToTop from "../hooks/useScrollToTop";
import styles from "./MainLayout.module.css";

const MainLayout = () => {
  //useScrollToTop();

  return (
    <div className={styles.layout}>
      <Header />

      <main className={styles.main}>
        <Outlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
