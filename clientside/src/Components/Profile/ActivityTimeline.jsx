import React from "react";
import classNames from "classnames";
import Login from '../icons/Login';
import { Layers} from '../icons';

function ActivityTimeline({ className }) {
    const compClass = classNames({
        "flex flex-col max-w-xl": true,
        [`${className}`]: className,
    });
    return (
        <div className={compClass}>
            <div className="flex py-2">
                <div className="w-10 h-10 flex-shrink-0 p-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full">
                    <Layers />
                </div>
                <div className="w-[calc(100%-theme(space.10))] ps-4 py-1">
                    <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200 mb-1">
                        3 New document created
                    </h6>
                    <p className="text-xs text-slate-400">05:10 PM - Today</p>
                    <div className="flex flex-wrap gap-3 mt-3">
                        <div className="py-2 px-3 rounded-md border border-dashed border-slate-200 dark:border-slate-800">
                            <h6 className="text-slate-600 dark:text-slate-200 font-bold text-xs">
                                10 React Best practices
                            </h6>
                            <span className="text-slate-500 text-xs">
                                <strong>254 </strong>
                                Words
                            </span>
                        </div>
                        <div className="py-2 px-3 rounded-md border border-dashed border-slate-200 dark:border-slate-800">
                            <h6 className="text-slate-600 dark:text-slate-200 font-bold text-xs">
                                Write a useEffect function with clean up
                            </h6>
                            <span className="text-slate-500 text-xs">
                                <strong>624 </strong>
                                Words
                            </span>
                        </div>
                        <div className="py-2 px-3 rounded-md border border-dashed border-slate-200 dark:border-slate-800">
                            <h6 className="text-slate-600 dark:text-slate-200 font-bold text-xs">
                                Hourse riding course for dummys
                            </h6>
                            <span className="text-slate-500 text-xs">
                                <strong>355 </strong>
                                Words
                            </span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex py-2">
                <div className="w-10 h-10 flex-shrink-0 p-2 bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-full">
                    <Login />
                </div>
                <div className="w-[calc(100%-theme(space.10))] ps-4 py-1">
                    <h6 className="text-sm font-bold text-slate-600 dark:text-slate-200 mb-1">
                        Logged in on Chrome on windows
                    </h6>
                    <p className="text-xs text-slate-400">
                        03:43 PM - 14 Mar 2023
                    </p>
                </div>
            </div>
        </div>
    );
}

export default ActivityTimeline;
