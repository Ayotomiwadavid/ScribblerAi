import React from "react";
import copyWriter from "../Assets/Images/copywriter.png";

const LatCTA = () => {
  return (
    <div className="w-full flex items-center justify-center">
      <section className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 bg-white dark:bg-slate-900 overflow-hidden">
        <div className="container px-3">
          <div className="relative bg-gradient-to-b from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 border border-b-0 border-gray-200 dark:border-gray-800 rounded-t-xl p-6 sm:p-10 !pb-0">
            <div className="flex flex-wrap items-center -m-4">
              <div className="p-4 w-full lg:w-6/12">
                <div className="lg:pb-10">
                  <h1 className="text-2xl sm:text-4xl/snug font-bold text-slate-700 dark:text-white mb-4">
                    Revolutionize Your Copywriting Save{" "}
                    <span className="bg-gradient-to-r from-indigo-500 to-blue-500 bg-clip-text text-transparent">
                      Time and Money
                    </span>
                  </h1>
                  <p className="text-slate-500 dark:text-slate-300 text-base/relaxed sm:text-lg/relaxed mb-6">
                    Stop the drain on your resources and start investing your
                    time and money where it truly matters.
                  </p>
                  <button className="inline-flex justify-center font-bold text-base bg-blue-600 text-white hover:bg-blue-800 transition-all px-7 py-3 rounded-lg">
                    Try it for Free
                  </button>
                </div>
              </div>

              <div className="p-4 w-full lg:w-6/12 self-end">
                <img
                  className="rounded-t-xl shadow-lg shadow-blue-100 dark:shadow-blue-950 border border-b-0 border-gray-200 dark:border-gray-800"
                  src={copyWriter}
                  alt=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LatCTA;
