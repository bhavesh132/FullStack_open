import Header from './Header'
import Content from './Content'
import Total from './Total'


function App() {
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
    </div>
  );
}

export default App;
