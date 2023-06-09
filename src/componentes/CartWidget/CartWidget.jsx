import './CartWidget.css'

const CartWidget = () => {
    const cart = "https://freeiconshop.com/wp-content/uploads/edd/cart-outline.png"
  return (
    <div>
        <img className="cart" src={cart} alt="Cart Image"/>
        <strong> 10 </strong>
    </div>
  )
}

export default CartWidget