import React from "react";
import SelectedCard from "../SelectedCard/SelectedCard";

const SelectedPlayers = ({ purchasedPlayers , removePlayer }) => {
  return (
    <div className="max-w-300 mx-auto mt-8">
     {
      purchasedPlayers.map(player => <SelectedCard removePlayer={removePlayer} player={player} />)
     }
    </div>
  );
};

export default SelectedPlayers;
