import loginImg from "../../assets/images/login/login.svg";
import {useContext} from "react"
import {Link } from "react-router-dom"
import { AuthContext } from "../../assets/Providers/AuthProvider";
import {useLocation, useNavigate} from "react-router-dom"
import axios from './../../../node_modules/axios/lib/axios';
const Login = () => {
  const {login} = useContext(AuthContext)
  const location = useLocation()
  const navigate = useNavigate()
  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);
    login(email,password)
    .then(result=>{
      
      const loggedInUser = result.user
      console.log(loggedInUser)
      const user = {email}
      // navigate(location?.state ? location?.state : "/")
      axios.post("http://localhost:5000/jwt",user)
      .then(res=>{
        console.log(res.data)
      })
    })
    .catch(error=>{
      console.error(error.message)
    })
  };
  return (
    <div className="hero  min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <div className=" w-1/2 mr-20">
          <img src={loginImg} alt="" />
        </div>
        <div className="card bg-base-100  max-w-sm shrink-0 shadow-2xl w-1/2">
          <div className="card-body">
            <h1 className="text-5xl font-bold">Sign In </h1>
            <form onSubmit={handelLogin}>
              <fieldset className="fieldset">
                <label className="label">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input"
                  placeholder="Email"
                />
                <label className="label">Password</label>
                <input
                  type="password"
                  name="password"
                  className="input"
                  placeholder="Password"
                />

                <button className="btn bg-[#FF3811] text-white mt-4">
                  Sign In
                </button>
              </fieldset>
            
            </form>
            <p>New to car Doctors <Link to="/SignUp" className="text-orange-600 font-bold"> Sign Up</Link></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
