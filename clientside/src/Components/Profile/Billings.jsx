import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCcMastercard, faCcVisa } from "@fortawesome/free-brands-svg-icons";
import {
    ExclamationTriangleIcon,
    PencilIcon,
    PlusIcon,
    TrashIcon,
    XMarkIcon,
} from "@heroicons/react/24/solid";
import React from "react";
import ButtonIcon  from "../ui/ButtonIcon";
import Button from '../ui/Buttontwo'

function Billings() {
    return (
        <>
            <div className="p-4 xs:p-6">
                <div className="mb-5 empty:mb-0">
                    <div className="flex items-center px-4 py-3 bg-sky-100 dark:bg-sky-950 rounded-md">
                        <div className="bg-sky-400 dark:bg-sky-700 p-2 rounded-full text-white">
                            <ExclamationTriangleIcon className="h-4 w-4" />
                        </div>
                        <div className="ps-3">
                            <h6 className="text-sm font-bold text-slate-700 dark:text-white">
                                Attention Please!
                            </h6>
                            <p className="text-xs text-slate-600 dark:text-slate-200">
                                To start using our tools, please{" "}
                                <button className="font-bold text-blue-500">
                                    Add Payment Method
                                </button>
                                .
                            </p>
                        </div>
                        <button className="ms-auto text-sky-600">
                            <XMarkIcon className="h-4 w-4" />
                        </button>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h6 className="text-xs font-bold text-slate-700 dark:text-white mb-3">
                        Current Package
                    </h6>
                    <div className="flex flex-wrap justify-between items-center border border-slate-200 dark:border-slate-800 px-5 py-4 rounded-md gap-3">
                        <div className="">
                            <h4 className="text-lg font-bold text-slate-600 dark:text-slate-200">
                                $14.59
                                <span className="text-xs font-bold text-slate-400 ms-2">
                                    Per Month
                                </span>
                            </h4>
                            <h3 className="text-xl font-bold text-slate-700 dark:text-white mb-1">
                                Premium Plan
                            </h3>
                            <p className="text-sm text-slate-500 dark:text-slate-400">
                                Next billing is on 10 Apr 2024
                            </p>
                        </div>
                        <ul className="flex flex-wrap gap-3">
                            <li>
                                <Button className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200 hover:bg-rose-700 hover:text-white hover:dark:bg-rose-700 hover:dark:text-white">
                                    Cancel Plan
                                </Button>
                            </li>
                            <li>
                                <Button className="bg-blue-600 text-white hover:bg-blue-800">
                                    Upgrade Plan
                                </Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="p-4 pt-3 xs:p-6 xs:pt-5 border-t border-slate-200 dark:border-slate-800">
                <div className="flex flex-wrap items-center -mx-3">
                    <div className="w-full lg:w-1/2 px-3">
                        <div className="py-2">
                            <div className="flex items-center border border-slate-200 dark:border-slate-800 border-dashed rounded-md p-3 gap-x-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex p-3 rounded-md text-white bg-blue-500">
                                        <FontAwesomeIcon
                                            icon={faCcVisa}
                                            className="h-6 w-6"
                                        />
                                    </div>
                                    <div className="">
                                        <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                                            Visacard **** 2040
                                        </h6>
                                        <p className="text-xs text-slate-500 dark:text-slate-300">
                                            Card expires at 10/24
                                        </p>
                                    </div>
                                </div>
                                <ul className="ms-auto flex gap-2">
                                    <li>
                                        <ButtonIcon
                                            circle
                                            className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:dark:bg-blue-600 hover:dark:text-white"
                                        >
                                            <PencilIcon className="h-3 w-3" />
                                        </ButtonIcon>
                                    </li>
                                    <li>
                                        <ButtonIcon
                                            circle
                                            className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200  hover:bg-rose-600 hover:text-white hover:dark:bg-rose-600 hover:dark:text-white"
                                        >
                                            <TrashIcon className="h-3 w-3" />
                                        </ButtonIcon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="w-full lg:w-1/2 px-3">
                        <div className="py-2">
                            <div className="flex items-center border border-slate-200 dark:border-slate-800 border-dashed rounded-md p-3 gap-x-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    <div className="flex p-3 rounded-md text-white bg-rose-500">
                                        <FontAwesomeIcon
                                            icon={faCcMastercard}
                                            className="h-6 w-6"
                                        />
                                    </div>
                                    <div className="">
                                        <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200">
                                            Visacard **** 2040
                                        </h6>
                                        <p className="text-xs text-slate-500 dark:text-slate-300">
                                            Card expires at 10/24
                                        </p>
                                    </div>
                                </div>
                                <ul className="ms-auto flex gap-2">
                                    <li>
                                        <ButtonIcon
                                            circle
                                            className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200 hover:bg-blue-600 hover:text-white hover:dark:bg-blue-600 hover:dark:text-white"
                                        >
                                            <PencilIcon className="h-3 w-3" />
                                        </ButtonIcon>
                                    </li>
                                    <li>
                                        <ButtonIcon
                                            circle
                                            className="bg-slate-200 dark:bg-slate-800 text-slate-600 dark:text-slate-200  hover:bg-rose-600 hover:text-white hover:dark:bg-rose-600 hover:dark:text-white"
                                        >
                                            <TrashIcon className="h-3 w-3" />
                                        </ButtonIcon>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Billings;
