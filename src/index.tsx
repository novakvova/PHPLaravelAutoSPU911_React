import "bootstrap/dist/css/bootstrap.css";
import "font-awesome/css/font-awesome.min.css";
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {store} from './store';
import { Provider } from "react-redux";
import { AuthUser } from './components/auth/Login/actions';

const token = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOlwvXC9sb2NhbC5sYXJhdmVsLnNwdTkxMS5jb206MTAwXC9hcGlcL2F1dGhcL2xvZ2luIiwiaWF0IjoxNjM5MjE5NjMzLCJleHAiOjE2MzkyMjMyMzMsIm5iZiI6MTYzOTIxOTYzMywianRpIjoia29KYXZPUUxZNGw0U0FzSCIsInN1YiI6MywicHJ2IjoiMjNiZDVjODk0OWY2MDBhZGIzOWU3MDFjNDAwODcyZGI3YTU5NzZmNyIsImVtYWlsIjoic2xhdmlrQG1vcmt2YS5jb20iLCJpbWFnZSI6Imh0dHA6XC9cL21lbWVzbWl4Lm5ldFwvbWVkaWFcL2NyZWF0ZWRcL28yaHM1NS5qcGcifQ.4NqGRsziJSZzmBY4R9dOzslxsqIcBcffO_4C8FTPX6Q";
AuthUser(token, store.dispatch);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
