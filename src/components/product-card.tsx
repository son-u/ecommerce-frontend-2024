// import { FaPlus } from "react-icons/fa";
import { server } from "../redux/store";
import { CartItem } from "../types/types";
import "../styles/hero.css";
import cart from "../assets/images/cart.png";

type ProductsProps = {
  productId: string;
  photo: string;
  name: string;
  price: number;
  stock: number;
  handler: (cartItem: CartItem) => string | undefined;
};

const ProductCard = ({
  productId,
  price,
  name,
  photo,
  stock,
  handler,
}: ProductsProps) => {
  return (
    <>
      <div className="product-card">
        <img className="product-img" src={`${server}/${photo}`} alt={name} />
        <p>{name}</p>

        <div className="description">
          <span>₹{price}</span>

          <button
            className="button-name"
            onClick={() =>
              handler({ productId, price, name, photo, stock, quantity: 1 })
            }
          >
            <img src={cart} alt="cart image" />
            Add to Cart
          </button>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
