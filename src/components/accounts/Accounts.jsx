import React, { Component } from 'react';
import { Button, Row } from 'react-bootstrap';
import '../accounts/Accounts.css';
import MyAccounts from './MyAccounts';

const api_url = 'https://api.myjson.com/bins/17a7z1?pretty=1';

class Accounts extends Component {

constructor(props) {
    super(props);
    this.state = {
      loading: true,
      cuentas: null,
      select: '',
      selected: false,
      movimientos: null,
    }
    // this.fetchData = this.fetchData.bind(this);
  }

  fetchData(){ // Función que llama a la api
    fetch(api_url)
    .then(data => (data.json()))
    .then(results => {
      // console.log(results.DATA);
      
      this.setState({cuentas: results.DATA, loading: false
      })
    })
    .catch(error => console.log(error));
  }

  componentWillMount () { // Cliclo de vida que llama a la función
    this.fetchData();
  }

  componentDidMount() {
    const MovementsURL = 'https://api.myjson.com/bins/qmxwd?pretty=1';
    
    fetch(MovementsURL)
    .then(data => (data.json()))
    .then(results => {
      this.setState({movimientos: results.DATA})
    })
    .catch(error => console.log(error));
  }

  select(event) {
    console.log(event.target.id);
    this.setState({select: event.target.id, selected:true,
    })
  }

  render() {
    const {cuentas, loading, selected, movimientos,select} = this.state;
    console.log(this.state);
    return (
      <div>
        { selected === false ? 
          <div className="Accounts">
            {loading === false ? cuentas.LISTA_CTA.map(acc => {
              let type = {};
              if (acc.TIPO_CTA) {
                type = acc.TIPO_CTA
              } else (
                type = acc.TYPE_CTA
              )
              return (
                <Row key={acc.NCUENTA}>
                  <Button  id={acc.NCUENTA} onClick={this.select.bind(this)}>
                    <h4>{acc.NCUENTA}</h4>
                    <p>{type}</p>
                    <p>{acc.SALDO} Soles</p>
                  </Button>
                </Row>
              )
            }) : 
            <h3> Cargando
            </h3>
            }
          </div>
        : 
         <MyAccounts select={select} movimientos={movimientos} />
        }
      </div>
    );
  }
}

export default Accounts;