import { CheckBadgeIcon } from "@heroicons/react/24/outline";
import React, { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

const Prices = () => {
  const navigate = useNavigate();
  const [packageDetails, setPackageDetails] = useState({ id: 0, quantity: 0 });
  const [triggerPost, setTriggerPost] = useState(false); // to trigger the post request

  const endPointUrl = 'http://localhost:5000/createCheckoutSession';

  useEffect(() => {
    if (triggerPost) {
      fetch(endPointUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ plan: packageDetails })
      })
      .then(response => {
        if (response.ok) {
          return response.json();
        }
        return response.json().then(json => Promise.reject(json));
      })
      .then(({ url, currentPlan }) => {
        localStorage.setItem('plan', currentPlan);
        window.location.href = url;
      })
      .catch(err => {
        console.log('An Error Occurred:', err.error);
      })
      .finally(() => {
        setTriggerPost(false); // Reset the trigger
      });
    }
  }, [triggerPost, packageDetails, navigate, endPointUrl]);

  const handleFreeTrialPackage = () => {
    setPackageDetails({ id: 1, quantity: 1 });
    setTriggerPost(true); // Trigger the post request
  };

  const handlePremiumPackage = () => {
    setPackageDetails({ id: 2, quantity: 1 });
    setTriggerPost(true); // Trigger the post request
  };

  const handleCorporatePackage = () => {
    setPackageDetails({ id: 3, quantity: 1 });
    setTriggerPost(true); // Trigger the post request
  };

  return (
    <section className="w-full px-4">
      <div className="pt-16 md:pt-20 lg:pt-24 xl:pt-28 pb-2 bg-white dark:bg-slate-900 overflow-hidden">
        <aside>
          <div className="flex flex-wrap items-center justify-center pb-8 lg:pb-12">
            <div className="w-full sm:w-4/5 md:w-4/5 lg:w-3/5 xl:w-1/2 2xl:w-2/5 text-center mx-auto">
              <h3 className="text-3xl sm:text-[2.5rem] leading-tight font-bold text-slate-700 dark:text-white mb-3">
                Start with free, subscribe for more features.
              </h3>
            </div>
          </div>
          <div className="flex flex-wrap justify-center -m-3 md:-m-4">
            <div className="w-full lg:w-1/3 xl:w-1/4 p-3 md:p-4">
              <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                <h2 className="text-3xl/snug font-bold text-blue-600">Free</h2>
                <p className="text-slate-600 dark:text-slate-200 text-lg mb-3">
                  I just need the basics!
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm/6">
                  Unleash creativity without costs, transforming ideas into
                  visuals effortlessly. Start 3 Days Free Trial.
                </p>
                <div className="mt-5">
                  <button onClick={handleFreeTrialPackage} className="inline-flex justify-center w-full font-bold text-base bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:dark:bg-blue-600 hover:border-blue-600 hover:dark:border-blue-600 hover:text-white hover:dark:text-white transition-all px-7 py-3 rounded-lg">
                    Sign up for free
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3 md:p-4">
              <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl ring-2 ring-blue-300 dark:ring-blue-900">
                <h2 className="text-2xl/snug font-bold w-max bg-gradient-to-r from-blue-600 to-pink-500 text-transparent bg-clip-text">
                  Premium
                </h2>
                <div className="flex items-baseline gap-x-2 mt-2 mb-6">
                  <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white">
                    {" "}
                    $19{" "}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                    {" "}
                    Month
                  </span>
                </div>

                <ul className="text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>
                      <strong className="text-slate-600 dark:text-slate-200">
                        2000
                      </strong>
                      &nbsp;Monthly Credits
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>Unlimited Saves</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>
                      <strong className="text-slate-600 dark:text-slate-200">
                        5
                      </strong>
                      &nbsp;Team Members
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>Access Newest features</span>
                  </li>
                </ul>

                <div className="mt-7">
                  <button onClick={handlePremiumPackage} className="inline-flex justify-center w-full font-bold text-base bg-blue-600 text-white hover:bg-blue-800 transition-all px-7 py-3 rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 p-3 md:p-4">
              <div className="bg-white dark:bg-slate-950 p-7 border border-slate-100 dark:border-slate-950 shadow rounded-2xl">
                <h2 className="text-2xl/snug font-bold w-max text-slate-700 dark:text-blue-500">
                  Corporate{" "}
                </h2>
                <div className="flex items-baseline gap-x-2 mt-2 mb-6">
                  <span className="text-4xl font-bold tracking-tight text-slate-700 dark:text-white">
                    {" "}
                    $100{" "}
                  </span>
                  <span className="text-sm font-semibold leading-6 tracking-wide text-slate-500 dark:text-slate-400">
                    {" "}
                    Month
                  </span>
                </div>

                <ul className="text-slate-500 dark:text-slate-400 text-sm font-medium flex flex-col gap-y-3">
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>
                      <strong className="text-slate-600 dark:text-slate-200">
                        90000
                      </strong>
                      &nbsp;Monthly Credits
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>Unlimited Saves</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>
                      <strong className="text-slate-600 dark:text-slate-200">
                        30
                      </strong>
                      &nbsp;Team Members
                    </span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>Access Newest features</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>Access to API</span>
                  </li>
                  <li className="flex gap-x-3">
                    <CheckBadgeIcon className="h-5 text-blue-500" />
                    <span>24/7 Support assistant</span>
                  </li>
                </ul>

                <div className="mt-7">
                  <button onClick={handleCorporatePackage} className="inline-flex justify-center w-full font-bold text-base bg-white dark:bg-slate-900 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-slate-800 hover:bg-blue-600 hover:dark:bg-blue-600 hover:border-blue-600 hover:dark:border-blue-600 hover:text-white hover:dark:text-white transition-all px-7 py-3 rounded-lg">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
};

export default Prices;
