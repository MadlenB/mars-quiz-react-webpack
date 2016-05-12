import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./style/reset.scss');
require('./style/main.scss');



class App extends React.Component {

	constructor(props){
		super(props);

		this.state = {
			todoList: [
				{ title: 'placeholder todo', completed: false}
			]
		}
	}

	_toggleComplete(theTodoToModify) {

		let todoList = this.state.todoList.map((todo)=>{
			if(theTodoToModify === todo) {
				todo.completed = !todo.completed;
			}
			return todo;
		});

		this.setState({ todoList });
	}

	_removeTodo(theTodoToModify){
		let todoList = this.state.todoList.filter((todo)=>{
			if(theTodoToModify === todo) {
				return false;
			}
			return todo;
		});

		this.setState({ todoList });
	}

	_addTodo(e){
		e.preventDefault();
		if(this.refs.todoTitle.value){
			this.state.todoList.push({ title: this.refs.todoTitle.value, completed: false});
			this.setState({ todoList: this.state.todoList });
			this.refs.todoTitle.value = '';
		}
	}

	_renderTodos(todo, index){
		return (
			<Todo 	key={index} 
					todo={ todo } 
					_removeTodo={this._removeTodo.bind(this)}
					_toggleComplete={this._toggleComplete.bind(this)}
			/>
		)
	}

	_clearCompleted() {
		let todoList = this.state.todoList.filter((todo, index)=>{
			{/* remove any with completed: true */}
			if(todo.completed) {
				return false;
			}
			return true;
		});
		this.setState({ todoList })
	}

	_hasCompleted(){
		let completed = this.state.todoList.filter((todo, index)=>{
			if(todo.completed){
				return true;
			}
			return false;
		});
		return completed.length;
	}

	render() {
		return (
			<div className="todo-app">
				<h1>Todo List!</h1>
				<div className="add-todo">
					<form name="addTodo" onSubmit={this._addTodo.bind(this)}>
						<input type='text' ref="todoTitle"/>
					</form>
				</div>
				<ul>
					{ this.state.todoList.map(this._renderTodos.bind(this)) }
				</ul>
				{ this._hasCompleted() ?<button onClick={this._clearCompleted.bind(this)}>Clear completed</button> : ''}
				{this.state.todoList.length}&nbsp;
				{this.state.todoList.length === 1 ? 'todo' : 'todos'}
			</div>
			)
	}
}

class Todo extends React.Component {

	_toggleComplete() {
		this.props._toggleComplete(this.props.todo);
	}

	_removeTodo() {
		this.props._removeTodo(this.props.todo);
	}

	render(){
		return (
			<li> 
				{ this.props.todo.title } 
				<input 	type="checkbox" 
						defaultValue={this.props.todo.completed}
						onClick={ this._toggleComplete.bind(this) }
				/>
				<button onClick={ this._removeTodo.bind(this) }>
					Delete
				</button>
			</li>
		)
	}
}


ReactDOM.render(<App/>, document.getElementById('mars-app'));
