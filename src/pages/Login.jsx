import React from "react";
import "../styles/login.css";

import BackgroundLogin from "../components/BackgroundLogin";
import Logo from "../components/Logo";

const Login = () => {
  return (
    <div>
      <BackgroundLogin>
        <div className="absolute">
          <Logo />
          <div className="flex">
            <div className="p-20 mt-16">
              <h1 className="text-6xl">Welcome to Arcadia</h1>
              <h5 className="text-xl mt-10 mr-16">
              Discover a world where gaming knows no limits. From timeless classics to the latest releases, Arcadia brings you the best in entertainment. Dive into a universe of adventures, challenges, and endless fun. Are you ready to play?
              </h5>
              <h6 className="font-bold mt-8">Create Your Free Account & Start Playing</h6>
            </div>
            <div className="container-login"></div>
          </div>
        </div>
      </BackgroundLogin>
    </div>
  );
};

export default Login;
