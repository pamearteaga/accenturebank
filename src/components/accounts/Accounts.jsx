import React, { Component } from 'react';
import '../accounts/Accounts.css';

const api_url = 'https://api.myjson.com/bins/qmxwd?pretty=1';

class Accounts extends Component {
  render() {
    return (
      <div id="cuentas">
        <button></button>
      <div className="Accounts">
        <img src="https://www.visa.com.mx/dirija-su-negocio/corporaciones/tarjetas/visa-prepago-agro/_jcr_content/par/cardstack/cardStackColumn2/image.img.jpg/1508184909985.jpg" />
        <p>Nº de cuenta: 0011-0166-0400656788</p>
        <p>Tipo de cuenta: Cuenta Ahorro</p>
        <h3>Saldo</h3>
        <h1>$3.629</h1>
        <h4>Movimientos</h4>
      </div>
      </div>
    );
  }
}

export default Accounts;