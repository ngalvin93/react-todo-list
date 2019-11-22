const AddTodoInput = () => {
    return (
        <div>
            <input name="Add todo item" placeholder="Add todo item"></input>
            <button>Add</button>
        </div>
    )
}

const TodoItem = (props) => {
    console.log('Item prop: ', props)
    let isCompleteStatus = 'NOT COMPLETE'
    if (props.isComplete) {
        isCompleteStatus = 'COMPLETE'
    }
    return (
        <div>
            <h1>{ props.item }</h1>
            <p>{ isCompleteStatus }</p>
        </div>
    )
}

class TodoList extends React.Component {
    state = {
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

    

    render() {
        const singleTodoItem = this.state.items.map((item, idx) => <TodoItem key={idx} {...item}/>)
        return (
            <div>
                <h1>TODO LIST</h1>
                { singleTodoItem }
            </div>
        )
    }

}

const App = () => {
    return (
        <div>
            <AddTodoInput />
            <TodoList />
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))