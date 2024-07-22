import React from "react";

const Input = ({
  inputType,
  inputName,
  inputPlaceholder,
  inputValue,
  inputId,
  inputOnChange,
  labelText,
  formType,
}) => {
  return (
    <div className="w-full py-3 flex flex-col items-center justify-start ">
      <div className="w-full flex items-center justify-between px-1 mb-2">
        <label
          form={inputId}
          className="w-full text-left text-[#475569] capitalize font-serif text-[12px] font-bold"
        >
          {labelText}
        </label>
        {inputType === "password" && formType !== "registration" ? (
          <span className="font-sans text-[#2563EB] hover:text-[#6b8cd8] text-[14px] font-semibold capitalize cursor-pointer">
            forgot
          </span>
        ) : (
          ""
        )}
      </div>
      <input
        type={inputType}
        name={inputName}
        placeholder={inputPlaceholder}
        value={inputValue}
        id={inputId}
        onChange={inputOnChange}
        className="w-full h-[35px] focus:focus:outline-[#2563EB] placeholder:text-[#475569] placeholder:text-sm placeholder:capitalize focus:outline-1 focus:border-none border-[#E4EAF1] border-[1px] focus:ring rounded-md"
      />
    </div>
  );
};

export default Input;
