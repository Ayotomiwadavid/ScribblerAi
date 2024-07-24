import { PencilIcon } from "@heroicons/react/24/solid";
import React, { useContext, useEffect } from "react";
import Button from "../ui/Buttontwo";
import Dp from "../../Assets/Images/1.jpg";
import UserContext from "../Controller";
import CustomHook from "../../CustomHook";

function Overview({ setSelectedIndex }) {
  const { fetchUserData } = CustomHook(); // Fetch the fetchUserData function from your custom hook

  const { currentUserDetails } = useContext(UserContext); // Get currentUserDetails from UserContext

  // Fetch user data when the component mounts
  useEffect(() => {
    fetchUserData();
  }, []);


  // Ensure currentUserDetails is not null or undefined before destructuring
  const {
    userPhoneNumber,
    email,
    userCountry,
    userLanguage,
    name,
  } = currentUserDetails || {};

  return (
    <div className="p-6">
      <div className="flex flex-wrap">
        <div className="md:hidden w-36 xs:w-28 sm:w-40 flex-shrink-0 mb-3">
          <div className="relative inline-flex flex-shrink-0  w-full rounded-lg overflow-hidden outline outline-2 outline-offset-2 outline-slate-300 dark:outline-slate-700">
            <img src={Dp} alt="" />
            <button className="inline-flex items-center justify-center rounded-full h-8 w-8 lg:h-11 lg:w-11 text-slate-600 dark:text-slate-200 bg-white dark:bg-slate-950 absolute end-0 me-3 mt-3">
              <PencilIcon className="h-4" />
            </button>
          </div>
        </div>
        <div className="w-full xs:w-[calc(100%-theme(space.36))] sm:w-[calc(100%-theme(space.48))] md:w-full xs:ms-6 sm:ms-8 md:ms-0">
          <div className="flex flex-wrap justify-between items-center mb-2 gap-x-3 gap-y-2">
            <h2 className="text-lg font-bold text-slate-700 dark:text-white">
              Personal Info
            </h2>
            <Button
              onClick={(e) => {
                e.preventDefault();
                setSelectedIndex(2);
              }}
              size="sm"
              className="bg-blue-600 flex text-white w-[100px] hover:bg-blue-800"
            >
              <PencilIcon className="h-3 w-3" />
              <span className='flex gap-2'>
                Edit <span className="hidden sm:inline-block">profile</span>
              </span>
            </Button>
          </div>
          <div className="flex flex-wrap -mx-3">
            <div className="w-1/2 md:w-1/3 px-3">
              <div className="py-2">
                <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                  Name
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {name}
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 px-3">
              <div className="py-2">
                <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                  Email
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {email}
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 px-3">
              <div className="py-2">
                <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                  Phone No
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {userPhoneNumber}
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 px-3">
              <div className="py-2">
                <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                  Country
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {userCountry}
                </p>
              </div>
            </div>
            <div className="w-1/2 md:w-1/3 px-3">
              <div className="py-2">
                <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                  Language
                </h6>
                <p className="text-xs text-slate-500 dark:text-slate-400">
                  {userLanguage}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
