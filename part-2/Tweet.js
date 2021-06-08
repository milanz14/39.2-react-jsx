const Tweet = (props) => {
    return (
        <div>
            <h1>Each Tweet's Info:</h1>
            <p>Message: { props.msg }</p>
            <p>Tweeted by {props.username} on { props.date }</p>
        </div>
    )
}