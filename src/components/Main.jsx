import React,{useContext, useState} from 'react';
import {  useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css"
import { Button, Container,Alert } from 'react-bootstrap';
import Quiz from "./Quiz";
import  QuizResultBoard from "./QuizResultBoard";
import { globalContext } from './GlobalContext';


const Main = () => {
    
    const navigate= useNavigate();

    const [quizEnd, setQuizEnd]= useState(false);

    const {endQuiz, setEndQuiz,startQuiz, setStartQuiz,currentStage,setCurrentStage,questions} = useContext(globalContext);

    const handleStartClick= ()=>{
        setStartQuiz(true);
        setQuizEnd(false);
        setEndQuiz(false);
        
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
    const handleResultClick= ()=>{
        setQuizEnd(true);
        setEndQuiz(false);
        navigate('/');
    }
  return (
    <Container className='bg-light mt-auto p-1 min-vw-100 border  border-2 d-flex flex-column align-items-center justify-content-center gap-1'>
        <h1 className='w-75 mt-4 mb-4 p-2 text-center border  border-2 bg-dark text-light'>QUIZ WEB APP</h1>
        <Alert>
            <Alert.Heading className='text-secondary'>
             Each question carries 10 marks!!
            </Alert.Heading>
        </Alert>
        <Alert>
            <Alert.Heading className='text-danger'>
                Note: Once You click to move to Next Question You Cant Return To The Previous one !!!
            </Alert.Heading>
        </Alert>
        
        {startQuiz && 
            <Quiz/>
        }
        {quizEnd && <QuizResultBoard/>}
        {
            !startQuiz? <Button onClick={handleStartClick} className='btn btn-success border  border-2 '>Start Quiz</Button>
            : <Button onClick={handleNextClick} className='btn btn-secondary border  border-2 '>Next Question</Button>
        }

        {endQuiz && <Button onClick={handleResultClick} className='btn btn-secondary '>Check Score</Button> }

       
       
       
    </Container>
  )
}

export default Main