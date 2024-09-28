import React from 'react';
import { FcGoogle } from "react-icons/fc";
import { FaFacebook, FaApple } from "react-icons/fa";



const Login: React.FC = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
        {/* Logo with Placeholder */}
        <a href="/" className="flex justify-center mb-4">
          <img src={`images/logo.svg`} alt="Logo CaronasJF" className="h-16" />
        </a>
        <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">CaronasJF</h2>
        <p className="text-center text-gray-600 mb-8">Faça login para acessar sua conta</p>

        {/* Form */}
        <form>
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">E-mail ou número de telefone</label>
            <input
              type="text"
              id="email"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite seu e-mail ou telefone"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-gray-700">Senha</label>
            <input
              type="password"
              id="password"
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Digite sua senha"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <a href="/recover" className="text-blue-500 text-sm">Esqueceu a senha?</a>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className="w-full bg-mainPrimary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            onClick={(e) => { e.preventDefault(); window.location.href = '/initial' }}
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center justify-between my-6">
          <span className="w-1/5 border-t border-gray-300"></span>
          <span className="px-3 text-gray-500">ou continue com</span>
          <span className="w-1/5 border-t border-gray-300"></span>
        </div>

        {/* Social Login Buttons */}
        <div className="flex justify-center space-x-4">
          <span className="p-2 border border-gray-300 rounded-full">
            <FcGoogle height={24} width={24} />
          </span>
          <span className="p-2 border border-gray-300 rounded-full">
            <FaFacebook height={24} width={24} color='blue' />
          </span>
          <span className="p-2 border border-gray-300 rounded-full">
            <FaApple height={24} width={24} />
          </span>
        </div>


        <p className="text-center text-sm text-gray-600 mt-6">
          Não tem uma conta? <a href="/register" className="text-blue-500">Criar conta</a>
        </p>
      </div>
    </div>
  );
}

export default Login;
