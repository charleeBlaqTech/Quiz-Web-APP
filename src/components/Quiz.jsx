import React, { useContext } from 'react';
import { Card, Col, Container, Row,Button } from 'react-bootstrap';
import { globalContext } from './GlobalContext';


const Quiz = () => {
    const {questions, currentStage,totalScore, setTotalScore,setCurrentStage,setStartQuiz,setEndQuiz} = useContext(globalContext);

    const handleClick=(e)=>{
        if(e.target.value === questions[currentStage].Answer){
            setTotalScore(totalScore + 10);
        }
    }
    const handleNextClick= ()=>{
        if(currentStage < Number(questions.length-1) ){
            setCurrentStage(currentStage + 1);
        }else{
            setEndQuiz(true);
            setStartQuiz(false);
            setCurrentStage(0);
        }
       
    }

    const childrenStyles={
        backgroundColor: "#1B1B1B",
    }

  return (
            <Container>
                    
                <Row className='p-3'>
                            <Col className='p-1 text-light'xs={12}>
                                <Card className='p-1' style={childrenStyles}>
                                <Card.Title>
                                {questions[currentStage].question}
                                </Card.Title>
                                <Card.Body>
                                    <Card.Text>
                                        <input type="radio" value={"A"} onClick={handleClick} name='selected' /> {`1) ${questions[currentStage].optionA}`} 
                                    </Card.Text>
                                    <Card.Text>
                                        <input type="radio" value={"B"} onClick={handleClick} name='selected' /> {`2) ${questions[currentStage].optionB}`}
                                    </Card.Text>
                                    <Card.Text>
                                        <input type="radio" value={"C"} onClick={handleClick} name='selected' /> {`3) ${questions[currentStage].optionC}`}
                                    </Card.Text>
                                    <Card.Text>
                                        <input type="radio" value={"D"} onClick={handleClick} name='selected' /> {`4) ${questions[currentStage].optionD}`}
                                    </Card.Text>
                                </Card.Body>
                               
                                </Card>
                                
                            </Col>
                            <Button onClick={handleNextClick} className='btn btn-secondary border  border-2 '>Next Question</Button>
                </Row>
            
            </Container>
  );
}

export default Quiz