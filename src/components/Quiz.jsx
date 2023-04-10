import React, { useContext } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';
import { globalContext } from './GlobalContext';


const Quiz = () => {
    const {questions, currentStage} = useContext(globalContext);
    
  return (
            <Container>
                    
                <Row className='p-3'>
                            <Col className='p-3 bg-dark text-dark'xs={12}>
                                <Card className='p-3'>
                                <Card.Title>
                                {questions[currentStage].question}
                                </Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        {`1) ${questions[currentStage].optionA}`}
                                    </Card.Text>
                                    <Card.Text>
                                        {`2) ${questions[currentStage].optionB}`}
                                    </Card.Text>
                                    <Card.Text>
                                        {`3) ${questions[currentStage].optionC}`}
                                    </Card.Text>
                                    <Card.Text>
                                        {`4) ${questions[currentStage].optionD}`}
                                    </Card.Text>
                                </Card.Body>
                                </Card>
                            </Col>
                </Row>
            
            </Container>
  );
}

export default Quiz