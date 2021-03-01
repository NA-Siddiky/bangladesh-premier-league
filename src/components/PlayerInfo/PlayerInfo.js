import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './PlayerInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const PlayerInfo = (props) => {
    // console.log(props);
    const { name, salary, gender, country, age, image } = props.player
    // console.log(name);
    return (

        <div className="player-dashboard">
            <Card style={{ width: '18rem' }}>
                <Card.Img id="player-image" variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Add me for your Team, I am the Best.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Age: {age}</ListGroupItem>
                    <ListGroupItem>Gender: {gender}</ListGroupItem>
                    <ListGroupItem>Country: {country} </ListGroupItem>
                    <ListGroupItem>Salary: {salary}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button className="btn btn-success" onClick={() => props.select(props.player)}> <FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlayerInfo;