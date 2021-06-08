const Person = (props) => {
    return (
        <div>
            <h2>{ props.name.length >= 8 ? props.name.slice(0,8) : props.name }</h2>
            <h3>Here are some of { props.name }'s hobbies: </h3>
            <ul>
                { props.hobbies.map(hobby => (
                    <li>{ hobby }</li>
                ))}
            </ul>
            <h3>You are { props.age } years old. { props.age >= 18 ? 'Go Vote!' : 'You cannot vote!' }</h3>  
        </div>
    )
}