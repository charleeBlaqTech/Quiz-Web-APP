import React,{useContext} from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container } from 'react-bootstrap';
import Quiz from "./Quiz";
import { globalContext } from './GlobalContext';

const Main = () => {

    const {startQuiz, setStartQuiz,currentStage,setCurrentStage} = useContext(globalContext);

    const handleClick= ()=>{
        setStartQuiz(true);
    }
    const handleNextClick= ()=>{
        setCurrentStage(currentStage + 1);
    }
  return (
    <Container className='m-auto p-5 min-vw-100 border  border-2 d-flex flex-column align-items-center justify-content-center gap-1'>
        <h1 className='w-50 text-center border  border-2'>QUIZ APP</h1>
        <p>Each question carries 10 marks!!</p>
        {startQuiz && 
            <Quiz/>
        }

        {
            !startQuiz? <Button onClick={handleClick} className='btn btn-success border  border-2 '>Start Quiz</Button>
            : <Button onClick={handleNextClick} className='btn btn-secondary border  border-2 '>Next Question</Button>
        }
       
      
       
    </Container>
  )
}

export default Main