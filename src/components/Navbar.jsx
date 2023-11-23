import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { BsShop, BsPencil } from "react-icons/bs";
import { login, logout, onUserStateChange } from "../api/firebase";
import User from "./User";

function Navbar() {
  const [user, setUser] = useState();

  useEffect(() => {
    onUserStateChange(setUser);
  }, []);

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl gap-2 text-brand">
        <BsShop />
        <h1>Shop Zip</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        <Link to="/carts">My Cart</Link>
        <Link to="/products/new" className="text-xl">
          <BsPencil />
        </Link>
        {user && <User user={user} />}
        {!user && <button onClick={login}>Login</button>}
        {user && <button onClick={logout}>Logout</button>}
      </nav>
    </header>
  );
}

export default Navbar;
