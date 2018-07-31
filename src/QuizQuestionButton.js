import React ,{Component} from 'react'

class QuizQuestionButton extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            clicked: false,
            status:false,
            score:0
            
          };
        // This binding is necessary to make `this` work in the callback
        this.handleChoiceClick = this.handleChoiceClick.bind(this);
      }

      componentWillReceiveProps(){
        this.setState({clicked: false})
        
      }
    
      
   
    handleChoiceClick(e)
    {
        
        if(!this.state.clicked)
        {
        this.setState({
            clicked: true
          });
        if(e.target.id == this.props.button_text.answer)
        {
          //  e.target.className="active";
           this.state.status=true
           this.state.score++;
          
        }
        else
        {
            //e.target.className="inactive";
            this.state.status=false
           
           
        }
    }
    else
    {
        alert('Only one click is allowed');
    }
    }

    render()
    {
        var a=this.props.button_text.answer_options[0];
        var b=this.props.button_text.answer_options[1];
        var c=this.props.button_text.answer_options[2];
        var d=this.props.button_text.answer_options[3];

        return(
            <div>
                <li> <button className="normal" onClick={this.handleChoiceClick} id={a}> {a} </button> </li>
                <li> <button className="normal" onClick={this.handleChoiceClick} id={b}> {b} </button> </li>
                <li> <button className="normal" onClick={this.handleChoiceClick} id={c}> {c} </button> </li>
                <li> <button className="normal" onClick={this.handleChoiceClick} id={d}> {d} </button> </li> 
                {this.state.clicked? this.state.status ? "Right Answer! Score: "+this.state.score  : "Wrong Answer! Score: "+this.state.score : null}
            </div>
        )
    }


}


export default QuizQuestionButton



