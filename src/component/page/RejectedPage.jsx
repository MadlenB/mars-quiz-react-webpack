import * as React from 'react';
import RetryTimer from '../RetryTimer';


export default class RejectedPage extends React.Component {
	_quiz(){
		this.props.navigate("test")
	}
	render(){
		return (
			<div className="flex ending lose">
				<div className="retry-timer">
					<RetryTimer navigate={this.props.navigate}/>
				</div>
				<h1 className="rejected">rejected</h1>
			</div>
		)
	}
}