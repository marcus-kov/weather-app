import React from "react";

export const Wrapper = ({ children, classNames = "" }) => {
  return (
    <div
      className={`border flex flex-col rounded-md p-3 shadow drop-shadow-md ${classNames}`}
    >
      {children}
    </div>
  );
};
