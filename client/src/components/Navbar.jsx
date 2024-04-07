// src/components/Navbar.js

import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-blue-500 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-3xl font-bold">Gyaansparsh</h1>
        <div className="flex space-x-4">
          <Link to="/" className="text-white hover:text-gray-200">
            Upload
          </Link>
          <Link to="/team" className="text-white hover:text-gray-200">
            Team
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
