// src/App.tsx
import React, { useState } from 'react';
import { FiArrowLeft } from 'react-icons/fi'; // Importando o ícone de seta

const Register: React.FC = () => {
    const [step, setStep] = useState(1);

    const handleBack = () => {
        if (step === 2) {
            setStep(1); // Volta para o primeiro passo ao clicar na seta de retorno
        }
    };

    return (
        <div className="relative flex items-center justify-center min-h-screen bg-gray-100">
            {/* Seta de retorno */}


            <div className="relative bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
                {/* Logo */}
                {step === 2 && (
                    <button onClick={handleBack} className="absolute top-4 left-4 text-gray-600 hover:text-gray-800">
                        <FiArrowLeft size={24} /> {/* Ícone de seta */}
                    </button>
                )}
                <a href="/" className="flex justify-center mb-4">
                    <img src={`images/logo.svg`} alt="Logo CaronasJF" className="h-16" />
                </a>
                <h2 className="text-center text-xl font-semibold text-gray-700 mb-2">Insira seus dados para se cadastrar</h2>
                <p className="text-center text-sm text-gray-500 mb-4">{step === 1 ? '1/2' : '2/2 -- Opcional --'}</p>

                {step === 1 ? (
                    <form>
                        <div className="mb-4">
                            <label htmlFor="cpf" className="block text-gray-700">CPF:</label>
                            <input
                                type="text"
                                id="cpf"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu CPF"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="nome" className="block text-gray-700">Nome:</label>
                            <input
                                type="text"
                                id="nome"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu nome"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700">E-mail ou número de telefone:</label>
                            <input
                                type="text"
                                id="email"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite seu e-mail ou telefone"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="senha" className="block text-gray-700">Senha:</label>
                            <input
                                type="password"
                                id="senha"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite sua senha"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="confirmar-senha" className="block text-gray-700">Confirmar senha:</label>
                            <input
                                type="password"
                                id="confirmar-senha"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Confirme sua senha"
                            />
                        </div>

                        {/* Botão de próximo */}
                        <button
                            type="button"
                            onClick={(e) => { e.preventDefault(); setStep(2) }}
                            className="w-full bg-mainPrimary text-white py-2 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                        >
                            Próximo
                        </button>
                    </form>
                ) : (
                    <form>
                        <div className="mb-4">
                            <label htmlFor="placa" className="block text-gray-700">Placa:</label>
                            <input
                                type="text"
                                id="placa"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite a placa do carro"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="marca" className="block text-gray-700">Marca:</label>
                            <input
                                type="text"
                                id="marca"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite a marca do carro"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="modelo" className="block text-gray-700">Modelo:</label>
                            <input
                                type="text"
                                id="modelo"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite o modelo do carro"
                            />
                        </div>
                        <div className="mb-4">
                            <label htmlFor="cor" className="block text-gray-700">Cor:</label>
                            <input
                                type="text"
                                id="cor"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="Digite a cor do carro"
                            />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="foto-carro" className="block text-gray-700">Inserir Foto do Carro:</label>
                            <input
                                type="file"
                                id="foto-carro"
                                className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Botão de registrar */}
                        <button
                            type="submit"
                            className="w-full bg-mainPrimary text-white py-2 rounded-lg font-semibold transition-colors"
                        >
                            Registrar
                        </button>
                    </form>
                )}

                {/* Link para login */}
                <p className="text-center text-sm text-gray-600 mt-6">
                    Já tem uma conta? <a href="/login" className="text-blue-500">Fazer Login</a>
                </p>
            </div>
        </div>
    );
}

export default Register;
