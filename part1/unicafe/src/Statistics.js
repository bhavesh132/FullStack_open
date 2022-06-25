import StaisticLine from "./StatisticLine"

const Staistics = (props) => {
    const avgHandle = () => {
      // Good: 1 Neutral: 0 Bad: -1
      return ((props.feedback.good - props.feedback.bad)/props.allFeedback).toFixed(5)
    }
  
    const positiveHandle = () => {
      return ((props.feedback.good/props.allFeedback)*100).toFixed(2)
    }
  
    if(props.allFeedback === 0){
      return (
        <div> 
          No Feedbacks received Yet.
        </div>
      )
    }
      return (
        <div>
        <h2>Statistics</h2>
          <div>
            <center>
            <table> 
                <tbody>
                   <StaisticLine text="Good Feedback" value={props.feedback.good} />
                   <StaisticLine text="Bad Feedback" value={props.feedback.bad} />
                   <StaisticLine text="Neutral Feedback" value={props.feedback.neutral} />
                   <StaisticLine text="Total Feedbacks" value={props.allFeedback} />
                   <StaisticLine text="Average of Feedbacks" value={avgHandle()} />
                   <StaisticLine text="%age of Positive Feebacks" value={positiveHandle()} />
                </tbody>
            </table>
            </center>
          </div>
        </div>
      )
  }

  export default Staistics