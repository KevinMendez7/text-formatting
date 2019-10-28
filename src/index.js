import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { Map as map} from 'immutable'
import { composeWithDevTools } from 'redux-devtools-extension'
import logger from 'redux-logger'
import reducer from './_reducer'
import registerServiceWorker from './registerServiceWorker';
import App from './App';
import './index.css'; 

const store = createStore(
    reducer,
    map(),
    composeWithDevTools(
        applyMiddleware(
            logger,
            thunk
        )
    )
)

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>, document.getElementById('root'));

registerServiceWorker();
