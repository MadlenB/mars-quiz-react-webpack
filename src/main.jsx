import * as React from 'react';
import * as ReactDOM from 'react-dom';

require('./style/reset.scss');
require('./style/main.scss');



class App extends React.Component {

	constructor(props){
		super(props);
		this.state = { 
			page: "home",
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
		question: "sam",
		answer: ""
	}, 

	{
		question: "ann",
		answer: ""
	}
]

	var Timer = React.createClass({

	  getInitialState: function() {
	    return {secondsElapsed: 3};
	  },
	  tick: function() {
	    this.setState({secondsElapsed: this.state.secondsElapsed - 1});
	  },
	  componentDidMount: function() {
	    this.interval = setInterval(this.tick, 1000);
	  },
	  componentDidUpdate(prevProps, prevState) {
		if( this.state.secondsElapsed === 0 ) {clearInterval(this.interval);} 
		
	  },
	  componentWillUnmount: function() {
	    clearInterval(this.interval);
	  },
	  render: function() {
	    return (
	      <div>Seconds Elapsed: {this.state.secondsElapsed}</div>
	    );
	  }
	});



class TestPage extends React.Component {

	constructor(props){
		super(props);
		this.state = { question: 0 , correct: 0}

		
	}

_submitAnswer(){
	
	if(this.refs.quizInput.value === "42"){
		this.setState({ correct: this.state.correct + 1});
	}

	this.setState({ question: this.state.question + 1});

	this.refs.quizInput.value = "";


	console.log(this.state);
	console.log(this.refs.quizInput.value);
}


	render(){
		return (
			<div>
				<Timer/>
				<p>{friend[this.state.question].question}</p>
				<form name="quizInput">
					<input type='text' ref="quizInput"/>
				</form>
				<button onClick={this._submitAnswer.bind(this)}>submit answer</button>
			</div>
		)
	}
}



ReactDOM.render(<App/>, document.getElementById('mars-app'));
