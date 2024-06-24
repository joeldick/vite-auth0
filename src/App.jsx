import { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import './App.css'

function App() {
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();

  return (
    <>
      <h1>Welcome to Joel Cato's Website</h1>
      <div className="login-logout-buttons">
        {!isAuthenticated ? (
          <div>
          <button className='login-button' onClick={() => loginWithRedirect()}>
            Log In
          </button>
          <p>Please log in.</p>  
          </div>
        ) : (
          <div>
          <button className='logout-button' onClick={() => logout({ returnTo: window.location.origin})}>
            Log Out
          </button>
          <p>Hi {user.name}. You are logged in.</p>
          </div>
        )}
      </div>
    </>
  )
}

export default App
