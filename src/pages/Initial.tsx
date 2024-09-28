// src/App.tsx
import React from 'react';
import { FiMenu, FiBell, FiMapPin, FiCalendar, FiArrowRightCircle } from 'react-icons/fi'; // Importando ícones

const Initial: React.FC = () => {
    return (
        <div className="relative flex flex-col items-center min-h-screen bg-gray-100">
            {/* Header */}
            <header className="w-full flex justify-between items-center p-4 bg-white shadow-md">
                <FiMenu size={24} className="text-gray-600" /> {/* Ícone do menu */}
                <div className="flex items-center">
                    <img src={`images/logo.svg`} alt="Logo CaronasJF" className="h-10" />
                    <span className="font-semibold text-lg text-gray-700">CaronasJF</span>
                </div>
                <FiBell size={24} className="text-gray-600" /> {/* Ícone de notificação */}
            </header>

            {/* Banner de Carona */}
            <div className="w-full bg-mainPrimary text-white py-8 text-center rounded-b-lg shadow-md">
                <h2 className="text-lg font-semibold mb-2">Viagens com preços mais baixos</h2>
                <p>para você que mora em Juiz de Fora e região</p>
            </div>

            {/* Formulário de Solicitação */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mt-4">
                <form>
                    <div className="mb-4">
                        <label htmlFor="ponto-partida" className="block text-gray-700">Escolha o seu ponto de partida:</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                            <FiMapPin size={20} className="text-gray-600 mr-2" /> {/* Ícone de localização */}
                            <input
                                type="text"
                                id="ponto-partida"
                                className="w-full focus:outline-none"
                                placeholder="Digite o ponto de partida"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="destino" className="block text-gray-700">Escolha o seu destino:</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                            <FiArrowRightCircle size={20} className="text-gray-600 mr-2" /> {/* Ícone de seta */}
                            <input
                                type="text"
                                id="destino"
                                className="w-full focus:outline-none"
                                placeholder="Digite o destino"
                            />
                        </div>
                    </div>
                    <div className="mb-4">
                        <label htmlFor="data" className="block text-gray-700">Data:</label>
                        <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2 mt-1">
                            <FiCalendar size={20} className="text-gray-600 mr-2" /> {/* Ícone de calendário */}
                            <input
                                type="date"
                                id="data"
                                className="w-full focus:outline-none"
                            />
                        </div>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-mainPrimary text-white py-2 rounded-lg font-semibold transition-colors"
                    >
                        Pedir Carona
                    </button>
                </form>
            </div>

            {/* Histórico de Caronas */}
            <div className="bg-white p-4 rounded-lg shadow-lg w-full max-w-md mt-4">
                <h3 className="text-lg font-semibold text-gray-700 mb-4">Histórico de caronas</h3>
                <ul>
                    <li className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <FiArrowRightCircle size={20} className="text-gray-600 mr-2" />
                            <span>Bairro A → Bairro B</span>
                        </div>
                        <span className="text-gray-500">XX/XX/XXXX</span>
                    </li>
                    <li className="flex justify-between items-center mb-4">
                        <div className="flex items-center">
                            <FiArrowRightCircle size={20} className="text-gray-600 mr-2" />
                            <span>Bairro A → Bairro B</span>
                        </div>
                        <span className="text-gray-500">XX/XX/XXXX</span>
                    </li>
                    <li className="flex justify-between items-center">
                        <div className="flex items-center">
                            <FiArrowRightCircle size={20} className="text-gray-600 mr-2" />
                            <span>Bairro A → Bairro B</span>
                        </div>
                        <span className="text-gray-500">XX/XX/XXXX</span>
                    </li>
                </ul>
            </div>

            {/* Navegação Inferior */}
            <nav className="fixed bottom-0 left-0 right-0 bg-white py-2 shadow-md flex justify-around">
                <button className="text-mainPrimary">
                    <FiMapPin size={24} />
                    <span className="text-xs">Início</span>
                </button>
                <button className="text-gray-500">
                    <FiArrowRightCircle size={24} />
                    <span className="text-xs">Viagens</span>
                </button>
                <button className="text-gray-500">
                    <FiCalendar size={24} />
                    <span className="text-xs">Histórico</span>
                </button>
            </nav>
        </div>
    );
};

export default Initial;
