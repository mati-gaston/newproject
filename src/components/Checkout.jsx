import React, { useState, useContext } from 'react';
import { CartContext } from '../context/CartContext';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { Link } from 'react-router-dom';
import { db } from '../service/firebase';
import Swal from 'sweetalert2';

const Checkout = () => {
  const [buyer, setBuyer] = useState({});
  const [orderId, setOrderId] = useState('')
  const [validateEmail, setValidateEmail] = useState('');
  const  {cart, cartTotal, clear}=useContext(CartContext)

  const buyerData = (e) => {
    setBuyer({
      ...buyer,
      [e.target.name]: e.target.value
    });
  };

 const finalizarCompra = (e) => {

  e.preventDefault();

  if (!buyer.name || !buyer.address || !buyer.email) {
    Swal.fire({ icon: 'warning', title: 'Campos incompletos', text: '¡Todos los campos son requeridos!', confirmButtonColor: '#3085d6'});} else if (buyer.email !== validateEmail) {
    Swal.fire({icon: 'error', title: 'Correos no coinciden', text: '¡Los correos electrónicos no coinciden!', confirmButtonColor: '#d33'});} else {
    let orden = { comprador: buyer, compras: cart, total: cartTotal(), date: serverTimestamp()};

    const ventas = collection(db, "orders");

    addDoc(ventas, orden)
      .then((res) => {
       setOrderId(res.id);
        clear();
      })
      .catch((error) => console.log(error));
  }
};


  return (

    <>
        {
            orderId
             ?
            <div className="container d-flex justify-content-center align-items-center" style={{ minHeight: '70vh' }}>
  <div className="p-5 border rounded shadow bg-white text-center" style={{ maxWidth: '500px', width: '100%' }}>
    <div style={{ fontSize: '3rem' }}>🎉</div>
    <h2 className="mt-3 text-success">¡Compra realizada con éxito!</h2>
    <p className="mt-2">Tu pedido se generó correctamente 🍔</p>
    <p className="fw-bold">Código de pedido:</p>
    <p className="text-primary fs-5">{orderId}</p>
    <Link to='/' className='btn btn-success mt-4 w-100'>Volver al inicio</Link>
  </div>
</div>
             :
 
            <div className="container mt-5">
  <div className="row justify-content-center">
    <div className="col-md-6">
      <h1 className="text-center mb-4">Completa con tus datos</h1>
      <form onSubmit={finalizarCompra} autoComplete="off" className="p-4 border rounded shadow bg-light">
        <div className="mb-3">
          <input
            className="form-control"
            placeholder="Complete con su nombre completo"
            type="text"
            name="name"
            onChange={buyerData}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="text"
            placeholder="Complete con su dirección de envío"
            name="address"
            onChange={buyerData}
            autoComplete="off"
          />
        </div>
        <div className="mb-3">
          <input
            className="form-control"
            type="email"
            placeholder="Complete con su correo"
            name="email"
            onChange={buyerData}
            autoComplete="off"
          />
        </div>
        <div className="mb-4">
          <input
            className="form-control"
            type="email"
            placeholder="Repita su correo"
            name="email2"
            onChange={(e) => setValidateEmail(e.target.value)}
            autoComplete="off"
          />
        </div>
        <button className="btn btn-success w-100" type="submit">
          Finalizar Compra
        </button>
      </form>
    </div>
  </div>
</div>

        }
    </>

  );
};

export default Checkout;
