import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const Button = React.forwardRef(({children,
    size,
    block,
    pill,
    className,
    tagName,
    as,
    to,
    href,
    onClick}, ref) => {
    const compClass = classNames({
        "inline-flex justify-center items-center font-medium transition-all": true,
        "text-sm px-5 py-2 gap-3": !size,
        "text-xs px-2 py-1 gap-2": size == "xs",
        "text-xs px-3 py-2 gap-3": size == "sm",
        "text-xs px-3.5 py-2.5 gap-3": size == "md",
        "w-full": block,
        "rounded-full": pill,
        ["rounded-md"]: !pill,
        [`${className}`]: className,
    });
    return tagName ? (
        <tagName ref={ref} onClick={onClick} className={compClass}>
            {children}
        </tagName>
    ) : as === "Link" ? (
        <Link ref={ref} className={compClass} to={to}>
            {children}
        </Link>
    ) : href ? (
        <a ref={ref} onClick={onClick} className={compClass} href={href}>
            {children}
        </a>
    ) : (
        <button ref={ref} onClick={onClick} className={compClass}>
            {children}
        </button>
    );
})

export default Button;
