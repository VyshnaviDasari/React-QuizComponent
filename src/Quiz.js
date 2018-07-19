import React, { Component } from 'react'
import QuizQuestion from './QuizQuestion.js'
import QuizEnd from './QuizEnd.js'


let quizData = require('./quiz_data.json')
class Quiz extends Component{
    constructor(props)
    {
        super(props);
        this.state={isQuizEnd:0,}
    }

    
    render()
    {
        
        if(this.props.quiz_position-1===quizData.quiz_questions.length)
        {
            this.state.isQuizEnd=1;
        }
        else
        {
            this.state.isQuizEnd=0;
        }
        
        if(this.state.isQuizEnd)
            {
                 return( 
                    <div>
                        <QuizEnd />
                    </div>)
             }
             else
             {
             return(
                <div>
                <QuizQuestion quiz_question={quizData.quiz_questions[this.props.quiz_position-1]} quiz_pos={this.props.quiz_position}  />
                </div>
                )
            }
        }
    

}

export default Quiz