import React,{useContext} from 'react';
// import {  useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container,Alert } from 'react-bootstrap';
import Quiz from "./Quiz";
import  QuizResultBoard from "./QuizResultBoard";
import { globalContext } from './GlobalContext';


const Main = () => {
    const {endQuiz,quizEnd, setQuizEnd, setEndQuiz,startQuiz, setStartQuiz,showStartBtn, setShowStartBtn} = useContext(globalContext);

    const handleStartClick= ()=>{
        setStartQuiz(true);
        setQuizEnd(false);
        setEndQuiz(false); 
        setShowStartBtn(false) 
    }
   
    const handleResultClick= ()=>{
        setQuizEnd(true);
        setEndQuiz(false);
    }

    const containerStyles={
        backgroundColor: "#F4B151",
    }
    const childrenStyles={
        backgroundColor: "#1B1B1B",
    }

  return (
    <Container style={containerStyles} className=' p-1 min-vw-100 min-vh-100   d-flex flex-column align-items-center justify-content-center gap-1'>
        <h1 className='w-75 mt-1 mb-4 p-2 text-center  bg-dark text-light'>QUIZ APP</h1>
        <Alert style={childrenStyles} className='border  border-0' >
            <Alert.Heading className='text-light'>
             Each question carries 10 marks!!
            </Alert.Heading>
        </Alert>
        <Alert style={childrenStyles} className='border  border-0'>
            <Alert.Heading className='text-danger'>
                Note: Once You click to move to Next Question You Cant Return To The Previous one !!!
            </Alert.Heading>
        </Alert>
        
        {startQuiz && 
            <Quiz/>
        }
        {quizEnd && <QuizResultBoard/>}
        
        {
            showStartBtn && <Button onClick={handleStartClick} className='btn btn-dark'>Start Quiz</Button>
        }

        {endQuiz && <Button onClick={handleResultClick} className='btn btn-secondary '>Check Score</Button> }

       
       
       
    </Container>
  )
}

export default Main