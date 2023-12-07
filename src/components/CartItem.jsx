import React from "react";
import { addOrUpdateToCart, removeFromCart } from "../api/firebase";

const ICON_CLASS =
  "transition-all cursor-pointer hover:text-brand hover:scale-105 mx-1";

function CartItem({
  product,
  product: { id, image, title, option, quantity, price },
  uid,
}) {
  const handleMinus = () => {
    if (quantity < 2) return;
    addOrUpdateToCart(uid, { ...product, quantity: quantity - 1 });
  };

  const handlePlus = () => {
    addOrUpdateToCart(uid, { ...product, quantity: quantity + 1 });
  };

  const handleDelete = () => {
    removeFromCart(uid, id);
  };

  return (
    <li className="flex justify-between my-2 items-center">
      <img className="w-24 md:w-48 rounded-lg" src={image} alt={title} />
      <div className="flex-1 flex justify-between ml-4">
        <div className="basis-3/5">
          <p className="text-lg">{title}</p>
          <p className="text-xl font-bold text-brand">{option}</p>
          <p>{price} 원</p>
        </div>
        <div className="text-2xl flex items-center">
          <button className={ICON_CLASS} onClick={handleMinus}>
            -
          </button>
          <p>{quantity}</p>
          <button className={ICON_CLASS} onClick={handlePlus}>
            +
          </button>
          <button className={ICON_CLASS} onClick={handleDelete}>
            trash
          </button>
        </div>
      </div>
    </li>
  );
}

export default CartItem;
