
import React, { Component } from 'react';
import axios from 'axios';
import { bgBlack } from 'jest-matcher-utils/node_modules/chalk';

class lista extends Component {
  state={
    ciudades:[]
  }
  componentDidMount(){
    axios.get("http://localhost:3000/ciudades")
    .then((response) => {
      this.setState({ciudades: response.data})
    })
    .catch((console) => {
    });
  } 
  
  render(){
    return(
      <div className="Appi">
        <div className="form-group">
          <select name="ciudades" className="form-control">
            {this.state.ciudades.map(elemento=>(
              <option key={elemento.id} value={elemento.ciudad}>{elemento.ciudad}</option>
              )
              
              )}
          </select>
        </div>
      </div>        
    );
  }

}

export default lista