import { Suspense, useState } from "react";
import "./App.css";
import AvailablePlayers from "./components/AvailablePlayers/AvailablePlayers";
import Navbar from "./components/Navbar/Navbar";
import SelectedPlayers from "./components/SelectedPlayers/SelectedPlayers";
import { toast, ToastContainer } from "react-toastify";
const fetchPlayers = async () => {
  const res = await fetch("/player.json");
  return res.json();
};
const playerPromise = fetchPlayers();
function App() {
  const [switchTab, setSwitchTab] = useState(true);
  const [coin, setCoin] = useState(200000000);
  const [purchasedPlayers, setPurchasedPlayers] = useState([]);
  // console.log(purchasedPlayers);

  const removePlayer = (p) => {
    const filtrerData = purchasedPlayers.filter((ply) => ply.id !== p.id);
    console.log(filtrerData);
    setPurchasedPlayers(filtrerData);
    setCoin(coin + p.playerPrice);
    toast(`${p.playerName} has been removed from your team.`) 
  };

  return (
    <>
      <Navbar coin={coin} />

      <div className="max-w-300 mx-auto flex justify-between items-center">
        <h1 className="text-3xl font-bold text-center mt-5">
          {switchTab
            ? "Available Players"
            : `Selected Players (${purchasedPlayers.length}/12)`}
        </h1>
        <div className="">
          <button
            onClick={() => setSwitchTab(true)}
            className={`btn py-3 px-4 border border-gray-400 rounded-l-2xl border-r-0 ${switchTab === true ? "bg-[#E7FE29]" : ""}`}
          >
            Available
          </button>
          <button
            onClick={() => setSwitchTab(false)}
            className={`btn py-3 px-4 border border-gray-400 rounded-r-2xl border-l-0 ${switchTab === false ? "bg-[#E7FE29]" : ""}`}
          >
            Selected <span>({purchasedPlayers.length})</span>
          </button>
        </div>
      </div>

      {switchTab === true ? (
        <Suspense
          fallback={<span className="loading loading-ring loading-xl"></span>}
        >
          <AvailablePlayers
            playerPromise={playerPromise}
            setCoin={setCoin}
            coin={coin}
            purchasedPlayers={purchasedPlayers}
            setPurchasedPlayers={setPurchasedPlayers}
          />
        </Suspense>
      ) : (
        <SelectedPlayers
          purchasedPlayers={purchasedPlayers}
          removePlayer={removePlayer}
        />
      )}
      <ToastContainer />
    </>
  );
}

export default App;
