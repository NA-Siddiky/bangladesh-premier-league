import React from 'react';

const PlayerInfo = (props) => {
    // console.log(props);
    const { name, salary, gender, image } = props.player
    // console.log(name);
    return (
        <div>
            <div>
                <img src={image} alt="" />
            </div>
            <div>
                <h2>Gender: {gender}</h2>
                <h1>Name: {name}</h1>
                <h3>Salary: {salary}</h3>
                <button onClick={() => props.select(props.player)}>Select</button>
            </div>
        </div>

    );
};

export default PlayerInfo;