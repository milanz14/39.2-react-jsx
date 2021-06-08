function App() {
    return (
        <div>
            <h4>Two Components Rendered below:</h4>
            <FirstComponent />
            <NamedComponent name='react master' />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));
