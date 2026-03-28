import React, { useState } from "react";
import userImg from "../../assets/user.png";
import flagImg from "../../assets/flag.png";

const PlayerCard = ({ player, setCoin, coin }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleSelectedPlayer = (playerData) => {
    const playerPrice = playerData.playerPrice;
    if(coin < playerPrice){
      alert("You don't have enough coins to select this player.");
      return;
    }
    setIsSelected(true);
    setCoin(coin - playerData.playerPrice);
  };
  return (
    <div className="card border bg-base-100  shadow-sm p-4">
      <figure>
        <img className="w-full h-75 object-cover" src={player.playerImage} />
      </figure>
      <div className="mt-4">
        <div className="flex">
          <img src={userImg} alt="" />{" "}
          <h2 className="card-title ml-2">{player.playerName}</h2>
        </div>
        <div className="flex justify-between mt-4 border-b border-e-gray-400 pb-2">
          <div className="flex items-center">
            <img className="w-7 h-7 mr-2" src={flagImg} alt="" />
            <span className="text-gray-500">{player.playerCountry}</span>
          </div>
          <button className="btn">rounder</button>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">Rating</span>
          <span>{player.playerRating}</span>
        </div>
        <div className="flex justify-between mt-4">
          <span className="font-bold">{player.playerBattingStyle}</span>
          <span>{player.playerBowlingStyle}</span>
        </div>
        <div className="card-actions mt-3 flex justify-between items-center">
          <p className="font-bold">Price: $ {player.playerPrice} USD</p>
          <button disabled={isSelected} onClick={() => {handleSelectedPlayer(player)}} className="btn">
            {isSelected === true ? "Selected" : "Choose Player"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlayerCard;
