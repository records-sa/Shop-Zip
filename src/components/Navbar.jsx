import React from "react";
import { Link } from "react-router-dom";
import { BsShop, BsPencil, BsCart3 } from "react-icons/bs";
import User from "./User";
import Button from "./ui/Button";
import { useAuthContext } from "../context/AuthContext";

function Navbar() {
  const { user, login, logout } = useAuthContext();

  return (
    <header className="flex justify-between border-b border-gray-300 p-2">
      <Link to="/" className="flex items-center text-4xl gap-2 text-brand">
        <BsShop />
        <h1>Shop Zip</h1>
      </Link>
      <nav className="flex items-center gap-4 font-semibold">
        <Link to="/products">Products</Link>
        {user && (
          <Link to="/carts" className="text-xl">
            <BsCart3 />
          </Link>
        )}
        {user && user.isAdmin && (
          <Link to="/products/new" className="text-xl">
            <BsPencil />
          </Link>
        )}
        {user && <User user={user} />}
        {!user && <Button text={"Login"} onClick={login} />}
        {user && <Button text={"Logout"} onClick={logout} />}
      </nav>
    </header>
  );
}

export default Navbar;
