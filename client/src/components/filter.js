const Filter = (props) => 
        <div>
            filter shown with<input onChange={props.handleFilterChange} value={props.filter}></input>
        </div>

export default Filter