import { useState } from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Main from "./components/Main";
import Quiz from "./components/Quiz";
import { globalContext } from './components/GlobalContext';
import {questions} from './components/QuestionsData'




function App() {
const [currentStage, setCurrentStage]= useState(0);
const [startQuiz, setStartQuiz]= useState(false);
  return (
    <BrowserRouter>
    <globalContext.Provider value={{currentStage,setCurrentStage, questions, setStartQuiz,startQuiz}}>
        <Routes>
          <Route path='/' element={<Main/>}/>;
          <Route path='/quiz' element={<Quiz/>}/>;
        </Routes>
    </globalContext.Provider>
    </BrowserRouter>
  );
}

export default App;
