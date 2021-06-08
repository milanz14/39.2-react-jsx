const App = () => {
    return (
        <div>
            <Tweet username="User1" name="us1" date="today" msg="This is user 1's tweet" />
            <Tweet username="User2" name="us2" date="right now" msg="This is user 2's tweet" />
            <Tweet username="User3" name="us3" date="some time today" msg="This is user 3's tweet" />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));