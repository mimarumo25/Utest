import React from 'react';
import { Card, Button } from 'react-bootstrap';
import Footer from '../../footer/Footer';
import NavBar from '../../navbar/Navbar';

const Testinteligence = () => {
 
    return (
        <div>
            <NavBar />
            <div className="container-lg">
                <div className="d-flex justify-content-center">
                    <Card style={{ width: '36rem' }}>
                        <Card.Body>
                            <Card.Title>Card Title</Card.Title>
                            <Card.Text>
                                Some quick example text to build on the card title and make up the bulk of
                                the card's content.
                            </Card.Text>
                            <Button variant="primary">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                </div>
            </div>
            <Footer />
        </div>
    );
      
}

export default Testinteligence;
