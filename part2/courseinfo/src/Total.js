const Total = (props) => {

    const getTotal = () => {
        const total = props.sum.reduce((acc, val) => {
            return (acc + val.exercises)
        }, 0)
        return total
    }

    return (
        <div>
            Total of {getTotal()} Exercises
        </div>
    )
}

export default Total