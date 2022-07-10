import Header from "./Header"
import Content from "./Content"
import Total from "./Total"

const Course = (props) => {
    return (
        <div>
            {props.courses.map((course)=>(
                <>
                <Header name={course.name} />
                <Content parts={course.parts} />
                <h3>
                    <Total sum={course.parts} />
                </h3>
                </>
            ))}
        </div>
    )
}

export default Course