import { useEffect, useState } from 'react';
import Player from './components/Player/Player'
import fakeData from './FAKEDATA/player_info.json'

function App() {
  const [player, setPlayer] = useState([]);

  useEffect(() => {
    setPlayer(player)
    console.log(player);


  }, [])
  return (
    <div>
      <h1>Team Selection Board</h1>
      <Player Player={player}></Player>
    </div>
  );
}

export default App;
