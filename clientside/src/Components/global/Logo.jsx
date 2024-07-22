import React from "react";
import { twMerge } from 'tailwind-merge'

function Logo({rootClassName, className, classNameDark, classNameWhite}) {
    return (
        <div className={twMerge('flex items-center', rootClassName)}>
            <img className={twMerge('h-6 dark:hidden', className, classNameDark)} src="/logo.png" />
            <img className={twMerge('h-6 hidden dark:block', className, classNameWhite)} src="/logo-white.png" />
        </div>
    );
}

export default Logo;
