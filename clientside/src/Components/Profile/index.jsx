import React, { useEffect, useState } from "react";
import Section from "../global/Section";
import Container from "../global/Container";
import { Tab } from "@headlessui/react";
import Dp from "../../Assets/Images/1.jpg";
import Appbar from "../Appbar";
import {
  Cog6ToothIcon,
  CreditCardIcon,
  PencilIcon,
  UserCircleIcon,
} from "@heroicons/react/24/outline";

import Appfooter from "../Appfooter";

import Settings from "./Settings";
import Billings from "./Billings";
import Overview from "./Overview";
import { useNavigate } from "react-router-dom";

function ProfilePage() {
  let navigate = useNavigate();

  const loginStatus = localStorage.getItem("loginStatus");
  useEffect(() => {
    if (loginStatus === "false" || loginStatus === null) {
      navigate("/userAuth/login");
    }
  }, [loginStatus, navigate]);

  const [selectedIndex, setSelectedIndex] = useState(0);
  return (
    <section className="bg-[#F1F5F9]">
      <Appbar headerNavType='profile'/>
      <Section className="py-10 px-3">
        <Container>
          <div className="flex">
            <div className="hidden md:block md:w-48 lg:w-72 flex-shrink-0">
              <div className="relative inline-flex flex-shrink-0  w-full rounded-lg overflow-hidden outline outline-2 outline-offset-2 outline-slate-300 dark:outline-slate-700">
                <img src={Dp} alt="" />
                <button className="inline-flex items-center justify-center rounded-full h-8 w-8 lg:h-11 lg:w-11 text-slate-600 dark:text-slate-200 bg-white dark:bg-slate-800 absolute end-0 me-3 mt-3">
                  <PencilIcon className="h-4" />
                </button>
              </div>
            </div>
            <div className="flex-grow-1 w-full md:ms-6 lg:ms-8 ">
              <h2 className="text-xl font-bold text-slate-700 dark:text-white mb-4 mt-2">
                My Profile
              </h2>
              <div className="bg-white dark:bg-slate-950 rounded-lg border border-slate-200 dark:border-slate-800 w-full">
                <Tab.Group
                  selectedIndex={selectedIndex}
                  onChange={setSelectedIndex}
                >
                  <Tab.List className="flex px-3 border-b border-slate-200 dark:border-slate-800">
                    <Tab className="flex items-center mx-3 py-3 text-sm text-slate-600 dark:text-slate-200 font-medium ui-selected:text-blue-600 ui-selected:dark:text-blue-600 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-blue-600 focus-visible:outline-none">
                      <UserCircleIcon className="h-5 px-2 xs:px-0" />
                      <span className="hidden xs:block ms-2">Overview</span>
                    </Tab>
                    <Tab className="flex items-center mx-3 py-3 text-sm text-slate-600 dark:text-slate-200 font-medium ui-selected:text-blue-600 ui-selected:dark:text-blue-600 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-blue-600 focus-visible:outline-none">
                      <CreditCardIcon className="h-5 px-2 xs:px-0" />
                      <span className="hidden xs:block ms-2">Billings</span>
                    </Tab>
                    <Tab className="flex items-center mx-3 py-3 text-sm text-slate-600 dark:text-slate-200 font-medium ui-selected:text-blue-600 ui-selected:dark:text-blue-600 -mb-[1px] border-b-2 border-b-transparent ui-selected:border-blue-600 focus-visible:outline-none">
                      <Cog6ToothIcon className="h-5 px-2 xs:px-0" />
                      <span className="hidden xs:block ms-2">Settings</span>
                    </Tab>
                  </Tab.List>
                  <Tab.Panels>
                    <Tab.Panel>
                      <Overview setSelectedIndex={setSelectedIndex} />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Billings />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Settings />
                    </Tab.Panel>
                  </Tab.Panels>
                </Tab.Group>
              </div>
            </div>
          </div>
        </Container>
      </Section>
      <Appfooter />
    </section>
  );
}

export default ProfilePage;
