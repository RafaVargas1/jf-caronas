import React from 'react';
import { FiArrowLeft } from "react-icons/fi";



const Recover: React.FC = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100 ">


            <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md relative min-h-[500px] flex flex-col justify-center">
                <button onClick={() => window.location.href = '/login'} className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
                    <FiArrowLeft size={24} /> {/* Ícone de seta */}
                </button>
                {/* Logo with Placeholder */}
                <a href="/" className="flex justify-center mb-4">
                    <img src={`images/logo.svg`} alt="Logo CaronasJF" className="h-16" />
                </a>
                <h2 className="text-center text-2xl font-bold text-gray-700 mb-4">CaronasJF</h2>
                <p className="text-center text-gray-600 mb-8">Redefina sua senha e tenha acesso a sua conta</p>

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

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Recover;
