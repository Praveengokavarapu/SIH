import { useNavigate } from "react-router-dom"

const Questions =props=>{
    const {options,isLast,onClickNext,final}=props
    const {questionNo,option1,option2,option3,option4}=options
    const navigate=useNavigate()
    const onNext=()=>{
        onClickNext()
    }
    const onSubmit=()=>{
        if (final==="true"){
            alert("See Results")
            navigate("/results")
        }
        else{
            alert("Submitted now attempt the next quiz")
            navigate("/getstarted")
            
        }
        
        
    }
    return(
        <div>
            <h1>{questionNo}</h1>
            <input type="radio" value={option1} id={option1} name={questionNo}/>
            <label for={option1}>{option1}</label>
            <input type="radio" value={option2} id={option2} name={questionNo}/>
            <label for={option2}>{option2}</label>
            <input type="radio" value={option3} id={option3} name={questionNo}/>
            <label for={option3}>{option3}</label>
            <input type="radio" value={option4} id={option4} name={questionNo}/>
            <label for={option4}>{option4}</label>
        {isLast? <button onClick={onSubmit}>Submit</button>:<button onClick={onNext}>Next</button>}
        </div>
    )
}

export default Questions