import React, { Component } from 'react';
import {Grid, Row, Col } from 'react-bootstrap';
import {Pie, PieChart, Cell } from 'recharts'; 


const data = [{name: 'Gastado', value: 1932}, {name: 'Ingreso Mes', value: 5234}]
const COLORS = ['#6EF618','#0088FE' ];
const COLORS01 = ['#6EF618', '#FCF507', '#E40613'];
const data01 = [{value: 70, name:'Poco gasto'}, {value: 20, name:'gasto medio'}, {value:10, name:'haz gastado mucho'}];

export default class Gastado extends Component {
  render() {
    return (
      <Grid>
        <div className = 'gastado'>
            <Col xs={12} sm={12} md={6} lg={6} >
              <h4 className='consumido'>Haz consumido un 26% de los ingresos de este mes</h4>             
              <PieChart width={350} height={150} onMouseEnter={this.onPieEnter}>
                <Pie
                  data={data}
                  dataKey="value"
                  cx={130} 
                  cy={68} 
                  innerRadius={20}
                  outerRadius={40} 
                  fill="#8884d8"
                  paddingAngle={5}

                >
                  {
                    data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
                  }
                </Pie>
                <Pie
                  data={data01}
                  dataKey="value"
                  nameKey="name "
                  cx={130} 
                  cy={68} 
                  innerRadius={45}
                  outerRadius={55} 
                  fill="#8884d8"
                  paddingAngle={5}
                  label 
                >
                  {
                    data01.map((entry, index) => <Cell fill={COLORS01[index % COLORS01.length]}/>)
                  }
                </Pie>
                
              </PieChart>
            </Col>
    
        </div>  
      </Grid>

    )
  }
};
