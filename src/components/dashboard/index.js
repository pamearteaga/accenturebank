import React, { Component } from 'react';
import './style.css'
//Components
import ChartResume from './chartResume'; 
import ResumeSaldo from './resumeSaldo'; 
import Gastado from './gastado'; 

export default class Dashboard extends Component {
  render() {
    return (
      <div className='box-dashboard'>
          <ResumeSaldo />      
          <ChartResume />
          <Gastado />
      </div>
    )
  }
};

