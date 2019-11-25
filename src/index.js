import 'bootstrap/dist/css/bootstrap.min.css'
import React from 'react';
import ReactDOM from 'react-dom';
import Main from './containers/Main';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './store/redusers/rootReducer'
import thunk from 'redux-thunk'
import './sass/app.scss'


const composeEnhancers =
    typeof window === 'object' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
        }) : compose;


const createStoreWithMiddleware
    = composeEnhancers(
        applyMiddleware(
            thunk
        )
    )(createStore)

const store = createStoreWithMiddleware(
    rootReducer
)

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <Main />
        </BrowserRouter>
    </Provider>
)


if (document.getElementById('root')) {
    ReactDOM.render(app, document.getElementById('root'));
}

serviceWorker.unregister();
