import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';

class Car extends React.Component{
  render(){
    return <h2> I am in car Class </h2>
  }
}
render(<Car />, document.getElementById('root'));
