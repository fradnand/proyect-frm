
import React from 'react'
import Colors from '../pages/Colors'
import DetailsThumb from '../pages/DetailsThumb';

class inicio extends React.Component{

    state = {
      products: [
        {
          "_id": "1",
          "title": "Mundo Nike",
          "src": [
              './img1.jpg',
              './img2.jpg',
              './img3.jpg',
              './img4.jpg'
            ],
          "description": "Exclusivo miembros Nike",
          "content": "Calzado para Hombre y Mujer",
          "price": 89.999,
          "colors":["red","black","crimson","teal"],
          "count": 1
        }
      ],
      index: 0
    };
  
    myRef = React.createRef();
  
    handleTab = index =>{
      this.setState({index: index})
      const images = this.myRef.current.children;
      for(let i=0; i<images.length; i++){
        images[i].className = images[i].className.replace("active", "");
      }
      images[index].className = "active";
    };
  
    componentDidMount(){
      const {index} = this.state;
      this.myRef.current.children[index].className = "active";
    }
  
  
    render(){
      const {products, index} = this.state;
      return(
        <div className="app">
          {
            products.map(item =>(
              <div className="details" key={item._id}>
                <div className="big-img">
                  <img src={item.src[index]} alt=""/>
                </div>
  
                <div className="box">
                  <div className="row">
                    <h2>{item.title}</h2>
                    <span>${item.price}</span>
                  </div>
                  <Colors colors={item.colors} />
  
                  <p>{item.description}</p>
                  <p>{item.content}</p>
  
                  <DetailsThumb images={item.src} tab={this.handleTab} myRef={this.myRef} />
                  <button className="cart">Agregar</button>
  
                </div>
              </div>
            ))
          }
        </div>
      );
    };
  }
  
  export default inicio;
