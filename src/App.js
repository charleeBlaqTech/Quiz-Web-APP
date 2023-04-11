import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import { globalContext } from './components/GlobalContext';
import {questions} from './components/QuestionsData'




function App() {
const [currentStage, setCurrentStage]= useState(0);
const [startQuiz, setStartQuiz]= useState(false);
const [totalScore, setTotalScore]= useState(0);
const [endQuiz, setEndQuiz]= useState(false);
const [showStartBtn, setShowStartBtn]= useState(true);
const [quizEnd, setQuizEnd]= useState(false);
  return (
    <BrowserRouter>
    <globalContext.Provider value={{endQuiz,quizEnd, setQuizEnd, setEndQuiz, currentStage,setCurrentStage, questions, setStartQuiz,startQuiz,setTotalScore, totalScore,showStartBtn, setShowStartBtn}}>
        <Routes>
          <Route path='/' element={<Main/>}/>;
        </Routes>
    </globalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
