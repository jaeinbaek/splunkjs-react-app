import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App'

function Index(props) {
  ReactDOM.render(
    <React.StrictMode>
      <App props={props}/>
    </React.StrictMode>,
    document.getElementById('root')
  );
}

export default Index;

