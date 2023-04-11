import React, {useContext} from 'react';
import { globalContext } from './GlobalContext';
import { Card, Col, Row, Button} from 'react-bootstrap';
// import { useNavigate } from 'react-router-dom';

const QuizResultBoard = () => {

    const {totalScore, setQuizEnd,setStartQuiz,setShowStartBtn,setEndQuiz,setTotalScore} = useContext(globalContext);
    const handleReStartClick= ()=>{
        setStartQuiz(true);
        setEndQuiz(false); 
        setQuizEnd(false);
        setShowStartBtn(false);
        setTotalScore(0);
    }

    const childrenStyles={
        backgroundColor: "#1B1B1B",
    }
  return (
    <Row className='p-2 m-2'>
        <Col className='p-1'xs={12}>
            <Card className='p-1 text-light' style={childrenStyles}>
            <Card.Title>
                {totalScore >= 50? <h4>Excellent Performance you scored above average, Bellow is Your Final Result: </h4>: <h4>Poor Performance you scored less than average, Bellow is Your Final Result: </h4> }
                
            </Card.Title>
            <Card.Body>
                <Card.Text>
                    <h1>{totalScore} out of possible 100 Marks</h1>
                </Card.Text>
            </Card.Body>
            </Card>
        </Col>
        <Button onClick={handleReStartClick} className='btn btn-success '>Re-start</Button>
    </Row>
  )
}

export default QuizResultBoard