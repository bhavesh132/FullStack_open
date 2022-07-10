const Notification = ({message}) => {
    
    if(message === null)
    return null
    
    if(message.type === 'success')
    return (
        <div className="success-message"> 
            <p>{message.content}</p>
        </div>
    )

    if (message.type === 'error')
        return (
        <div className="success-message"> 
            <p>{message.content}</p>
        </div>
        )
}

export default Notification