import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Credenciales hardcodeadas para validación de usuario
  const validEmail = 'admin@example.com';
  const validPassword = 'Password123';

  const handleSignIn = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === validEmail && password === validPassword) {
      // Navegar al dashboard si las credenciales son correctas
      navigate('/dashboard');
    } else {
      alert('Invalid email or password');
    }
  };

  return (
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-br from-[#1663bb] via-[#2485a0] to-[#1a2f47] p-4 lg:p-12">
        {/* Login Wrapper */}
        <div className="w-full lg:w-2/5 p-8 bg-[#2c3e50] text-white flex flex-col items-center justify-center shadow-lg h-auto min-h-[350px] rounded-lg lg:rounded-l-lg z-10">
          <div className="text-center">
            <h2 className="text-xl lg:text-2xl mb-3 lg:mb-4">
              Welcome <span className="text-[#1663bb]">Back</span>
            </h2>
            <p className="text-[#bdc3c7] mb-6 lg:mb-8">Sign in to your account</p>
            <form onSubmit={handleSignIn} className="w-full">
              <input
                type="email"
                id="email"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
                required
                className="w-full p-3 lg:p-4 mb-4 bg-[#34495e] text-white text-base lg:text-lg rounded placeholder-[#7f8c8d] focus:outline-none"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
                required
                className="w-full p-3 lg:p-4 mb-4 bg-[#34495e] text-white text-base lg:text-lg rounded placeholder-[#7f8c8d] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full p-3 lg:p-6 text-base lg:text-lg font-bold bg-[#2d80df] text-white rounded hover:bg-[#27ae60] transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* Company Info Wrapper */}
        <div className="w-full lg:w-2/5 xl:w-1/3 p-4 bg-[#ecf0f1] text-[#333333] flex flex-col items-center justify-center rounded-lg lg:rounded-r-lg shadow-lg lg:shadow-2xl h-auto min-h-[250px] lg:min-h-[550px] mt-4 lg:mt-0 relative z-20">
          <div className="text-center">
            <h2 className="text-lg lg:text-xl mb-2 lg:mb-3">
              Cyberpeace <span className="text-[#2d80df]">Company</span>
            </h2>
            <p className="text-[#666666] mb-3 lg:mb-4 text-sm lg:text-base">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate minus reprehenderit ex voluptates deleniti beatae ea, ratione provident soluta sint debitis facere quibusdam necessitatibus.
            </p>
            <p className="mb-3 lg:mb-4 text-sm lg:text-base">
              New User? <a href="/auth/signup" className="text-[#2d80df] font-bold hover:underline">Sign Up</a>
            </p>
            <div className="mt-4 lg:mt-5 flex justify-center items-center">
              <img src={Logo} alt="Decorative image" className="max-w-[50%]" />
            </div>
          </div>
        </div>
      </div>
  );
};

export default SignIn;


