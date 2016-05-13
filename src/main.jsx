import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from "./component/App";

require('./style/reset.scss');
require('./style/main.scss');


ReactDOM.render(<App/>, document.getElementById('mars-app'));