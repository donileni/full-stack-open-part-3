const Person = ({ name, number, removeItem }) => {
    return(
        <div>
            {name} {number}
            <button onClick={removeItem}>delete</button>
        </div>
    )
}

export default Person