import React, {useState} from 'react'
import './LoginSignup.css'
import user_icon from '../Assets/person.png'
import email_icon from '../Assets/email.png'
import password_icon from '../Assets/password.png'

const LoginSignup = () => {

    const [action, setAction] = useState("Registrarse")

  return (
    <div className = 'container'>
        <div className = 'header'>
            <div className='text'>{action}</div>
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            {action === "Ingresar"?<div></div>:
                <div className="input">
                    <img src={user_icon} alt=''/>
                    <input type='text' placeholder='Nombres'/>
                </div>
            }
            <div className="input">
                <img src={email_icon} alt=''/>
                <input type='email' placeholder='Correo Electronico'/>
            </div>

            <div className="input">
                <img src={password_icon} alt=''/>
                <input type='password' placeholder='Contraseña'/>
            </div>
            {action==='Registrarse'?<div></div> :
                <div className='forgot-password'>¿Olvidaste tu contraseña? <span>Click Aqui!</span></div>
            }
            <div className='submit-container'>
                <div className={action==='Registrarse'?'submit gray':'submit'} onClick={()=>{setAction("Registrarse")}}>Registrate</div>
                <div className={action==='Ingresar'?'submit gray':'submit'} onClick={()=>{setAction("Ingresar")}}>Ingresar</div>
            </div>
        </div>
    </div>
  )
}

export default LoginSignup
