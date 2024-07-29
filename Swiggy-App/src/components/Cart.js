import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {

    const cartItems = useSelector((store) => store.cart.items);

    const dispatch = useDispatch();
    const handleClearCart = () => {
        dispatch(clearCart());
    }
    return (
        <div className="text-center m-5 p-5">
            <h1 className="font-bold text-2xl">Cart</h1>
            <div className="w-9/12 mx-auto my-10">
                {cartItems.length === 0 &&  <h1>Cart is Empty. Add Items to the Cart</h1>}
                <ItemList items={cartItems} />
                <button className="p-2 m-2 bg-black text-white rounded-md"
                onClick={handleClearCart}
                >Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart;