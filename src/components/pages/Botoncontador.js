
import React from 'react'

class Boton extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      contador : 0
    }; 
  }
  onClickHandler(){
    this.setState({
       contador : this.state.contador+1
    });
  }
  
  render(){
    return (
      <div>  
        <Contador valor={this.state.contador}/>
        <Button label="Agregar" onClick={()=>this.onClickHandler()} />
      </div>
    )
  }
}

const Contador = props => {
  return(
    <div>
      <h1>{props.valor}</h1>
    </div>
  );
};
const Button = props => {
    return (
      <button onClick={()=>props.onClick()}> {props.label}</button>
    );
};

export default Boton