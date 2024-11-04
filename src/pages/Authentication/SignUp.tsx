import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../images/logo/cyberpeace.svg';


const SignUp: React.FC = () => {
  return (
    <>
      {/* {<Breadcrumb pageName="Sign Up" />}  */}
      <div className="min-h-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: "linear-gradient(to right, #1663bb, #2485a0, #1a2f47)" }}>
        <div className="bg-gray-800 bg-opacity-90 p-6 rounded-lg shadow-lg w-full max-w-xs md:max-w-md text-white">
          <div className="flex justify-center items-center mb-4">
            <img src={Logo} alt="Cyberpeace Logo" className="w-16 h-auto md:w-20" />
          </div>
          <h2 className="text-xl font-bold mb-4 text-center md:text-2xl">Create Account</h2>
          <form action="#">
            <label htmlFor="fullname" className="block text-sm mb-2 text-gray-300">Full Name</label>
            <input
              type="text"
              id="fullname"
              name="fullname"
              placeholder="Enter your full name"
              className="w-full p-2 mb-4 rounded-md bg-gray-700 border-none text-white placeholder-gray-400"
            />

            <label htmlFor="email" className="block text-sm mb-2 text-gray-300">Email</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              className="w-full p-2 mb-4 rounded-md bg-gray-700 border-none text-white placeholder-gray-400"
            />

            <label htmlFor="password" className="block text-sm mb-2 text-gray-300">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              placeholder="Enter your password"
              className="w-full p-2 mb-4 rounded-md bg-gray-700 border-none text-white placeholder-gray-400"
            />

            <label htmlFor="confirm-password" className="block text-sm mb-2 text-gray-300">Confirm Password</label>
            <input
              type="password"
              id="confirm-password"
              name="confirm-password"
              placeholder="Confirm your password"
              className="w-full p-2 mb-6 rounded-md bg-gray-700 border-none text-white placeholder-gray-400"
            />

            <button type="submit" className="w-full p-3 bg-blue-500 rounded-md text-white font-semibold hover:bg-blue-600 transition duration-300">
              Sign Up
            </button>
          </form>
          <p className="text-center text-gray-400 mt-4 md:mt-6">
            <Link to="/" className="text-primary">
              Already have an account? <a href="#" className="text-blue-400 hover:underline">Log In</a>
            </Link>
          </p>
        </div>
      </div>
    </>
  );
};

export default SignUp;
