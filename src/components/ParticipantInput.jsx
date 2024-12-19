import { useState } from "react";
import titre from "../assets/titre.png";
import cadeaux from "../assets/cadeaux.png";

export function ParticipantInput({
  participants,
  onAddParticipant,
  onRemoveParticipant,
  distributeGifts,
}) {
  const [currentName, setCurrentName] = useState("");

  const addParticipant = () => {
    if (currentName !== "") {
      onAddParticipant(currentName);
      setCurrentName("");
    }
  };

  return (
    <div className="h-screen bg-bg flex flex-col justify-between items-center p-6 space-y-6">
      {/* Image du titre */}
      <div>
        <img src={titre} alt="Titre Secret Santa" className="w-80" />
      </div>

      {/* Section Ajouter des participants */}
      <div className="bg-red text-white text-lg font-bold w-full text-center p-1.5 shadow-md">
        Ajoutez les participants
      </div>

      {/* Formulaire d'ajout */}
      <div className="bg-red/30 p-6 rounded-lg shadow-md w-full max-w-md space-y-4">
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            className="flex-grow bg-bg text-red rounded-full px-4 py-2 placeholder-red focus:outline-none focus:ring focus:ring-red"
            placeholder="Entrez un nom"
            value={currentName}
            onChange={(e) => setCurrentName(e.target.value)}
            onKeyPress={(e) => e.key === "Enter" && addParticipant()}
          />
          <button
            className="bg-red text-white px-4 py-2 rounded-full font-bold  hover:bg-red transition"
            onClick={addParticipant}
          >
            Ajouter
          </button>
        </div>

        {/* Liste des participants */}
        <ul className="space-y-2">
          {participants.map((name, index) => (
            <li
              key={index}
              className="bg-bg text-red rounded-md px-4 py-2 flex justify-between items-center"
            >
              {name}
              <button
                className="text-red hover:text-red font-bold"
                onClick={() => onRemoveParticipant(index)}
              >
                Supprimer
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-6">
              <button className="bg-red text-white text-lg font-bold px-8 py-3 rounded-full shadow-md hover:bg-red-700 transition" onClick={distributeGifts}>
                Distribuer les cadeaux</button>
            </div>
      </div>
      <div>
        <img src={cadeaux} alt="Titre Secret Santa" className="w-full bg-bg" />
      </div>
    </div>
    
  );
}
