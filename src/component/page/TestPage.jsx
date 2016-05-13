import * as React from 'react';
import Timer from '../Timer';

const friend = [
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


export default class TestPage extends React.Component {

	constructor(props){
		super(props);
		this.state = { question: 0 , correct: 0}

		
	}

_accepted(){
		this.props.navigate("accepted")
	}
_rejected(){
		this.props.navigate("rejected")
	}

_submitAnswer(){
	if(this.refs.quizInput.value === "42"){
		this.setState({ correct: this.state.correct += 1});
	}
	if(this.state.question === 2 && this.state.correct >= 2) {
		console.log("what the fuck!")
		this._accepted();
	}  else {
		if(this.state.question === 2 && this.state.correct !== 3) {
			this._rejected();
		}
	}

	this.setState({ question: this.state.question += 1});

	this.refs.quizInput.value = "";

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