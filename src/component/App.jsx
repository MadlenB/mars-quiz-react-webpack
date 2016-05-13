import * as React from 'react';
import HomePage from "./page/HomePage";
import BeginPage from "./page/BeginPage";
import TestPage from "./page/TestPage";
import AcceptedPage  from "./page/AcceptedPage";
import RejectedPage from "./page/RejectedPage";

export default class App extends React.Component {

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
