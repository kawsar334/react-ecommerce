import { NavLink } from "react-router-dom"
import "./login.scss"

const Login = () => {
  return (
    <div className="login">
      <div className="loginWrapper">
        <form action="" className="loginForm">
          <h1>Login </h1>

          <input type="text" name="" id="" placeholder="Enter username " />
          <input type="password" name="password" id="" placeholder="Password " />
          <button>Login</button>
          <p>
            Already have an account ?
            <NavLink to="/register">Register </NavLink >
          </p>
        </form>
      </div>
    </div>
  )
}

export default Login