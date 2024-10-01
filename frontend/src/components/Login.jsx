import React from 'react'
import {GoogleLogin} from '@react-oauth/google'
import { useNavigate } from 'react-router-dom';
import {FcGoogle} from 'react-icons/fc';
import shareVideo from '../assets/share.mp4';
import logo2 from '../assets/logo2.png';

const Login = () => {

  const responseGoogle=(response)=>{

  }
  return (
    <div className='flex justify-start items-center flex-col h-screen'>
      <div className='relative w-full h-full'>
        <video
        src={shareVideo}
        type="video/mp4"
        loop
        controls={false}
        muted
        autoPlay
        className='w-full h-full object-cover'
        />
        <div className='absolute flex flex-col justify-center items-center top-0 right-0 left-0 bottom-0 bg-blackOverlay'>
          <div className='p-5'>
            <img src={logo2} width='130px' alt='logo' />
          </div>
          <div className='shadow-2xl'>
            <GoogleLogin 
            clientId='538022880194-952vo2gfl1se5cvh4ql7gm400qsnvn15.apps.googleusercontent.com'
            render={(renderProps)=>{
              <button 
              type='button'
              className='bg-mainColor justify-center items-center p-3 rounded-lg cursor-pointer outline-none'
              onClick={renderProps.onClick}
              disabled={renderProps.disabled}
              >
                <FcGoogle
                className='mr-4'
                />
                Sign in with Google
              </button>
            }}
            onSuccess={responseGoogle}
            onFailure={responseGoogle}
            cookiePolicy="single-post-origin"
            />
          </div>
        </div>
      </div>
    </div>  )
}

export default Login