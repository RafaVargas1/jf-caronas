import { Link } from "react-router-dom";

export function Dashboard() {
  return (
    <section className="flex flex-col items-center justify-center h-screen bg-gray-100">
      <div className="absolute top-0 right-0 p-4">
        <Link
          to="/login"
          className="text-sm font-semibold text-white bg-blue-500 px-4 py-2 rounded-lg hover:bg-blue-600"
        >
          Login
        </Link>
      </div>
      <h1 className="text-4xl font-bold text-gray-800 mb-4">
        Bem-Vindo ao JF-Caronas
      </h1>
      <p className="text-lg text-gray-600 text-center">
        Um aplicativo de transporte exclusivo para Juiz de Fora, com taxas justas para motoristas e em parceria com a prefeitura.
      </p>
    </section>
  );
}
