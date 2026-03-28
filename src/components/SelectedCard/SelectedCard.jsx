import React from "react";

const SelectedCard = ({ player, removePlayer }) => {

  const handleRemove = () => {
    removePlayer(player);
  } 
  return (
    <div className="border border-gray-300 flex justify-between items-center p-5 m-5  rounded-2xl shadow-2xl">
      <div className="flex items-center gap-5">
        <img
          src={player.playerImage}
          alt=""
          className="h-25 w-25 rounded-2xl object-cover shadow-stone-400 shadow-md"
        />
        <div>
          <h2 className="text-2xl font-bold">{player.playerName}</h2>
          <p className="text-gray-500">{player.playerRole}</p>
        </div>
      </div>
      <div className="">
        <button onClick={handleRemove} className="btn btn-ghost m-3 p-3 rounded-full "><img src="https://i.ibb.co.com/ZRL6QdqN/Vector.png" alt="" /></button>
      </div>
    </div>
  );
};

export default SelectedCard;
