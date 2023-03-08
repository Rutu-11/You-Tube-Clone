import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { login } from '../../Redux/Actions/Auth.Action'
import './LoginScreen.scss'
import {useNavigate}  from 'react-router-dom';
const LoginScreen = () => {
  const dispatch = useDispatch();

  const accessToken = useSelector((store)=>{
    return store.auth.accessToken
  })
  console.log(accessToken);
  const handleLogin = ()=>{
    dispatch(login());
  }

  const navigate = useNavigate()
  useEffect(()=>{
    if(accessToken){
       navigate('/');
    }
  },[accessToken, navigate])
  return (
    <div className="login">
        <div className="login__container">
            <img src="https://cdn.pixabay.com/photo/2016/11/19/03/08/youtube-1837872_1280.png" alt="logo" />
            <button onClick={handleLogin} >Login with Google</button>
            <p>This Project is made using You_Tube API</p>
            </div>
    </div>
  )
}

export default LoginScreen
