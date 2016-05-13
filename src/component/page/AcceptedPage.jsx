import * as React from 'react';

export default class AcceptedPage extends React.Component {
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