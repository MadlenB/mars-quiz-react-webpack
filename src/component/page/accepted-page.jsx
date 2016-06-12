import * as React from 'react';
import RetryTimer from '../retry-timer';

export default class AcceptedPage extends React.Component {

	_quiz(){
		this.props.navigate("test")
	}

	render(){
		return (
			<div className="flex ending">
				<div className="retry-timer">
					<RetryTimer navigate={this.props.navigate}/>
				</div>
				<h1 className="accepted">accepted</h1>
				<div className="launch-wrapper">
					<i className="launch fa fa-space-shuttle fa-rotate-270" aria-hidden="true"></i>
				</div>
			</div>
		)
	}

}