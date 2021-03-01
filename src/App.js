import Player from './components/Player/Player';
import image from './Western.ico'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      
      <h1 style={{textAlign: "center"}}> <img src={image} alt=""/> Western Premier League Team Selection Board</h1>
      <Player></Player>
    </div>
  );
}

export default App;
