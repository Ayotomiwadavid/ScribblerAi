import React from "react";
import Logo from '../Assets/Images/Logo.png'
import { PaperAirplaneIcon } from "@heroicons/react/24/outline";

const Footer = () => {
  return (
    <section className="py-16 w-full md:py-20 bg-slate-50 dark:bg-slate-950 overflow-hidden border-t border-gray-200 dark:border-gray-800 mt-auto">
      <div className="container px-3">
        <div className="flex flex-wrap -m-3 md:-m-4">
          <div className="w-full lg:w-4/12 xl:w-3/12 p-3 md:p-4">
            <div className="pb-3">
              <a href="#">
                  <div className='flex items-center'>
                      <img className='h-6' src={Logo} />
                  </div>
              </a>
              <div className="mt-2 lg:mt-5">
                <p className="text-slate-500 dark:text-slate-300 text-base/7">
                  {" "}
                  Unleash stunning visuals effortlessly with our intuitive AI.
                </p>
              </div>
            </div>
          </div>
          <div className="w-6/12 sm:w-3/12 lg:w-2/12 p-3 md:p-4 lg:ms-auto">
            <h6 className="font-bold text-base text-slate-700 dark:text-white mb-3">
              More Tools
            </h6>
            <ul>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  Image Generator
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  Code Generator
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  Speech to Text
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  Article Writer
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  ChatBot
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-6/12 sm:w-3/12 lg:w-2/12 p-3 md:p-4">
            <h6 className="font-bold text-base text-slate-700 dark:text-white mb-3">
              Pages
            </h6>
            <ul>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  Main intro
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  User Application
                </a>{" "}
              </li>
              <li>
                {" "}
                <a className="inline-flex text-sm/7 text-slate-500 dark:text-slate-400 hover:text-blue-600 hover:dark:text-blue-600 transition-all">
                  Admin Dashboard
                </a>{" "}
              </li>
            </ul>
          </div>
          <div className="w-full sm:w-6/12 lg:w-3/12 p-3 md:p-4">
            <h6 className="font-bold text-base text-slate-700 dark:text-white mb-3">
              Sign up for updates
            </h6>
            <div className="flex items-center gap-2">
              <div className="relative flex-grow w-full sm:w-auto">
                <input title="newsletter" className="w-full px-3 py-2 rounded-md focus:outline-none focus:ring focus:border-blue-600" placeholder="name@email.com" />
              </div>
              <a
                to="/app/templates/image"
                className="inline-flex justify-center font-medium text-sm bg-blue-600 text-white hover:bg-blue-800 transition-all px-3 py-2 rounded-md"
              >
                <PaperAirplaneIcon className="h-5" />
              </a>
            </div>
            <p className="text-xs text-slate-500 dark:text-slate-400 mt-2">
              We don't share your info
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
