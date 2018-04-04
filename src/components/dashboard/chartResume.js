import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap'; 
import { Area, AreaChart, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import './style.css'

const data = [
  {name: '1', ingresos: 2710, egresos: 233},
  {name: '2', ingresos: 24, egresos:0 },
  {name: '3', ingresos: 0, egresos:73},
  {name: '4', ingresos: 0, egresos:120 },
  {name: '5', ingresos: 0, egresos:150 },
  {name: '6', ingresos: 0, egresos: 198},
  {name: '8', ingresos: 0, egresos:290 },
  {name: '10', ingresos: 0, egresos:10 },
  {name: '11', ingresos: 0, egresos:5 },
  {name: '12', ingresos: 0, egresos:91 },
  {name: '15', ingresos: 2500, egresos:0},
  {name: '16', ingresos: 100, egresos:100 },
  {name: '17', ingresos: 20, egresos:500 },
  {name: '18', ingresos: 0, egresos:40 },
  {name: '19', ingresos: 0, egresos:30 },
  {name: '20', ingresos: 0, egresos:12 },
  {name: '22', ingresos: 200, egresos:80 },
];

export default class ChartResume extends Component {
  render() {
    return (
      <Grid>
        <div className= 'chartResume'>
          <Col md={12} className='chart-box'>
          <AreaChart className='areaChart'width = {250} height={210} data={data}
            margin={{ top: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#0088FE" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#0088FE" stopOpacity={0}/>
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#AE0B05" stopOpacity={0.8}/>
                <stop offset="95%" stopColor="#AE0B05" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <XAxis dataKey="name" />
            <YAxis />
            <CartesianGrid strokeDasharray="5 5" />
            <Tooltip />
            <Area type="monotone" dataKey="ingresos" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
            <Area type="monotone" dataKey="egresos" stroke="#AE0B05" fillOpacity={1} fill="url(#colorPv)" />
            <Legend /> 
          </AreaChart>
          </Col>
        </div>
      </Grid>
    )
  }
};
