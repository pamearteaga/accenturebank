import React, { Component } from 'react';
import '../accounts/Accounts.css';

const api_url = 'https://api.myjson.com/bins/17a7z1?pretty=1';

class Accounts extends Component {

constructor(props) {
    super(props);
    this.state = {
      cuentas: [],
    }
    this.fetchData = this.fetchData.bind(this);
  }

  fetchData(){ // Función que llama a la api
    fetch(api_url)
    .then(data => (data.json()))
    .then(results => {
      const api_data = results;
      this.setState({cuentas: api_data})
    })
  }

  componentDidMount() { // Cliclo de vida que llama a la función
    this.fetchData();
  }

  render() {
    const {cuentas} = this.state;
    const prueba = cuentas.DATA;
    console.log(prueba);
    return (
      <div className="Accounts">
        <select>
          <option value="1">Cuenta 1</option>
          <option value="2">Cuenta 2</option>
          <option value="3">Cuenta 3</option>
        </select>
        <a id="fecha"><span className="glyphicon glyphicon-calendar" aria-hidden="true"></span></a>
          <div id="card1">
            <img src="https://www.visa.com.mx/dirija-su-negocio/corporaciones/tarjetas/visa-prepago-agro/_jcr_content/par/cardstack/cardStackColumn2/image.img.jpg/1508184909985.jpg" />
            <p>Nº de cuenta:</p>
            <p>Tipo de cuenta: Cuenta Ahorro</p>
            <h3>Saldo</h3>
            <h1>$3.629</h1>
            <div className="movimientos">
              <h4>Movimientos</h4>
              <div className="detalle">
                <span className="empresa">STARBUCK</span>
                <span className="monto">Monto: -16.00</span>
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Accounts;