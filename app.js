// const AddTodoInput = (props) => {
//     const handleChange = (event) => {
//         props.addItemToList(event.target.value)
//     }
//     const handleSubmit = (newItem) => {
//         event.preventDefault()
//     }
//     return (
//         <form onSubmit={ handleSubmit }>
//             <label>
//                 Add item:
//                 <input name="addItem" type="text" onChange={ handleChange }></input>
//             </label>
//             <button type="submit" value="Submit">Add</button>
//         </form>
//     )
// }

const TodoItem = (props) => {
    let isCompleteStatus = 'NOT COMPLETE'
    let buttonStyle = "btn btn-outline-secondary"

    if (props.isComplete) {
        isCompleteStatus = 'COMPLETE'
        buttonStyle = "btn btn-primary"
    }

    const handleClick = () => props.markAsComplete(props.id)
    
    return (
        <div>
            <h4>{ props.item }</h4>
            <button className={ buttonStyle } onClick={ handleClick }>{ isCompleteStatus }</button>
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

    handleChange = (event) => {
        console.log('Change event: ', event.target.value)
        console.log('Event name: ', event.target.name)
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
        const singleTodoItem = this.state.items.map((item, idx) => <li key={idx}><TodoItem id={idx} {...item} markAsComplete={ this.markAsComplete } /></li>)
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <label>
                    Add item:
                    <input name="term" type="text" onChange={ this.handleChange } value={ this.state.term }></input>
                    </label>
                    <button type="submit" value="Submit">Add</button>
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