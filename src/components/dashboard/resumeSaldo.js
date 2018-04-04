import React, { Component } from 'react';
import {Grid, Col, Row} from 'react-bootstrap'; 

export default class ResumeSaldo extends Component {
  render() {
    return (
      <Grid>
        <Row className='resumeSaldo'>
          <Col xs={10} sm={10} md={8} lg={8} xsOffset={1} mdOffset={2} className='saldoContable'>
            <h4> Saldo acumulado en mis cuentas:</h4>
            <h3> $11868</h3>
          </Col>
        </Row>
      </Grid>
    )
  }
};
