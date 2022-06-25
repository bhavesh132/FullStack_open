import Part from './Part.js'

const Content = (props) => {
    return (
        <p>
            {props.part.map((part) => {
                return <Part item={part.name} exercise={part.exercises} />
            })}
       </p>
    )
}

export default Content