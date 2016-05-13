import * as React from 'react';

export default class HomePage extends React.Component {
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
