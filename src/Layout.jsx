import React from "react";
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import Footer from "./Components/Footer";
import PacmanLoader from "react-spinners/PacmanLoader";
import { useEffect, useState } from "react";
const Layout = () => {
  const [loading, setLoading] = useState(false);
  const [visible, setVisible] = useState("");
  const [visible1, setVisible1] = useState("hidden");
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setVisible("hidden");
      setLoading(false);
      setVisible1("");
    }, 2000);
  }, []);
  return (
    <>
      <Header />
      <div
        className={`bg-Primary flex items-center justify-center min-h-screen z-auto ${visible}`}
      >
        <PacmanLoader color={"white"} loading={loading} size={50} />
      </div>
      <div className={`${visible1}`}>
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
