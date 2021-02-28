import React, { useEffect, useState } from 'react';
import Cart from './components/Cart/Cart';
import Player from './components/Player/Player';

function App() {

  return (
    <div>
      <h1>Team Selection Board</h1>
      <Player></Player>
      <Cart></Cart>
    </div>
  );
}

export default App;
