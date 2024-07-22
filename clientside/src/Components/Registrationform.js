import React, { useEffect, useState } from "react";
import Button from "./ui/Button";
import Input from "./forms/Input";
import Container from "./global/Container";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF, faGoogle } from "@fortawesome/free-brands-svg-icons";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Registrationform = () => {

  const navigate = useNavigate();
  
  useEffect(() => {
    try {
      const plan = localStorage.getItem('plan')
      if (!plan) {
        navigate('/');
      }
    } catch (error) {
      console.error("Invalid JSON in localStorage:", error);
    }
  }, [navigate]);

  //SET A USESTATE TO GET USERS DETAILS
  let [confirmPassword, setconfirmPassword] = useState("");
  let [userDetails, setUserDetails] = useState({
    name: "",
    email: "",
    password: "",
  });

  useEffect(() => {
    console.log("User Details Updated:", userDetails);
  }, [userDetails]);

  useEffect(() => {
    console.log("Confirm Password Updated:", confirmPassword);
  }, [confirmPassword]);

  let confirmPasswordHandler = (e) => {
    let { value } = e.target;
    setconfirmPassword(value);
  };

  let handleChange = (e) => {
    let { name, value } = e.target;
    setUserDetails((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleAccrountCreation = (e) => {
    e.preventDefault();

    //Email validator
    const isValidEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;

    // Password validator
    const isValidPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    //validate form inputs
    if (userDetails.name === "") {
      toast.error("Fill the name input");
    } else if (
      userDetails.email === "" ||
      !userDetails.email.match(isValidEmail)
    ) {
      toast.error("Make sure your email is valid");
    } else if (
      userDetails.password !== confirmPassword ||
      userDetails.password.match(isValidPassword)
    ) {
      if (userDetails.password !== confirmPassword) {
        toast.error("Passwords do not match.");
      } else if (!userDetails.password.match(isValidPassword)) {
        toast.error(
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
      }
    } else {
      fetch("http://localhost:5000/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userDetails),
      })
        .then((response) => {
          if (response.ok) {
            return response.json();
          } else {
            // Extract error message from response and throw it
            return response.json().then((err) => {
              throw new Error(err.msg || "Something went wrong");
            });
          }
        })
        .then((data) => {
          // Handle successful response
          toast.success(data.msg);
          localStorage.setItem("user", JSON.stringify(data.user));
          navigate('/userAuth/login');
        })
        .catch((error) => {
          // Handle errors
          toast.error(error.message);
        });
    }
  };

  return (
    <Container>
      <div className="flex justify-center items-center -mx-3 py-10">
        <div className="w-full flex items-center justify-center xs:w-4/5 sm:w-3/5 md:w-1/2 lg:w-2/5 xl:w-1/3 px-3">
          <section className="w-full bg-white rounded-md flex flex-col px-4 items-center justify-center">
            <div className="w-full py-3 items-start flex flex-col justify-center">
              <h1 className="text-lg capitalize font-bold font-sans text-[#334155]">
                Create Account
              </h1>
              <p className="font-semibold text-[13px] text-[#64748B]">
                With valid information
              </p>
            </div>
            <form className="w-full">
              <Input
                labelText="Full name"
                inputId="fullName"
                inputName="name"
                inputType="text"
                inputPlaceholder="John Doe"
                formType="registration"
                inputOnChange={handleChange}
                inputValue={userDetails.name}
              />
              <Input
                labelText="email address"
                inputId="emailAdress"
                inputName="email"
                inputType="email"
                inputPlaceholder="Example@email.com"
                formType="registration"
                inputOnChange={handleChange}
                inputValue={userDetails.email}
              />
              <Input
                labelText="password"
                inputId="password"
                inputName="password"
                inputType="password"
                formType="registration"
                inputOnChange={handleChange}
                inputValue={userDetails.password}
              />
              <Input
                labelText="confirm password"
                inputId="confirmpPssword"
                inputName="confirmPassword"
                inputType="password"
                formType="registration"
                inputOnChange={confirmPasswordHandler}
                inputValue={confirmPassword}
              />
              <Button
                buttonType="submit"
                buttonContent="create account"
                onClick={handleAccrountCreation}
              />
              <div className="mt-5 mb-2">
                <h6 className="text-slate-400 text-[11px] uppercase text-center font-bold tracking-wider">
                  SIGN UP WITH
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

export default Registrationform;
