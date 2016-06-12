import * as React from 'react';
import Timer from '../timer';

const quizList = [
	{
		question: "According to an MIT study, there is a possibility that the first crews traveling to Mars will suffocate in 68 days. Does that affect your desire to participate?", 
		answer: "no"
	}, 

	{
		question: "If you walked past the cockpit and noticed the controls of the spaceship left unattended, in how many parsecs do you think you could make the Kessel Run?",
		answer: "12"
	},

	{
		question: "On a scale of 1 to 10 (where 1 equals \“utter despair\" and 10 equals \“give me a volleyball, I’ll name it Wilson\") rate your ability to handle stress in survival situations.",
		answer: "10"
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

_submitAnswer(e){
	e.preventDefault();
	this.refs.quizInput.focus();

	let userAnswer = this.refs.quizInput.value.toLowerCase();
	let hostAnswer = quizList[this.state.question].answer.toLowerCase();

	if( !$("input#answer").val().trim().length ) {
		return;
	} else {
		if(userAnswer === hostAnswer || this.refs.quizInput.value === "42"){
			this.setState({ correct: this.state.correct += 1});
		}
		if(this.state.question === 2 && this.state.correct >= 2) {
			// console.log("what the fuck!")
			this._accepted();
		}  else {
			if(this.state.question === 2 && this.state.correct !== 3) {
				this._rejected();
			}
		}
	}

	this.setState({ question: this.state.question += 1});

	this.refs.quizInput.value = "";

}

componentDidMount() {

	this.refs.quizInput.focus();  

}

	render(){
		return (
			<div className="test-page flex">
				<div className="clock">
					<Timer navigate={this.props.navigate}/>
				</div>
				<div className="quiz-box-wrapper">
					<div className="quiz-box-container">
						<p>{quizList[this.state.question].question}</p>
						<form className="quiz-input">
							<input id="answer" type='text' ref="quizInput" />
							<div className="button-container">
								<button id="submitButton" type="submit" onClick={this._submitAnswer.bind(this)}>submit answer</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}