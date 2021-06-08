const App = () => {
    return (
        <div>
            <div>
            <Person hobbies={['Jousting','Insurrection','Chopping off heads of Kings']} age={7} name={'gregorrrrr'} />
            <Person hobbies={['Jousting','Insurrection','Chopping off heads of Kings']} age={17} name={'gergieieieieieieieieieieieieieieiei'} />
            <Person hobbies={['Jousting','Insurrection','Chopping off heads of Kings']} age={35} name={'Shamalamadongaroo'} />
        </div>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));