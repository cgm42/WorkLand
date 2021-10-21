import React, { useState } from 'react'

const Login = () => {
  const [user, setUser] = useState<any>({});

  return (

    <div className='app'>
        {user?.name ? (
          <div> {user.name} 
          </div>
        ) : (
          <a href={process.env.REACT_APP_GITHUB_LOGIN}>login with github</a>
          // <a href="https://github.com/login/oauth/authorize?client_id=b0010984d0eaf27b2a38">
          //   login with github
          // </a>
        )}
        <p>
          <a href='/logout'>logout</a>
        </p>
        </div>
  )
}

export default Login
