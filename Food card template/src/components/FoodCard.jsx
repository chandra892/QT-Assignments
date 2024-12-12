import React from 'react';
import { Card } from 'react-bootstrap';

const MyCard = () => {
    return (
        <div className='d-flex gap-5 mt-5 mb-4 justify-content-center ms-4 "border border-secondary '>
          
            <Card style={{ width: '10rem', height:'8rem'}} className='"border border-secondary'>
                <Card.Img variant="top" src="https://www.w3schools.com/w3images/sandwich.jpg" className='"border border-secondary'/>
                <Card.Body>
                    <Card.Title className='"border border-secondary'>The Perfect Sandwich, A Real NYC Classic</Card.Title>
                    <Card.Text>
                        Some quick example card  card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height:'8rem' }} >
                <Card.Img variant="top" src="https://www.w3schools.com/w3images/steak.jpg" />
                <Card.Body>
                    <Card.Title>The Perfect Sandwich, A Real NYC Classic</Card.Title>
                    <Card.Text>
                        Some quick example card  card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height:'8rem' }} >
                <Card.Img variant="top" src="https://www.w3schools.com/w3images/cherries.jpg" />
                <Card.Body>
                    <Card.Title>The Perfect Sandwich, A Real NYC Classic</Card.Title>
                    <Card.Text>
                        Some quick example card  card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card style={{ width: '10rem', height:'8rem' }} >
                <Card.Img variant="top" src="https://www.w3schools.com/w3images/wine.jpg" />
                <Card.Body>
                    <Card.Title>The Perfect Sandwich, A Real NYC Classic</Card.Title>
                    <Card.Text>
                        Some quick example card  card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        </div>
    );
}

export default MyCard;