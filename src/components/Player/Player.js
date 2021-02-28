import React, { useEffect, useState } from 'react';
import fakeData from '../../FAKEDATA/player_info.json'
import PlayerInfo from '../PlayerInfo/PlayerInfo';

const Player = () => {
    const [players, setPlayers] = useState([])

    useEffect(() => {
        setPlayers(fakeData)
    }, [])
    // console.log(players);

    const selectPlayer = (select) => {
        console.log(select);
    }

    return (
        <div>
            <h1>This id Player</h1>
            {
                players.map((Player) => <PlayerInfo player={Player} select= {selectPlayer}></PlayerInfo>)
            }
        </div>
    );
};

export default Player;