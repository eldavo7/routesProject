// Fichier : src/components/Navbar.jsx
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-950 text-white p-4 sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-teal-400">
          MonApp
        </Link>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
            </svg>
          </button>
        </div>
        <ul className={`md:flex md:space-x-8 items-center text-lg ${isOpen ? 'flex flex-col space-y-4 mt-4 md:mt-0 w-full md:w-auto absolute md:static top-16 left-0 bg-gray-950 p-4 md:p-0' : 'hidden'}`}>
          <li>
            <Link to="/" className="hover:text-teal-400 transition-colors duration-300 p-2 md:p-0 block">Accueil</Link>
          </li>
          <li>
            <Link to="/films" className="hover:text-teal-400 transition-colors duration-300 p-2 md:p-0 block">Films</Link>
          </li>
          <li>
            <Link to="/series" className="hover:text-teal-400 transition-colors duration-300 p-2 md:p-0 block">Séries</Link>
          </li>
          <li>
            <Link to="/manga" className="hover:text-teal-400 transition-colors duration-300 p-2 md:p-0 block">Manga</Link>
          </li>
          <li>
            <Link to="/jeux" className="hover:text-teal-400 transition-colors duration-300 p-2 md:p-0 block">Jeux</Link>
          </li>
          <li className="mt-4 md:mt-0 md:ml-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 w-full md:w-auto">
              Connexion
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;