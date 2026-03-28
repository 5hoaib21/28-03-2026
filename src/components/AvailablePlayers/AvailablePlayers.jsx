import React, { use } from 'react';

import PlayerCard from '../PlayerCard/PlayerCard';


const AvailablePlayers = ({playerPromise, setCoin, coin}) => {
  const playerData = use(playerPromise)
  console.log(playerData);
  return (
    <div className='max-w-300 mx-auto  grid grid-cols-1 md:grid-cols-3 gap-4 mt-5'>
     
      {
        playerData.map(player  => <PlayerCard player={player} setCoin={setCoin} coin={coin}></PlayerCard>)
      }
    </div>
  );
};

export default AvailablePlayers;