import React, { Component } from 'react';
import { Button, Row, Panel} from 'react-bootstrap';
import './../../components/accounts/MyAccounts.css';

class MyAccounts extends Component {
  constructor(movimientos, select) {
    super(movimientos, select);
    this.state = {
      movimientos,
      select,
      cuenta: null,
      loading: true
    };
  }

  componentWillMount() {
    const movimientos = this.props.movimientos;
    const select = this.props.select;
    console.log(movimientos);

    const newMove = movimientos.filter(function (el) {
      return el.NCUENTA == select;
    });

    console.log(newMove[0]);
    this.setState({ cuenta: newMove[0], loading: false, })
  }

  render() {
    const { cuenta, loading } = this.state;
    return (
      <div className="Accounts">
        {loading === false ?
          cuenta.MOVIMIENTOS.map(acc => {
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