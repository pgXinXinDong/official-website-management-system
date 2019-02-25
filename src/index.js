import React from 'react';
import ReactDOM from 'react-dom';
import 'antd/dist/antd.css';
import './css/common.css'
import {BrowserRouter as Router, Route} from "react-router-dom";
import Layout from './view/layout';
import * as serviceWorker from './serviceWorker';


function SysRouter(){
    return(
        <Router>
            <div>
                 <Route path="/" component={Layout} />
            </div>
        </Router>
    )
}

ReactDOM.render(<SysRouter />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
