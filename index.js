import React from 'react';
import ReactDOM from 'react-dom'


const App = () =>(
    <p>Hello React</p>
)

ReactDOM.render(
    <App/>,
    document.getElementById('root')
);


// Hot Module Replacement
if (module.hot) {
  module.hot.accept();
}