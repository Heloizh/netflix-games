import React, { useState } from "react";
import "../../styles/login.css";

/* importações do firebase */
import { auth } from "../../services/firebaseConfig";
import useUsers from "../../modules/login/AuthData";

//ICONS
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";
import { MdOutlineAlternateEmail } from "react-icons/md";

const RegisterForm = () => {
  /* dados do firestore */
  const user = useUsers();
  /* estados */
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  /* logica para inputs */
  /* name */
  const handleName = (e) => {
    const inputName = e.target.value;
    setName(inputName);
  };
  /* email */
  const handleEmail = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
  };
  /* password */
  const handlePassword = (e) => {
    const inputPassword = e.target.value;
    setPassword(inputPassword);
  };
  /* confirm password */

  return (
    <div className="flex-col flex gap-5 items-center h-full justify-center">
      <h1 className="text-4xl font-bold md:mb-10 md:mt-10">
        Create new account
      </h1>
      <div className="flex-col flex gap-5">
        <div className="flex items-center justify-end">
          {/* nome */}
          <input
            type="text"
            placeholder="Name"
            className="inputLogin"
            value={name}
            onChange={handleName}
          />
          <CiUser className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
        <div className="flex items-center justify-end">
          {/* email */}
          <input
            type="email"
            placeholder="Email"
            className="inputLogin"
            value={email}
            onChange={handleEmail}
          />
          <MdOutlineAlternateEmail className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
        <div className="flex items-center justify-end">
          {/* password */}
          <input
            type="password"
            placeholder="Password"
            className="inputLogin"
            value={password}
            onChange={handlePassword}
          />
          <RiLockPasswordLine className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
        </div>
        {/* confirm password */}
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
};

export default RegisterForm;
