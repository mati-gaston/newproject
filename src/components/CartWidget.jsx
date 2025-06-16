import { CgShoppingCart } from "react-icons/cg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Badge } from "react-bootstrap";

const CartWidget = () => {
  const { cartQuantity } = useContext(CartContext);

  return (
    <div 
      style={{ position: 'relative', display: 'inline-block', cursor: 'pointer', padding: '0.5rem', backgroundColor: '#f4f4f4', borderRadius: '8px', boxShadow: '0 2px 5px rgba(0,0,0,0.1)'}}>
      <CgShoppingCart fontSize={'2rem'} color="#333" />

      {cartQuantity() > 0 && (
        <Badge 
          bg="danger" 
          pill 
          style={{ position: 'absolute', top: '5px', right: '5px', fontSize: '0.7rem', padding: '0.4rem 0.5rem', borderRadius: '50%', boxShadow: '0 0 4px rgba(0,0,0,0.2)'}}>
          {cartQuantity()}
        </Badge>
      )}
    </div>
  );
};

export default CartWidget;