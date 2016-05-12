import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./style/reset.scss');
require('./style/main.scss');



class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { page: "home" }
		
	}

	_navigate(page){
		this.setState({ page });
	}

	_renderPage(){
		switch(this.state.page){
			case "home":
			  return (<HomePage navigate={this._navigate.bind(this)}/>)
			break;
			case "begin":
			 return (<BeginPage navigate={this._navigate.bind(this)}/>)
			break;
			case "test":
			 return (<TestPage navigate={this._navigate.bind(this)}/>)
			break;
		}
	}

	render() {
		return (
			<div className="mars-app">
				{this._renderPage()}
			</div>
		)
	}
}

class HomePage extends React.Component {
	_beginTest(){
		this.props.navigate("begin")
	}
	render(){
		return (
			<div>
				<button onClick={this._beginTest.bind(this)}>take test</button>
			</div>
		)
	}
}

class BeginPage extends React.Component {
	_quiz(){
		this.props.navigate("test")
	}
	render(){
		return (
			<div>
				<button onClick={this._quiz.bind(this)}>begin evaluation</button>
			</div>
		)
	}
}

class TestPage extends React.Component {
	render(){
		return (
			<div>
				<p>According to an MIT study, there is a possibility that the first crews traveling to Mars will suffocate in 68 days. Does that affect your desire to participate?</p>
				<form name="quizInput">
					<input type='text' ref="quizInput"/>
				</form>
				<button>submit answer</button>
			</div>
		)
	}
}



ReactDOM.render(<App/>, document.getElementById('mars-app'));
