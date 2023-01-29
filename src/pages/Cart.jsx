import Header from "../componants/Header";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import CartItem from "../componants/CartItem";
import { clearCart } from "../store/reducers/cart";

const Cart = ()=>{
    const cart = useSelector((state)=>state.cart);
    const dispatch = useDispatch();
    let totalAmount = 0;
    cart.forEach((item)=> totalAmount += item.price*item.quantity);
    return(
        <div>
            <Header />
            <div className="account-setting__content">
                <div className="account-setting__content__title">
                    <h4>Product list in your cart</h4>
                </div>
                <div className="product-table-container">
                    <table>
                        <thead>
                            <tr>
                                <th>Image</th>
                                <th>PRODUCT NAME</th>
                                <th>Price</th>
                                <th>Quantity</th>
                                <th>Subtotal</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {cart.map(item => (
                                 <CartItem key = {item.id} item = {item} />
                                 //<p key = {item.id}> {item.title}</p>
                            ))}
                        </tbody>
                    </table>
                </div>
                {cart.length>=1 ? <h2 className="total-price"> You Total Price Will be $ ${totalAmount} </h2> : <h3 className="total-price">You didn't add any product in cart <Link to="/">Back to shope</Link></h3>}
                <div className="mt-50">
                    <button onClick={() => dispatch(clearCart())} type="button" className="btn-big">Clear Cart</button>
                </div>
            </div>
        </div>
    )
}
export default Cart;