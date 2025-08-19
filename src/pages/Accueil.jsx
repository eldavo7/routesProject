// Fichier : src/pages/Accueil.jsx
import { Link } from 'react-router-dom';

const Accueil = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-80px)] p-8 text-center bg-gray-900 text-white">
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-teal-400 to-blue-500">
        Bienvenue !
      </h1>
      <p className="text-lg sm:text-xl md:text-2xl font-light max-w-2xl mb-8">
        Explorez un monde de films, séries, mangas, et jeux.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full max-w-4xl">
        <Link to="/films" className="bg-gray-800 hover:bg-teal-500 transition-colors duration-300 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Films</h2>
        </Link>
        <Link to="/series" className="bg-gray-800 hover:bg-blue-500 transition-colors duration-300 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Séries</h2>
        </Link>
        <Link to="/manga" className="bg-gray-800 hover:bg-purple-500 transition-colors duration-300 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Manga</h2>
        </Link>
        <Link to="/jeux" className="bg-gray-800 hover:bg-orange-500 transition-colors duration-300 p-6 rounded-xl shadow-md">
          <h2 className="text-xl font-semibold">Jeux</h2>
        </Link>
      </div>
    </div>
  );
};

export default Accueil;