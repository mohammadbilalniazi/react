import React from 'react';
//import ReactDOM from 'react-dom/client';
import ReactDOM from "react-dom";
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
//import registerServiceWorker from './registerServiceWorker'
import reportWebVitals from './reportWebVitals'
import Counters from './components/counters'
// import reportWebVitals from './reportWebVitals';
//#####################billal##################
//import React from 'react';
//import ReactDom from 'react-dom'

const element = <h1>Bilal Application</h1>

// ReactDOM.render(element, document.getElementById("root"))
ReactDOM.render(<Counters />, document.getElementById("root"))


//console.log(element);
//const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportW
// ##################bill###########


