import { useState } from 'react';
import './App.css';
import Staistics from './Statistics';
import Button from './Button';



function App() {
  const [feedback, setFeedback] = useState({
    good: 0,
    neutral: 0,
    bad: 0
  })

  const[allFeedback, setAll] = useState(0)

  const handleGood = () => {
    setAll(allFeedback + 1)
    return setFeedback({...feedback, good: feedback.good + 1})
  }

  const handleBad = () => {
    setAll(allFeedback + 1)
    return setFeedback({...feedback, bad: feedback.bad + 1})
  }

  const handleNeutral = () => {
    setAll(allFeedback + 1)
    return setFeedback({...feedback, neutral: feedback.neutral + 1})
  }

return (
<div className="App">
      <h1>  Give Feedback </h1> 
      <Button onClick={handleGood} text="Good Feedback" />
      <Button onClick={handleNeutral} text="Neutral Feedback" />
      <Button onClick={handleBad} text="Bad Feedback" />
      <Staistics feedback={feedback} allFeedback={allFeedback} />
    </div>
  );
}

export default App;
