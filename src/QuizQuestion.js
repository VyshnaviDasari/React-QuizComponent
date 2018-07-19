import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'
import Quiz from './Quiz.js'


class QuizQuestion extends Component{

    constructor(props)
    {
        super(props);
        this.state={a:0}
        this.state = {
            clicked: false,
            
          };
      
        this.handleClick = this.handleClick.bind(this);
        
    }
    

    handleClick()
    {
     this.state.a = this.props.quiz_pos;
     this.state.a=this.state.a+1;
     this.setState({
        clicked: true
      });
    }

    render()
    {  
        return(
            <main>
                <section>
                    <p>{this.props.quiz_question.instruction_text}</p>
                </section>
                <section className="buttons">
                    <ol>
                       <QuizQuestionButton button_text={this.props.quiz_question}    />
                    </ol>
                </section>
                <button onClick={this.handleClick}> Next Question </button> 
                {this.state.clicked ? <Quiz quiz_position={this.state.a}/> : null}

            
                
             </main>

            )
        
    }

}

export default QuizQuestion