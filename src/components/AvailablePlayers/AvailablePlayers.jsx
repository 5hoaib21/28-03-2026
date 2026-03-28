import React, { use } from 'react';
import userImg from '../../assets/user.png';
import flagImg from '../../assets/flag.png';


const AvailablePlayers = ({playerPromise}) => {
  const playerData = use(playerPromise)
  console.log(playerData);
  return (
    <div className='max-w-300 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
     
      {
        playerData.map(player  => <div className="card border bg-base-100  shadow-sm p-4">
        <figure>
          <img
           className='w-full h-75 object-cover' 
            src={player.playerImage}
          />
        </figure>
        <div className="mt-4">
          <div className="flex">
           <img src={userImg} alt="" /> <h2 className="card-title ml-2">{player.playerName}</h2>
          </div>
          <div className="flex justify-between mt-4 border-b border-e-gray-400 pb-2">
            <div className="flex items-center">
              <img className="w-7 h-7 mr-2"  src={flagImg} alt="" />
              <span className="text-gray-500">{player.playerCountry}</span>
            </div>
            <button className="btn">rounder</button>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">Rating</span>
            <span>{
player.playerRating
}</span>
          </div>
          <div className="flex justify-between mt-4">
            <span className="font-bold">{player.playerBattingStyle
}</span>
            <span>{player.playerBowlingStyle
}</span>
          </div>
          <div className="card-actions mt-3 flex justify-between items-center">
            <p className="font-bold">Price: $ {player.
playerPrice} USD</p>
            <button className="btn">Choose Player</button>
          </div>
        </div>
      </div>)
      }
    </div>
  );
};

export default AvailablePlayers;