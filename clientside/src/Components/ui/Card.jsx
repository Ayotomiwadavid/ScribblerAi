import React from 'react'
import classNames from 'classnames'

const Card = React.forwardRef(({className, children}, ref) => {
    const compClass = classNames({
        "bg-white dark:bg-slate-950 rounded-md border border-slate-200 dark:border-slate-800":true,
        [`${className}`]: className
    })
  return (
    <div ref={ref} className={compClass}>{children}</div>
  )
})

export default Card