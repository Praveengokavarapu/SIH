import { Component } from "react";

import Questions  from "../components/Questions.js";



class Quiz extends Component{
    state={question:0}
    
   
    onClickNext=()=>{
        const {question}=this.state
    if (question<4){

    
        this.setState((prevState) => ({ question: prevState.question + 1 }))}
    }
    
    render(){
        const {questions,final}=this.props
        const {question}=this.state
        const questionNo=questions[question].questionNo
        
        return (
            <div>
                <h1>
                    {question+1}
                </h1>
                
                    <Questions options={questions[question]} key={questionNo} onClickNext={this.onClickNext}  isLast={question===3} final={final}/>
                
            </div>
        )
    
    }
}

export default Quiz