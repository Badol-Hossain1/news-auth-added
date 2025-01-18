import { Link, useLocation, useNavigate } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Login = () => {
  const { signIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    console.log(from.get('email'));
    const email = from.get('email');
    console.log('🚀 ~ handleLogin ~ email:', email);
    const password = from.get('password');
    console.log('🚀 ~ handleLogin ~ password:', password);
    signIn(email, password)
      .then((res) => {
        console.log('🚀 ~ handleLogin ~ res:', res);
        navigate(location?.state ? location.state : '/');
      })
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <Navbar></Navbar>
      <div>
        <div className="hero bg-base-200 min-h-screen">
          <div className="hero-content flex-col ">
            <div className="text-center lg:text-left">
              <h1 className="text-5xl font-bold">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
              <form onSubmit={handleLogin} className="card-body">
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Email</span>
                  </label>
                  <input
                    type="email"
                    placeholder="email"
                    name="email"
                    className="input input-bordered"
                    required
                  />
                </div>
                <div className="form-control">
                  <label className="label">
                    <span className="label-text">Password</span>
                  </label>
                  <input
                    type="password"
                    name="password"
                    placeholder="password"
                    className="input input-bordered"
                    required
                  />
                  <label className="label">
                    <a href="#" className="label-text-alt link link-hover">
                      Forgot password?
                    </a>
                  </label>
                </div>
                <div className="form-control mt-6">
                  <button className="btn btn-primary">Login</button>
                </div>
              </form>
              <p>
                dont have account
                <Link to="/register" className="btn btn-link">
                  register
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
