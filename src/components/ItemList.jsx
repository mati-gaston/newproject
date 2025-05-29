import React from 'react'
import Item from './Item'


const ItemList = (  {data}) => {
  return (
    <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', padding:'2:rem'}} > 
            { data.map ((productos)=> <Item key={productos.id} productos =  {productos}/> ) }    

    </div>
  )
}

export default ItemList 