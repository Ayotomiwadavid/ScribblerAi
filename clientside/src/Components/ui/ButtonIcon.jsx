import React from "react";
import classNames from "classnames";
import { Link } from "react-router-dom";

const ButtonIcon = React.forwardRef(({children,
    size,
    circle,
    className,
    tagName,
    as,
    to,
    href,
    onClick,}, ref) => {
    const compClass = classNames({
        "inline-flex justify-center items-center transition-all": true,
        "p-3": !size,
        "p-1": size === "xs",
        "p-2": size === "sm",
        "p-2.5": size === "md",
        "rounded-full": circle,
        ["rounded-md"]: !circle,
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

export default ButtonIcon;
