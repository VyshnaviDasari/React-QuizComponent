import React ,{Component} from 'react'
import App from './App.js'

class QuizEnd extends Component{

    constructor(props)
    {
        super(props);
        this.state = {
            clicked: false
          };
      
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick()
    {

     this.setState({
        clicked: true
      });
      
      window.location.reload(); 
   
    }
    
    render()
    {
        return(
            <div>
                <p>Thanks for playing!</p>
                <button onClick={this.handleClick}>Reset Quiz</button>
                {this.state.clicked ? <App /> : null}
            </div>
        )
        
    }


}

export default QuizEnd
