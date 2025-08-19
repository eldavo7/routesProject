// Fichier : src/App.jsx
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Accueil from './pages/Accueil';
import Films from './pages/Films';
import Series from './pages/Series';
import Manga from './pages/Manga';
import Jeux from './pages/Jeux';

export default function App() {
  return (
    <div className="bg-gray-800 min-h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/films" element={<Films />} />
        <Route path="/series" element={<Series />} />
        <Route path="/manga" element={<Manga />} />
        <Route path="/jeux" element={<Jeux />} />
      </Routes>
    </div>
  );
}