import React from "react";
import Header from "../Components/Appbar";
import Registrationform from "../Components/Registrationform";
import Appfooter from "../Components/Appfooter";

const Register = () => {
  return (
    <section className="bg-[#F1F5F9] ">
      <Header />
      <Registrationform />
      <Appfooter />
    </section>
  );
};

export default Register;
