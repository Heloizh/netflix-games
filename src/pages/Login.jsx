import React, { useState } from "react";
import "../styles/login.css";

//Importação de componentes reutilizáveis
import BackgroundLogin from "../components/BackgroundLogin";
import Logo from "../components/Logo";
import LoginForm from "../components/LoginForm";

//Componentes de Login que exibe a tela inicial do app
const Login = () => {

  return (
    <div>
      <BackgroundLogin>
        <div className="absolute">
          {/* Exibe o logo do aplicativo */}  
          <Logo />
          <div className="flex">
            <div className="p-10 md:mt-16 md:p-20">
              {/* Título principal da tela de login */}  
              <h1 className="text-5xl md:text-6xl">Welcome to Arcadia</h1>

              {/* Descrição do aplicativo */}
              <h5 className="text-xs mt-10 mr-56 md:mr-16 md:text-xl">
              Discover a world where gaming knows no limits. From timeless classics to the latest releases, Arcadia brings you the best in entertainment. Dive into a universe of adventures, challenges, and endless fun. Are you ready to play?
              </h5>
              {/* Chamada para ação para criar uma conta */}
              <h6 className="font-bold md:mt-8 text-sm md:text-base">Create Your Free Account & Start Playing</h6>
            </div>
            {/* Seção para exibir o formulário de login */}
            <div className="container-login md:-mt-10 md:mr-12">
              <LoginForm/>
            </div>
          </div>
        </div>
      </BackgroundLogin>
    </div>
  );
};

export default Login;
