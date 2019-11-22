const AddTodoInput = () => {
    return (
        <div>
            <input name="Add todo item" placeholder="Add todo item"></input>
            <button>Add</button>
        </div>
    )
}

const TodoItem = () => {
    return (
        <h1>TODO ITEM</h1>
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
        return (
            <div>
                <h1>TODO LIST</h1>
                <TodoItem/>
            </div>
        )
    }

}

const App = () => {
    return (
        <div>
            <AddTodoInput />
            <TodoList/>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))