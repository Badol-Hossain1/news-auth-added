import { Link } from 'react-router-dom';
import Navbar from '../../components/Navbar';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const handleRegister = (e) => {
    e.preventDefault();
    const from = new FormData(e.currentTarget);
    const name = from.get('name');
    const photo = from.get('photo');
  
    const email = from.get('email');
  
    const password = from.get('password');

    // create user
    createUser(email, password)
      .then((res) => console.log(res.user))
      .catch((error) => console.log(error));
  };
  return (
    <div>
      <div>
        <Navbar></Navbar>
        <div>
          <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col w-2/6 ">
              <div className="text-center lg:text-left">
                <h1 className="text-5xl font-bold">Register now!</h1>
              </div>
              <div className="card bg-base-100 w-full  shrink-0 shadow-2xl">
                <form onSubmit={handleRegister} className="card-body w-full">
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">name</span>
                    </label>
                    <input
                      type="text"
                      placeholder="name"
                      name="name"
                      className="input input-bordered"
                      required
                    />
                  </div>
                  <div className="form-control">
                    <label className="label">
                      <span className="label-text">photo</span>
                    </label>
                    <input
                      type="text"
                      placeholder="photo url"
                      name="photo"
                      className="input input-bordered"
                      required
                    />
                  </div>
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
                  </div>
                  <div className="form-control mt-6">
                    <button className="btn btn-primary">Login</button>
                  </div>
                </form>
                <p className="text-center text-2xl">
                  already have an account
                  <Link to="/login" className="btn text-2xl btn-link">
                    login
                  </Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
