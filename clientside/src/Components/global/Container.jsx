import React from "react";
import classNames from "classnames";
function Container({ className, children }) {
    const compClass = classNames({
        ["container px-3"]: true,
        [`${className}`]: className,
    });
    return <div className={compClass}>{children}</div>;
}

export default Container;
