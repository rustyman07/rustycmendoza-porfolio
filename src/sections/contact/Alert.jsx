import React, { useEffect } from "react";

const Alert = ({ alert, setAlert }) => {
  useEffect(() => {
    const hide = setTimeout(() => {
      setAlert({ show: false, message: "" });
    }, 5000);
    return () => {
      clearTimeout(hide);
    };
  }, []);
  return (
    <div className=" bg-green-200 p-3 shadow-md rounded-sm">
      <p className="text-green-900 text-sm">{alert.message}</p>
    </div>
  );
};

export default Alert;
