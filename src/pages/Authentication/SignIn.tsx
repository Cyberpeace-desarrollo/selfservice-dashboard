import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Logo from '../../images/logo/logo.png';

const SignIn: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  // Credenciales hardcodeadas para validación
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
    <div className="flex items-center justify-center h-screen bg-gradient-to-br from-[#1663bb] via-[#2485a0] to-[#1a2f47] p-80">      
        {/* Login Wrapper */}
        <div className="w-3/5 p-12 bg-[#2c3e50] text-white flex items-center justify-center flex-col shadow-lg  h-auto min-h-[350px] rounded-l-lg z-10">
          <div className="text-center">
            <h2 className="text-2xl mb-4">
              Welcome <span className="text-[#1663bb]">Back</span>
            </h2>
            <p className="text-[#bdc3c7] mb-8">Sign in to your account</p>
            <form>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Email"
                required
                className="w-full p-4 mb-5 bg-[#34495e] text-white text-lg rounded placeholder-[#7f8c8d] focus:outline-none"
              />
              <input
                type="password"
                id="password"
                name="password"
                placeholder="Password"
                required
                className="w-full p-4 mb-5 bg-[#34495e] text-white text-lg rounded placeholder-[#7f8c8d] focus:outline-none"
              />
              <button
                type="submit"
                className="w-full p-4 text-lg font-bold bg-[#2d80df] text-white rounded hover:bg-[#27ae60] transition-colors"
              >
                Sign In
              </button>
            </form>
          </div>
        </div>

        {/* Company Info Wrapper */}
        <div className="w-3/5 p-16 bg-[#ecf0f1] text-[#333333] flex items-center justify-center flex-col rounded-r-lg shadow-2xl min-h-[520px] relative z-20" style={{border:"1px solid red"}}>
          <div className="text-center">
            <h2 className="text-2xl mb-4">
              Cyberpeace <span className="text-[#2d80df]">Company</span>
            </h2>
            <p className="text-[#666666] mb-6">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni voluptate minus reprehenderit ex voluptates deleniti beatae ea, ratione provident soluta sint debitis facere quibusdam necessitatibus.
            </p>
            <p className="mb-4">
              New User? <a href="#" className="text-[#2d80df] font-bold hover:underline">Sign Up</a>
            </p>
            <div className="mt-5 flex justify-center items-center">
              <img src={Logo} alt="Imagen decorativa" className="max-w-[65%]" />
            </div>
          </div>
        </div>
    </div>
  );
};

export default SignIn;


