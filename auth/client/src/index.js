import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App';
import Welcome from './components/Welcome';
import {BrowserRouter, Route} from 'react-router-dom';
import SignUp from './components/auth/SignUp';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import reducers from './reducers';
import reduxThunk from 'redux-thunk';
import Feature from './components/Feature';
import SignOut from './components/auth/SignOut'
import SignIn from './components/auth/SignIn';

ReactDom.render(
    <Provider store={createStore(reducers, {
        auth: {authenticated: localStorage.getItem('token')}
    }, applyMiddleware(reduxThunk))}>
    <BrowserRouter>
    <App>
        <Route path='/' exact component={Welcome} />
        <Route path='/signup' exact component={SignUp} />
        <Route path='/feature' exact component={Feature} />
        <Route path='/signout' exact component={SignOut} />
        <Route path='/signin' exact component={SignIn} />
    </App>
    </BrowserRouter>
    </Provider>,
 document.querySelector('#root'));