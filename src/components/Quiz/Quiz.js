import './Quiz.css';
import React from 'react';
import { useState } from 'react';

var flag = Boolean(false)

const questions =[
    {
        questionText: 'Самый распрастранённый язык', //0
        answerOptions: [
            {answerText: "Китайский", isCorrect: true},
            {answerText: "Испанский", isCorrect: false},
            {answerText: "Хинди", isCorrect: false},
            {answerText: "Русский", isCorrect: false}
        ]
    },
    {
        questionText: 'Вторая форма глагола teach', //0
        answerOptions: [
            {answerText: "taught", isCorrect: true},
            {answerText: "tauhgt", isCorrect: false},
            {answerText: "tought", isCorrect: false},
            {answerText: "tauht", isCorrect: false}
        ]
    },

{
    questionText: 'в германии отличник это - ....', //0
    answerOptions: [
        {answerText: "Незнаю", isCorrect: false},
        {answerText: "Тот кто учиться на 1 и 2 ", isCorrect: true},
        {answerText: "Тот кто учиться на 5", isCorrect: false},
        {answerText: "Тот кто смеётся с шуток учителя", isCorrect: false}
    ]
},

{
    questionText: 'Существующий вид англиского', //0
    answerOptions: [
        {answerText: "Британский", isCorrect: true},
        {answerText: "Русский", isCorrect: false},
        {answerText: "Немецкий", isCorrect: false},
        {answerText: "Ни один из этого", isCorrect: false}
    ]
}
]
 

export const Quiz = () =>{
    const [currentQuestion, setCurrentQuestion]= useState(0)
    const [score, setScore] = useState(0)
    const handleAnswerOptionClick = (isCorrect) =>{
         
        setCurrentQuestion(currentQuestion+1)
        if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == false)){
            setScore(score+1)
            flag = true
        }
        else if ((isCorrect)&&(currentQuestion == questions.length-1)&&(flag == true)){
            setScore(score)
        }
        else if (isCorrect){
            setScore(score+1)
            
        }
    
    }
    return(
        <div>
            <div className = "quiz" >
                <diz className = 'question_section' >
                    <div className='question_count'>
                    {currentQuestion <4 ?
                       <>  <span>Вопрос {currentQuestion +1}</span>/{questions.length} </>
                        :<h1>Thats all foolks!</h1>}
                   </div>
                   {currentQuestion <4 ?
                   <div className='question_text' >{questions[currentQuestion].questionText} </div> :<h1>Вопросов нет</h1>}
                </diz>
                {currentQuestion <4 ?
                <div className='answer_section'>
                    {questions[currentQuestion].answerOptions.map(
                        item => (<button className='answer_button' onClick=
                        {() => handleAnswerOptionClick(item.isCorrect)}>
                            {item.answerText}
                        </button>)
                    )} 
                    
            </div>:<h1>Вопросов нет</h1>}
            <div className='score_section'>  </div>
                    Правильных ответов {score} из {questions.length}
                </div>
        </div>
    )
}
