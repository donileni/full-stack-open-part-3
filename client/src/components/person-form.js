const PersonForm = (props) => {
    return (
        <div>
            <form onSubmit={props.handleClick}>
                <div>
                    name: <input onChange={props.handleNameChange} value={props.newName} />
                </div>
                <div>
                    number: <input onChange={props.handleNumberChange} value={props.newNumber}>
                    </input>
                </div>
                <div>
                    <button type="submit">add</button>
                </div>
            </form>
        </div>
    )
}

export default PersonForm