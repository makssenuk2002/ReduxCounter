import React from "react";
import ReactDOM from 'react-dom'
import {Provider} from "react-redux";
import {createStore , bindActionCreators} from "redux";
import reducer from "./reducer";
import App from "./components/App";
const  store = createStore(reducer)

ReactDOM.render(
   <Provider store={store}>
       <App/>
   </Provider>,
document.getElementById('root'))


