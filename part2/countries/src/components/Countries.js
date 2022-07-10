import CountryName from './CountryName'

const Countries = (props) => {

    const values = () => {
        if (typeof props.result === "object"){
            console.log(props.result)
            return props.result.map((country, index) => {
                    console.log(country.name.common)
                    return <CountryName country={country} id={index} /> 
            })
        }

        if(typeof props.result === 'string'){
            return (
                <div>
                    {props.result}
                </div>
            )
        }
    }

    return (
        <div> 
            {values()}
        </div>
    )
    
}


export default Countries