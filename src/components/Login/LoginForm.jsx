import { useState } from "react";
import RegisterForm from "./RegisterForm";

/* importações para estilização */
import { motion, AnimatePresence } from "framer-motion";
import "../../styles/login.css";

/* importações do firebase */
import { auth } from "../../services/firebaseConfig";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";

/* importações de componentes */
import useUsers from "../../modules/login/AuthData";

//ICONS
import { CiUser } from "react-icons/ci";
import { RiLockPasswordLine } from "react-icons/ri";

const LoginForm = () => {
  /* estado registro */
  const [isRegistering, setisRegistering] = useState(false);
  /* estado email  */
  const [email, setEmail] = useState("");
  const [emailExist, setEmailExist] = useState(false);
  /* estado password */
  const [password, setPassword] = useState("");
  const [loginError, setLoginError] = useState(false);

  /* estado para exibir mensagem */
  const [showEmailMessage, setShowEmailMessage] = useState(false);
  /* acessando usuários */
  const users = useUsers();

  /* adicionando funções do firebase*/
  const [signInWithEmailAndPassword, userAuth, loadingSignIn, signInError] =
    useSignInWithEmailAndPassword(auth);

    

  /* verificação de email*/
  const handleEmailChange = (e) => {
    const inputEmail = e.target.value;
    setEmail(inputEmail);
    setShowEmailMessage(false);

    const exist = users.some((user) => user.email === inputEmail);
    setEmailExist(exist);
  };

  /* Função para Sign In */
  const handleSignIn = async (e) => {
    e.preventDefault();
    setShowEmailMessage(true);

    if (emailExist) {
      alert("Este email já está registrado");
      return;
    }

    //verifica erro de login
    try {
      await signInWithEmailAndPassword(email, password);
      alert("Login bem-sucedido");
    } catch (error) {
      setLoginError(error.message);
    }

    signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="flex items-center h-full justify-center">
      {/* criando transição de slide e mudança de login para logout */}
      <AnimatePresence mode="wait">
        {isRegistering ? (
          /* ao confirmar true retorna componente de registro */
          <motion.div
            key="register"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <RegisterForm />
            {/* botão para voltar ao componente de login */}
            <button
              onClick={() => setisRegistering(false)}
              className="w-full mt-5"
            >
              Back to Login
            </button>
          </motion.div>
        ) : (
          /* caso 'false' retorna login */
          <motion.div
            key="login"
            initial={{ x: "-100%", opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 0 }}
            transition={{ duration: 0.5 }}
            className="flex-col flex items-center gap-6"
          >
            <h1 className="text-4xl font-bold mb-10">Sign In</h1>
            <div className="flex-col flex gap-5">
              <div className="flex items-center justify-end">
                <input
                  type="email"
                  placeholder="Email"
                  className="inputLogin"
                  value={email}
                  onChange={handleEmailChange}
                />
                <CiUser className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
              </div>
              {/* mensagem para email não registrado */}
              {showEmailMessage && !emailExist && (
                <p className="text-sm text-red-600">Email não registrado</p>
              )}
              <div className="flex items-center justify-end">
                <input
                  type="password"
                  placeholder="Password"
                  className="inputLogin"
                  onChange={(e) => setPassword(e.target.value)}
                />
                <RiLockPasswordLine className="text-2xl absolute bg-primaryColor rounded-r-sm mr-2" />
              </div>
              {loginError && <p>{loginError}</p>}
            </div>
            <div className="cursor-pointer text-sm mb-3">
              Forgot your password?{" "}
            </div>
            <button
              className="bg-buttonColor p-5 w-80 rounded-md hover:bg-blue-500"
              onClick={handleSignIn}
            >
              Sign in
            </button>
            <br></br>
            <span>Dont have an account?</span>
            {/* botão para chamar componente de registro */}
            <button
              onClick={() => setisRegistering(true)}
              className="text-sm italic underline"
            >
              Register now
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LoginForm;
