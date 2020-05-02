import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './pages/Home';
import { Provider } from 'react-redux';
import * as serviceWorker from './serviceWorker';
import store from "./store";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <Switch>
                <Route path={process.env.PUBLIC_URL + "/"} exact component={Home}/>
            </Switch>
        </BrowserRouter>
    </Provider>
    ,
    document.getElementById('root')
);

serviceWorker.unregister();