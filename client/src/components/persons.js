import Person from "./person.js"

const Persons = (props) => {

    return (
        <div>
            {props.personsToShow.map(person =>
            <Person key={person.id} name={person.name} number={person.number} removeItem={() => props.removeItem(person.id)}/>
            )}   
        </div>
    )
}

export default Persons