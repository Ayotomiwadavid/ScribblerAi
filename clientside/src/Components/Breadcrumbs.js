import React from "react";
import { Link } from "react-router-dom";

const Breadcrumbs = ({currentPageName, previousPage, currentPage, previousPageUrl}) => {
  return (
    <div className="bg-[#F1F5F9] h-[230px] gap-5 w-full flex flex-col items-center justify-center">
      <h1 className="text-[#334155] font-bold text-3xl capitalize">{currentPageName}</h1>
      <nav class="flex" aria-label="Breadcrumb">
        <ol class="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
          <li class="inline-flex items-center">
            <Link
              to={previousPageUrl}
              class="inline-flex items-center text-sm font-semibold text-blue-600 hover:text-blue-700 dark:text-gray-400 dark:hover:text-white"
            >
              {previousPage}
            </Link>
          </li>
          <li>
            <div class="flex items-center">
              <svg
                class="rtl:rotate-180 w-3 h-3 text-gray-400 mx-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 6 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m1 9 4-4-4-4"
                />
              </svg>
                {currentPage}
            </div>
          </li>
        </ol>
      </nav>
    </div>
  );
};

export default Breadcrumbs;
