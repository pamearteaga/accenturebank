import React, { Component } from 'react';
import { Button, Row, Panel} from 'react-bootstrap';
import './../../components/accounts/MyAccounts.css';
import DatePicker from 'react-datepicker';
import moment from 'moment';
import 'react-datepicker/dist/react-datepicker.css';

moment.locale('es');

class MyAccounts extends Component {
  constructor(movimientos, select, selected) {
    super(movimientos, select, selected);
    this.state = {
      movimientos,
      select,
      cuenta: null,
      loading: true,
      selected,
      fechas: null,
      singleMove: null,
    };
  }

  componentWillMount() {
    const movimientos = this.props.movimientos;
    const select = this.props.select;
    console.log(movimientos);

    const newMove = movimientos.filter(function(el) {
      return el.NCUENTA == select;
    });

    console.log(newMove[0].MOVIMIENTOS);
    
    const datearray = [];
    newMove[0].MOVIMIENTOS.map(date => (
      datearray.push(moment(date.FECHA, "DD-MM-YYYY"))
    ))
    console.log(datearray);
    
    this.setState({
      cuenta: newMove[0],
      singleMove: newMove[0].MOVIMIENTOS,
      loading: false,
      fechas: datearray,
    })
  }

  handleclick() {
    this.props.selected(false);
  }

  handleChange(event) {
    console.log(event._d.toString());
    const date = event._d.toString();
    const formatdate = moment(date).format('DD-MM-YYYY');
    console.log(formatdate);
    const movimientos = this.state.cuenta.MOVIMIENTOS;
    const newMove = movimientos.filter(function(el) {
      return el.FECHA == formatdate;
    });

    console.log(newMove);
    this.setState({
      singleMove: newMove,
    })
    

    // const fechas = this.state.fechas;
    // const newDates = fechas.filter(function(el) {
    // return el == newDates;
    // });
    // console.log(newDates);
    
  }

  render() {
    const { cuenta, loading, fechas, singleMove } = this.state;
    console.log(this.state);
    
    return (
      <div className="Accounts">
        <Button onClick={this.handleclick.bind(this)}>Regresar</Button>
        <DatePicker
          onChange={this.handleChange.bind(this)}
          includeDates={fechas}
          placeholderText="Fechas con Movimientos" />

        {loading === false ?
          singleMove.map(acc => {
            return (
              <Row key={acc.FECHA}>
                <div>
                  <Panel className="panel">
                    <Panel.Heading>
                      <h4>{acc.EMPRESA}</h4>
                    </Panel.Heading>
                    <Panel.Body>
                      <p>Fecha: {acc.FECHA}</p>
                      <p>Monto: {acc.MONTO} Soles</p>
                    </Panel.Body>
                  </Panel>
                </div>
              </Row>
            )
          })
          :
          <h2> Cargando</h2>
        }
      </div>
    );
  }
}

export default MyAccounts;