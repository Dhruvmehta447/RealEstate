import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-400 py-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Flipr Agency Task. All rights reserved.</p>
    </footer>
  );
};

export default Footer;