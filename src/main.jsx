import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./style/reset.scss');
require('./style/main.scss');



class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			page: "home"
		}
		
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
			case "accepted":
				return (<AcceptedPage navigate={this._navigate.bind(this)}/>)
			break;
			case "rejected":
				return (<RejectedPage navigate={this._navigate.bind(this)}/>)
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



let friend = [
	{	
		question: "According to an MIT study, there is a possibility that the first crews traveling to Mars will suffocate in 68 days. Does that affect your desire to participate?", 
		answer: ""
	}, 

	{
		question: "If you walked past the cockpit and noticed the controls of the spaceship left unattended, in how many parsecs do you think you could make the Kessel Run?",
		answer: ""
	}, 

	{
		question: "On a scale of 1 to 10 (where 1 equals \“utter despair\" and 10 equals \“give me a volleyball, I’ll name it Wilson\") rate your ability to handle stress in survival situations.",
		answer: ""
	}
]

class Timer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			secondsElapsed: 38
		}
	}
  	_tick() {
  		this.setState({secondsElapsed: this.state.secondsElapsed - 1});
  	}
  	_renderMinutes() {
  		let minutes = Math.floor(this.state.secondsElapsed / 60);
  		let seconds = this.state.secondsElapsed % 60;
  		seconds = seconds < 10 ? '0' + seconds : seconds;
  		return (<div>{minutes}:{seconds}</div>)
  	}
	_rejected(){
		this.props.navigate("rejected")
	}
    componentDidMount() {
    	this.interval = setInterval(this._tick.bind(this), 1000);
    }
    componentDidUpdate(prevProps, prevState) {

  		if( this.state.secondsElapsed === 0 ) {
  			clearInterval(this.interval);
  			this._rejected();
  		}
    }
    componentWillUnmount() {
    	clearInterval(this.interval);
    }
    render() {
    	return (
    	  <div>{this._renderMinutes()}</div>
    	);
    }
}

class TestPage extends React.Component {

	constructor(props){
		super(props);
		this.state = { question: 0 , correct: 0}

		
	}

_submitAnswer(){
	if(this.state.correct === 3)
	
	if(this.refs.quizInput.value === "42"){
		this.setState({ correct: this.state.correct += 1});
	}

	this.setState({ question: this.state.question += 1});

	this.refs.quizInput.value = "";


	console.log(this.state);
	console.log(this.refs.quizInput.value);
}


	render(){
		return (
			<div>
				<Timer navigate={this.props.navigate}/>
				<p>{friend[this.state.question].question}</p>
				<form name="quizInput">
					<input type='text' ref="quizInput"/>
				</form>
				<button onClick={this._submitAnswer.bind(this)}>submit answer</button>
			</div>
		)
	}
}

class AcceptedPage extends React.Component {
	_quiz(){
		this.props.navigate("test")
	}
	render(){
		return (
			<div>
				<button onClick={this._quiz.bind(this)}>accepted</button>
			</div>
		)
	}
}

class RejectedPage extends React.Component {
	_quiz(){
		this.props.navigate("test")
	}
	render(){
		return (
			<div>
				<button onClick={this._quiz.bind(this)}>rejected</button>
			</div>
		)
	}
}

ReactDOM.render(<App/>, document.getElementById('mars-app'));
