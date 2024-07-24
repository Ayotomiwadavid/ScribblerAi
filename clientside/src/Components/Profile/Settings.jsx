import React, { useContext, useEffect, useState } from "react";
import Input from "../forms/Input";
import Label from "../forms/Label";
import Select from "../forms/Select";
import Button from "../ui/Buttontwo";
import { toast } from "react-toastify";

import { country, language } from "../store";
import UserContext from "../Controller";

function Settings() {
  const { currentUserDetails } = useContext(UserContext);

  const {
    userId,
    user: {
      userPhoneNumber,
      email,
      name,
    } = {},
  } = currentUserDetails || {};

  const [inputsValue, setInputsValue] = useState({});
  const [userUpdatedDetails, setUserUpdatedDetails] = useState({});
  const [resetPassword, setresetPassword] = useState({});
  const [selectedLanguage, setSelectedLanguage] = useState(language[6]);
  const [selectedCountry, setSelectedCountry] = useState(country[227]);


  const handlePassWordReset = (e) => {
    let { name, value } = e.target;
    setresetPassword((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const handleResetPasswordFunc = async () => {
    const isValidPassword =
      /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

    if (
      resetPassword.currentPassword === "" ||
      resetPassword.newPassword === "" ||
      resetPassword.confirmPassword === ""
    ) {
      toast.error("Fill all inputs");
    } else if (
      resetPassword.newPassword !== resetPassword.confirmPassword ||
      !resetPassword.newPassword.match(isValidPassword)
    ) {
      if (resetPassword.newPassword !== resetPassword.confirmPassword) {
        toast.error("Passwords do not match.");
      } else if (!resetPassword.newPassword.match(isValidPassword)) {
        toast.error(
          "Password must be at least 8 characters long, include at least one uppercase letter, one lowercase letter, one number, and one special character."
        );
      }
    } else {
      const { confirmPassword, currentPassword, newPassword } = resetPassword;
      const passwordResetData = {
        userId,
        confirmPassword,
        currentPassword,
        newPassword,
      };

      const response = await fetch(
        "http://localhost:5000/auth/password-reset",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(passwordResetData),
        }
      );
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Something went wrong");
      }
      toast.success(data.msg);
    }
  };

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    setInputsValue((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  const HandleUpdateProfile = async () => {
    let { email, fullName, phone } = inputsValue;

    try {

      setUserUpdatedDetails({
        userEmail: email,
        userFullName: fullName,
        userPhoneNumber: phone,
        userCountry: selectedCountry.name,
        userLanguage: selectedLanguage.name,
        currentUserId: userId,
      });

      const response = await fetch(
        "http://localhost:5000/auth/update-profile",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(userUpdatedDetails),
        }
      );

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.msg || "Something went wrong");
      }

      console.log("User logged in successfully:", data);
      toast.success(data.msg);
    } catch (error) {
      console.error(
        "Failed to parse user from local storage or user is not defined correctly",
        error
      );
    }
  };

  useEffect(() => {
    console.log(userUpdatedDetails);
    console.log(resetPassword);
  }, [userUpdatedDetails, resetPassword]);

  return (
    <>
      <div className="px-6 pt-4 pb-5">
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full sm:w-1/2 px-3">
            <div className="py-2">
              <Label htmlFor="fullName" className="mb-2">
                Full Name
              </Label>
              <Input
                inputOnChange={handleInputChange}
                inputName="fullName"
                defaultValue={`${name}`}
                id="fullName"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-3">
            <div className="py-2">
              <Label
                htmlFor="useremail"
                className="mb-2 w-full items-center justify-between"
              >
                Email
              </Label>
              <Input
                defaultValue={email}
                id="useremail"
                disabled
                inputOnChange={handleInputChange}
                inputName="email"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-3">
            <div className="py-2">
              <Label htmlFor="userphone" className="mb-2">
                Phone No
              </Label>
              <Input
                defaultValue={userPhoneNumber}
                id="userphone"
                inputOnChange={handleInputChange}
                inputName="phone"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-3">
            <div className="py-2">
              <Label htmlFor="usercountry" className="mb-2">
                Country
              </Label>
              <Select
                selected={selectedCountry}
                options={country}
                onChange={(value) => {
                  setSelectedCountry(value);
                }}
                id="usercountry"
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 px-3">
            <div className="py-2">
              <Label htmlFor="userlanguage" className="mb-2">
                Language
              </Label>
              <Select
                selected={selectedLanguage}
                options={language}
                onChange={(value) => {
                  setSelectedLanguage(value);
                }}
                id="userlanguage"
              />
            </div>
          </div>
          <div className="w-full px-3 py-2">
            <Button
              onClick={HandleUpdateProfile}
              className="bg-blue-600 text-white hover:bg-blue-800"
            >
              Update Profile
            </Button>
          </div>
        </div>
      </div>
      <div className="px-6 pt-4 pb-5 border-t border-slate-200 dark:border-slate-800">
        <div className="mt-2 mb-2">
          <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-2">
            Reset Password
          </h2>
          <p className="text-sm text-slate-500">
            Password must be at least 8 character and contain symbols.
          </p>
        </div>
        <div className="flex flex-wrap items-center -mx-3">
          <div className="w-full  lg:w-1/3 px-3">
            <div className="py-2">
              <Label htmlFor="currentPassword" className="mb-2">
                Current Password
              </Label>
              <Input
                defaultValue=""
                id="currentPassword"
                inputName="currentPassword"
                type="password"
                inputOnChange={handlePassWordReset}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
            <div className="py-2">
              <Label htmlFor="newPassword" className="mb-2">
                New Password
              </Label>
              <Input
                defaultValue=""
                id="newPassword"
                inputName="newPassword"
                type="password"
                inputOnChange={handlePassWordReset}
              />
            </div>
          </div>
          <div className="w-full sm:w-1/2 lg:w-1/3 px-3">
            <div className="py-2">
              <Label htmlFor="confirmPassword" className="mb-2">
                Confirm Password
              </Label>
              <Input
                defaultValue=""
                id="confirmPassword"
                inputName="confirmPassword"
                type="password"
                inputOnChange={handlePassWordReset}
              />
            </div>
          </div>
          <div className="w-full px-3 pb-2 pt-4">
            <Button
              onClick={handleResetPasswordFunc}
              className="bg-blue-600 text-white hover:bg-blue-800"
            >
              Update Password
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Settings;
