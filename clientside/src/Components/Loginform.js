import React, { useContext, useEffect, useState } from "react";
import Button from "./ui/Button";
import Input from "./forms/Input";
import Container from "./global/Container";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import UserContext from "./Controller";
import CustomHook from "../CustomHook";

const Loginform = () => {
  const navigate = useNavigate();

  const {fetchUserData} = CustomHook();

  const {setCurrentUserDetails } = useContext(UserContext);

  let [userDetails, setUserDetails] = useState({
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("Confirm Password Updated:", userDetails);
  }, [userDetails]);

  const handleLoginDetails = (e) => {
    const { name, value } = e.target;
    setUserDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/auth/login", {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        credentials: 'include', // Include cookies in the request
        body: JSON.stringify(userDetails),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Something went wrong");
      }

      console.log("User logged in successfully:", data);
      toast.success(data.msg);

      //Setting user details to useContext
      setCurrentUserDetails(data.user);

      // Set login status to true on successful login
      localStorage.setItem("loginStatus", "true");

      //fetch user details using hook
      await fetchUserData()
      // Change directory after signin
      navigate("/Userchatbot");
    } catch (error) {
      console.error("Error:", error.message);
      toast.error("Login failed: " + error.message);

      // Set login status to false on login failure
      localStorage.setItem("loginStatus", "false");
    }
  };

  return (
    <Container>
      <div className="flex justify-center items-center -mx-3 py-10">
        <div className="w-full flex items-center justify-center xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3">
          <section className="w-full bg-white rounded-md flex flex-col px-4 items-center justify-center">
            <div className="w-full py-3 items-start flex flex-col justify-center">
              <h1 className="text-lg capitalize font-bold font-sans text-[#334155]">
                login
              </h1>
              <p className="font-semibold text-[13px] text-[#64748B]">
                With valid credentials
              </p>
            </div>
            <form className="w-full">
              <Input
                labelText="email address"
                inputId="emailAdress"
                inputName="email"
                inputType="email"
                inputPlaceholder="Example@email.com"
                inputValue={userDetails.email}
                inputOnChange={handleLoginDetails}
              />
              <Input
                labelText="password"
                inputId="password"
                inputName="password"
                inputType="password"
                inputPlaceholder="password"
                inputValue={userDetails.password}
                inputOnChange={handleLoginDetails}
              />
              <Button
                buttonType="submit"
                buttonContent="account login"
                onClick={handleLogin}
              />
              <div className="mt-5 mb-2">
                <h6 className="text-slate-400 text-[11px] uppercase text-center font-bold tracking-wider">
                  LOGIN WITH
                </h6>
              </div>
              <div className="flex w-full items-center gap-4 py-4 mb-4 justify-between">
                <button className="w-[45%] flex items-center justify-center gap-3 py-1 outline-none h-[35px] rounded-md border-[1px] border-[#475569]">
                  <FontAwesomeIcon
                    icon={faGoogle}
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                    }}
                  />
                  <p>Google</p>
                </button>
                <button className="w-[45%] flex items-center justify-center gap-3 py-1 outline-none h-[35px] rounded-md border-[1px] border-[#475569]">
                  <FontAwesomeIcon
                    icon={faFacebookF}
                    style={{
                      color: "#475569",
                      fontSize: "15px",
                    }}
                  />
                  <p>Facebook</p>
                </button>
              </div>
            </form>
          </section>
        </div>
      </div>
    </Container>
  );
};

export default Loginform;
