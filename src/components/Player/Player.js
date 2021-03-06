import React, { useEffect, useState } from 'react';
import fakeData from '../../FAKEDATA/player_info.json'
import Cart from '../Cart/Cart';
import PlayerInfo from '../PlayerInfo/PlayerInfo';
import './Player.css'

const Player = () => {
    const [players, setPlayers] = useState([])
    useEffect(() => {
        setPlayers(fakeData)
    }, [])

    const [selected, setSelected] = useState([])
    const selectPlayer = (select) => {
        const checking = selected.filter((check) => check.id === select.id)
        if (checking.length === 0) {
            setSelected([...selected, select])
        }
        else {
            alert("Player already added, Please add another Player")
        }
    }

    return (
        <div>
            <div style={{ borderBottom: '2px solid green' }} className="m-5 py-3 text-center">
                <h1>Please Select Players for ICC-2021</h1>
            </div>

            <div className="row">
                <div className="col-md-8 col-sm-6 d-flex flex-wrap">
                    {
                        players.map((Player) => <PlayerInfo player={Player} select={selectPlayer}></PlayerInfo>)
                    }
                </div>
                <div className="col-md-4 col-sm-6 sticky-top cart-design">
                    <Cart cart={selected}></Cart>
                </div>
            </div>
        </div >
    );
};

export default Player;