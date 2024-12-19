// Ecran d'accueil de l'application
// Ce composant prend en props une fonction pour démarrer l'application : onStart

import titre from "../assets/titre.png";
import pereNoel from "../assets/pereNoel.png";

export function WelcomeScreen({ onStart }) {
  return (
    <div className="h-screen bg-bg flex flex-col items-center justify-between pt-20">
      <div className="mb-6">
        <img src={titre} alt="Titre Secret Santa" className="w-80 mx-auto" />
      </div>

      <button
        onClick={onStart}
        className="bg-red text-white font-bold text-lg px-8 py-3 rounded-full shadow-md transition"
      >
        Commencer
      </button>
    
      <div className="mt-8">
        <img
          src={pereNoel}
          alt="Père Noël"
          className=" h-auto mx-auto "
        />
      </div>
    </div>
  );
}
