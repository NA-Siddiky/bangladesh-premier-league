import Player from './components/Player/Player';
import image from './Western.ico'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div>
      
      <h1 className="fixed-top" style={{textAlign: "center", backgroundColor:'lightblue'}}> <img src={image} alt=""/> Western Premier League Team Selection Board</h1>
      <Player></Player>
    </div>
  );
}

export default App;
