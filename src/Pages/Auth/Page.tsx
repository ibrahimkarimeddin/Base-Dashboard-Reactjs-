import React, { useEffect } from 'react'
import LoginForm from './LoginForm';
import { LoginBg } from '../../Layout/app/Const';
import useAuthState from '../../lib/state mangment/AuthState';
import { useNavigate } from 'react-router-dom';
const Auth = () => {

  const { isAuthenticated } = useAuthState();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/')
    }
  }, [])

  return (
    <div className='Auth' style={{ background: `url(${LoginBg})` }}>
      <div className='In_Auth'>
        <div className="Left_Col">
          <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
                className="img-fluid"
                alt="Phone"
              
              />
        </div>
        <div className=" Right_Col ">
          <LoginForm />
        </div>
      </div>

    </div>
  )
}

export default Auth