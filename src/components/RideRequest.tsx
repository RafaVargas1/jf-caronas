import React from "react";

interface RideRequestProps {
  name: string;
  time: string;
  origin: string;
  destination: string;
  profilePic: string;
}

const RideRequest: React.FC<RideRequestProps> = ({ name, time, origin, destination, profilePic }) => {
  return (
    <div className="flex items-center justify-center absolute w-full h-full">
      <div className="bg-black opacity-50 absolute bottom-0 w-full h-full z-0"> </div>
      <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-md z-10 bottom-5 absolute" >
        {/* Top Navigation */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-xl font-semibold">CaronasJF</div>
          <button className="text-gray-600 hover:text-gray-800">
            <span className="material-icons">notifications</span>
          </button>
        </div>



        {/* Ride Request Modal */}
        <div className="bg-gray-50 p-4 rounded-lg shadow-md">
          <h4 className="text-lg font-semibold mb-4">Nova solicitação de carona</h4>
          <div className="flex items-center mb-4">
            <img src={profilePic} alt={`${name} profile`} className="w-12 h-12 rounded-full mr-4" />
            <div>
              <p className="text-sm font-medium">{name}</p>
              <p className="text-xs text-gray-500">RS XX,XX - Tempo: {time}</p>
            </div>
          </div>

          <div className="mb-2">
            <p className="text-sm text-gray-700">Origem</p>
            <p className="text-sm text-gray-500">{origin}</p>
          </div>
          <div className="mb-4">
            <p className="text-sm text-gray-700">Destino</p>
            <p className="text-sm text-gray-500">{destination}</p>
          </div>

          {/* Action Buttons */}
          <div className="flex justify-between">
            <button className="bg-lightMainPrimary w-[45%] text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors">
              Recusar
            </button>
            <button className="bg-mainPrimary w-[45%] text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors">
              Aceitar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RideRequest;
