const TodoItem = (props) => {
    let isCompleteStatus = 'NOT COMPLETE'
    let buttonStyle = "btn btn-outline-secondary"

    if (props.isComplete) {
        isCompleteStatus = 'COMPLETE'
        buttonStyle = "btn btn-primary"
    }

    const handleStatus = () => props.markAsComplete(props.id)
    const handleRemove = () => props.removeItem(props.id)
    
    return (
        <div>
            <h4>{ props.item }</h4>
            <button className = "btn btn-danger" onClick={ handleRemove }>X</button>
            <button className={ buttonStyle } onClick={ handleStatus }>{ isCompleteStatus }</button>
        </div>
    )
}

class App extends React.Component {
    state = {
        term: '',
        items: [{
            item: 'Complete coding portfolio',
            isComplete: false
        },{
            item: 'Brainstorm ideas for React project',
            isComplete: false
        },{
            item: 'Review comments and make edits',
            isComplete: false
        }]
    }

    markAsComplete = (idx) => {
        const stateCopy = [...this.state.items]
        stateCopy[idx].isComplete = !stateCopy[idx].isComplete
        this.setState({ state: stateCopy })
    }

    removeItem = (itemId) => {
        const stateCopy = [...this.state.items]
        stateCopy.splice(itemId,1)
        this.setState({ items: stateCopy })
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    handleSubmit = () => {
        event.preventDefault()
        const stateCopy = [...this.state.items]
        stateCopy.push({
            item: this.state.term,
            isComplete: false
        })
        this.setState({
            term: '',
            items: stateCopy
        })
    }
    
    render() {
        const singleTodoItem = this.state.items.map((item, idx) => <li key={idx}><TodoItem id={idx} {...item} markAsComplete={ this.markAsComplete } removeItem={ this.removeItem } /></li>)
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                    Add item:
                    <input name="term" type="text" onChange={ this.handleChange } value={ this.state.term }></input>
                    </label>
                    <button type="submit" value="Submit" className="btn btn-success">Add</button>
                </form>
                <h1>My todo list</h1>
                <ul>
                    { singleTodoItem }
                </ul>
            </div>
        )
    }

}

ReactDOM.render(<App />, document.getElementById('root'))