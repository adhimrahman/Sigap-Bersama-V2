import React from 'react';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-green-700 text-white">
      <h1 className="text-lg font-bold">Sigap Bersama</h1>
      <ul className="flex space-x-6">
        <li><a href="#bencana">Bencana</a></li>
        <li><a href="#limbah">Limbah</a></li>
        <li><a href="/signin">Login</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
