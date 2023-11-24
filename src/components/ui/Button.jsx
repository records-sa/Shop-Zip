import React from "react";

function Button({ text, onClick }) {
  return (
    <button
      className="bg-brand text-white py-2 px-4 rounded-sm hover:brightness-125"
      onClick={onClick}
    >
      {text}
    </button>
  );
}

export default Button;
