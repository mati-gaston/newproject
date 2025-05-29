import React from 'react';
import { Link } from 'react-router-dom';

const Item = (  {productos}) => {
  return (
<div className="card" style={{width: '18rem', alignSelf: 'center', marginTop:5}}>
  <img src= {productos.img} class="card-img-top" alt={productos.name}/> 
  <div className="card-body">
    <h5 className="card-title"> {productos.name}</h5>
    <p className="card-text">   {productos.description}</p>
    <p className="card-text">   ${productos.price}.00</p>
    < Link to={`/item/${productos.id}`} className="btn btn-primary">Ver más</Link>
  </div>
</div>
  )
}

export default Item