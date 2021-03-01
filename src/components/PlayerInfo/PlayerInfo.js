import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';
import './PlayerInfo.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUserPlus } from '@fortawesome/free-solid-svg-icons'


const PlayerInfo = (props) => {
    // console.log(props);
    const { name, salary, gender, image } = props.player
    // console.log(name);
    return (

        <div className= "player-dashboard">
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        Add me for your Team, I am the Best.
                    </Card.Text>
                </Card.Body>
                <ListGroup className="list-group-flush">
                    <ListGroupItem>Age: </ListGroupItem>
                    <ListGroupItem>Gender: {gender}</ListGroupItem>
                    <ListGroupItem>Country: </ListGroupItem>
                    <ListGroupItem>Salary: {salary}</ListGroupItem>
                </ListGroup>
                <Card.Body>
                    <button onClick={() => props.select(props.player)}> <FontAwesomeIcon icon={faUserPlus} /> Select Player</button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default PlayerInfo;