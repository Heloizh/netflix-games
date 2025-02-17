import React from 'react'
import "../../styles/login.css"
import background_login from "../../assets/background_login.png"

const BackgroundLogin = ({ children }) => {
  return (
    <div>
      <img src={background_login} alt="capa da página login" className="background-image" />
      {children}
    </div>
  )
}

export default BackgroundLogin
