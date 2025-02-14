import React from "react";
import "../styles/login.css";

//ICONS
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

const RegisterForm = () => {
  return (
    <div className="flex-col flex gap-5 items-center h-full justify-center">
      <h1 className="text-4xl font-bold md:mb-10 md:mt-10">Create new account</h1>
      <div className="flex-col flex gap-5">
      <div className="flex items-center justify-end">
          <input type="text" placeholder="Name" className="inputLogin" />
          <CiUser className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
        <div className="flex items-center justify-end">
          <input type="email" placeholder="Email" className="inputLogin" />
          <MdOutlineAlternateEmail className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
        <div className="flex items-center justify-end">
          <input
            type="password"
            placeholder="Password"
            className="inputLogin"
          />
          <RiLockPasswordLine className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
        <div className="flex items-center justify-end">
          <input
            type="password"
            placeholder="Confirm your Password"
            className="inputLogin"
          />
          <RiLockPasswordLine className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
      </div>
      <button className="bg-buttonColor p-5 mb-5 w-80 rounded-md hover:bg-blue-500">
        Create account
      </button>
      <span>Already have an account?</span>
    </div>
  );
}

export default RegisterForm
