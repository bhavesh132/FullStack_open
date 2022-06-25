import Header from './Header'
import Content from './Content'
import Total from './Total'
import { useState } from 'react';
import Button from './Button';
import Display from './Display';


function App() {
  const [counter, setCounter] = useState(0)

  const increment = () => {
    console.log( "Clicked " + counter + " times")
    return setCounter(counter + 1  )
    
  }
  
  
  const decrement = () => {
    console.log( "Clicked " + counter + " times")
    return setCounter(counter - 1 )
    
  }
  
  const setToZero = () => {
    setCounter(0)
  }

  const course = {
    name: 'Half Stack application development',
    parts: [{
    name: 'Fundamentals of React',
    exercises: 10
  },
  {
    name: 'Using props to pass data',
    exercises: 7
  },
  {
    name: 'State of a component',
    exercises: 14
  }]
}
  
  const getTotal = (arr) =>{
    let amount = 0
    arr.forEach(part => {
      amount+= part.exercises
    })
    return amount
  }


  return (
    <div className="App">
      <Header course={course.name} />
      <Content part = {course.parts} />
      <Total total={ getTotal(course.parts) } />
      <Button onClick={increment} text="Plus" />
      <Display counter= {counter} />
      <Button onClick={decrement} text="Minus" />
      <Button onClick={setToZero} text="Reset" />
    </div>
  );
}

export default App;
