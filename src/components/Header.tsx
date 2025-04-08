
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-xl">Shadow Man</Link>
          </div>
          
          <nav>
            <ul className="flex space-x-6">
              <li>
                <Link to="/" className="text-sm font-medium transition-colors hover:text-primary">
                  Dashboard
                </Link>
              </li>
              <li>
                <Link to="/notes" className="text-sm font-medium transition-colors hover:text-primary">
                  Notes
                </Link>
              </li>
              <li>
                <Link to="/chat" className="text-sm font-medium transition-colors hover:text-primary">
                  Chat
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
