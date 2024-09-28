import React, { useState, useEffect } from "react";
import { FiMenu, FiBell, FiHome, FiMapPin, FiUser } from "react-icons/fi";
import RideRequest from "../components/RideRequest";

interface PastRide {
    name: string;
    date: string;
    price: string;
    profilePic: string;
}

interface RideRequestProps {
    name: string;
    time: string;
    origin: string;
    destination: string;
    profilePic: string;
}


const pastRides: PastRide[] = [
    { name: "Maria Silva", date: "01/09/2024", price: "R$ 35,00", profilePic: "https://via.placeholder.com/150" },
    { name: "João Oliveira", date: "28/08/2024", price: "R$ 40,00", profilePic: "https://via.placeholder.com/150" },
    { name: "Carlos Sousa", date: "20/08/2024", price: "R$ 25,00", profilePic: "https://via.placeholder.com/150" },
    { name: "Ana Costa", date: "15/08/2024", price: "R$ 30,00", profilePic: "https://via.placeholder.com/150" },
    { name: "Pedro Dias", date: "10/08/2024", price: "R$ 20,00", profilePic: "https://via.placeholder.com/150" },
];


const rideRequestData: RideRequestProps[] = [
    {
        "name": "João Silva",
        "time": "15 min",
        "origin": "Bairro São Mateus",
        "destination": "Bairro Alto dos Passos",
        "profilePic": "https://via.placeholder.com/150"
    },
    {
        "name": "Maria Oliveira",
        "time": "09 min",
        "origin": "Bairro Granbery",
        "destination": "Bairro Cascatinha",
        "profilePic": "https://via.placeholder.com/150"
    },
    {
        "name": "Carlos Souza",
        "time": "18 min",
        "origin": "Bairro Santa Luzia",
        "destination": "Bairro Centro",
        "profilePic": "https://via.placeholder.com/150"
    },
    {
        "name": "Fernanda Costa",
        "time": "07 min",
        "origin": "Bairro São Pedro",
        "destination": "Bairro Aeroporto",
        "profilePic": "https://via.placeholder.com/150"
    },
    {
        "name": "Lucas Ferreira",
        "time": "01:50 hora",
        "origin": "Bairro Benfica",
        "destination": "Bairro Manoel Honório",
        "profilePic": "https://via.placeholder.com/150"
    }
]



const DriverScreen: React.FC = () => {
    const [newRide, setNewRide] = useState(false)
    const [number, setNumber] = useState<number | null>(null);

    useEffect(() => {
        const sortearNumero = () => {
            const randomNum = Math.floor(Math.random() * rideRequestData.length);
            setNumber(randomNum);
            setNewRide(true);
        };

        sortearNumero();
        const intervalId = setInterval(sortearNumero, 15000);

        return () => clearInterval(intervalId);
    }, [rideRequestData.length]);

    useEffect(() => {
        if (!newRide) return;

        const timeoutId = setTimeout(() => {
            setNewRide(false);
        }, 5000);

        return () => clearTimeout(timeoutId);
    }, [newRide]);

    return (
        <div className="min-h-screen bg-gray-100 flex flex-col justify-between">
            {/* Header */}
            <div className="bg-white p-4 shadow-md flex justify-between items-center">
                <button className="text-gray-700 hover:text-gray-900">
                    <FiMenu size={24} />
                </button>
                <div className="text-xl font-bold">CaronasJF</div>
                <button className="text-gray-700 hover:text-gray-900">
                    <FiBell size={24} />
                </button>
            </div>

            {/* Last Trip Info */}
            <div className="bg-blue-100 p-4 m-4 rounded-lg">
                <div className="bg-blue-200 h-40 rounded-lg mb-4 flex items-center justify-center">
                    {/* Placeholder for Map Image */}
                    <p className="text-gray-600">Map Image Here</p>
                </div>
                <p className="text-gray-500">Informações da última viagem feita</p>
                <p className="text-gray-700 text-sm">DD/MM/AAAA - R$ XX,XX</p>
            </div>

            {/* Past Rides List */}
            <div className="flex-1 px-4">
                {pastRides.map((ride, index) => (
                    <div key={index} className="flex items-center bg-white p-4 mb-4 rounded-lg shadow-sm">
                        <img src={ride.profilePic} alt={ride.name} className="w-12 h-12 rounded-full mr-4" />
                        <div>
                            <p className="font-semibold text-gray-700">{ride.name}</p>
                            <p className="text-gray-500 text-sm">{ride.date} - {ride.price}</p>
                        </div>
                    </div>
                ))}
            </div>

            {/* Bottom Navigation */}
            <div className="bg-mainPrimary text-white p-4 flex justify-around items-center">
                <button className="flex flex-col items-center">
                    <FiHome size={24} />
                    <span className="text-xs mt-1">Home</span>
                </button>
                <button className="flex flex-col items-center">
                    <FiUser size={24} />
                    <span className="text-xs mt-1">Motorista</span>
                </button>
                <button className="flex flex-col items-center">
                    <FiMapPin size={24} />
                    <span className="text-xs mt-1">Mapa</span>
                </button>
            </div>

            {newRide && <RideRequest
                name={rideRequestData[number || 0].name}
                time={rideRequestData[number || 0].time}
                origin={rideRequestData[number || 0].origin}
                destination={rideRequestData[number || 0].destination}
                profilePic={rideRequestData[number || 0].profilePic}
            />}
        </div>


    );
};

export default DriverScreen;
