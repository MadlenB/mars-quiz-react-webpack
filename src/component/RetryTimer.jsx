import * as React from 'react';

export default class RetryTimer extends React.Component {
	constructor(props){
		super(props);
		this.state = {
			secondsElapsed: 8
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
	_Home(){
		this.props.navigate("home")
	}
    componentDidMount() {
    	this.interval = setInterval(this._tick.bind(this), 1000);
    }
    componentDidUpdate(prevProps, prevState) {

  		if( this.state.secondsElapsed === 0 ) {
  			clearInterval(this.interval);
  			this._Home();
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