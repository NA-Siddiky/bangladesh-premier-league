import Player from './components/Player/Player';
import image from './BD.png'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {

  return (
    <div className='main-container'>
      <h2 className="fixed-top header-design"> <img style={{width:'50px'}} src={image} alt=""/> Bangladesh Cricket Board<img style={{width:'50px'}} src={image} alt=""/></h2>
      <Player></Player>
    </div>
  );
}

export default App;
