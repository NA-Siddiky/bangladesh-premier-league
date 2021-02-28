import React, { useEffect, useState } from 'react';
import fakeData from '../../FAKEDATA/player_info.json'
import Cart from '../Cart/Cart';
import PlayerInfo from '../PlayerInfo/PlayerInfo';

const Player = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(fakeData)
    }, [])


    const [selected, setSelected] = useState([])
    const selectPlayer = (select) => {
        setSelected([...selected, select])
    }

    return (
        <div>
            <h1>This id Player</h1>
            {
                players.map((Player) => <PlayerInfo player={Player} select={selectPlayer}></PlayerInfo>)
            }
            <Cart cart={selected}></Cart>
        </div>
    );
};

export default Player;