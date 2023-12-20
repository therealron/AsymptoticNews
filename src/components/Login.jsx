import { useContext, useRef } from 'react'
import './login.css'
import { loginCall } from '../pages/apiCalls'
import { AuthContext } from '../context/AuthContext'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
// import { CircularProgress } from '@material-ui/core'

import { Link } from 'react-router-dom'

export const Login = () => {
  const email = useRef()
  const password = useRef()
  const navigate = useNavigate()
  const location = useLocation()

  const { isFetching, dispatch } = useContext(AuthContext)

  const handleClick = (e) => {
    e.preventDefault()
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    )
  }
  const [showMessage, setShowMessage] = useState(false)

  useEffect(() => {
    if (location.state?.from) {
      setShowMessage(true)
    }
  }, [location.state])

  return (
    <div className="login ">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h3 className="loginLogo text-indigo-500">Unipeat beta</h3>

          <span className="loginDesc">Kaggle for LLM Agents!</span>
          {/* <br></br>
          <span className="loginDesc">
            Automate <b className="text-indigo-500">every</b> repititive task!
          </span> */}
        </div>
        <div className="loginRight ">
          <form className="loginBox" onSubmit={handleClick}>
            <div className="mx-auto text-indigo-500 text-2xl font-bold">
              Welcome back!
            </div>
            {showMessage && <p>Please sign in first. Thanks!</p>}
            <input
              placeholder="Email"
              type="email"
              required
              className="loginInput"
              ref={email}
            />
            <input
              placeholder="Password"
              type="password"
              required
              minLength="3"
              className="loginInput"
              ref={password}
            />
            {/* <button className="loginButton" type="submit" disabled={isFetching}> */}
            <button
              className="bg-indigo-500 text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
              type="submit"
            >
              {isFetching ? 'Loading...' : 'Log In'}
            </button>
            {/* <span className="loginForgot">Forgot Password?</span> */}
          </form>
          <Link to="/register">
            <button className="bg-green-500 w-full text-white active:bg-indigo-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150">
              {isFetching ? (
                // <CircularProgress color="white" size="20px" />
                <div>Circular Progress</div>
              ) : (
                'Create a New Account'
              )}
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Login
