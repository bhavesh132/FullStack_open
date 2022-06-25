import Part from './Part.js'

const Content = (props) => {
    return (
        <p>
            {props.part.map((part) => {
                return <Part item={part.named} exercise={part.exercises} />
            })}
       </p>
    )
}

export default Content