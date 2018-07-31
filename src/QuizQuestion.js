import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'
import QuizEnd from './QuizEnd.js'

let quizData = require('./quiz_data.json')


class QuizQuestion extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            clicked: false,
            isQuizEnd:0,
            a:this.props.quiz_pos ,
            score:0
          };
      
        this.handleClick = this.handleClick.bind(this);
        
    }

    
      
    

    handleClick()
    {
    // this.state.a = this.props.quiz_pos;
     //this.state.a=this.state.a+1;
     this.setState({
        a:this.state.a+1
      });
    }

    render()
    {  
        if(this.state.a-1===quizData.quiz_questions.length)
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
            <main>
                <section>
                    <p>{quizData.quiz_questions[this.state.a-1].instruction_text}</p>
                </section>
                <section className="buttons">
                    <ol>
                       <QuizQuestionButton button_text={quizData.quiz_questions[this.state.a-1]}     />
                    </ol>
                </section>
                <button onClick={this.handleClick}> Next Question </button> 
               
    
             </main>

            )
        }
        
    }

}

export default QuizQuestion
