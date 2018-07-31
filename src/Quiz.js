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
        return(
                <div>
                <QuizQuestion quiz_pos={this.props.quiz_position}  />
                </div>
             )
    }
    

}

export default Quiz