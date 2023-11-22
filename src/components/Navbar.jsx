import React from "react";
import { Link } from "react-router-dom";
import { BsShop, BsPencil } from "react-icons/bs";

function Navbar() {
  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl text-brand">
        <BsShop />
        <h1>Shop Zip</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">My Cart</Link>
        <Link to="/products/new" className="text-xl">
          <BsPencil />
        </Link>
        <button>Login</button>
      </nav>
    </header>
  );
}

export default Navbar;
