import React from "react";
import Header from "../Components/Appbar";
import Appfooter from "../Components/Appfooter";
import Loginform from "../Components/Loginform";

const Login = () => {
  return (
    <section className="bg-[#F1F5F9]">
      <Header headerNavType='registration'/>
      <Loginform />
      <Appfooter />
    </section>
  );
};

export default Login;
