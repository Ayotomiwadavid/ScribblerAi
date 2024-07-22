import React from 'react'

const Button = ({buttonType, buttonContent, onClick}) => {
  return (
    <div>
    <input type={buttonType} value={buttonContent} onClick={onClick} className='h-[45px] capitalize font-semibold cursor-pointer text-white my-3 bg-[#2563EB] w-full rounded-md outline-none border-none' />
    </div>
  )
}

export default Button
