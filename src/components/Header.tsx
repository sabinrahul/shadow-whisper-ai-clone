
import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Book, MessageSquare } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Header = () => {
  return (
    <header className="bg-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-xl">Shadow Man</Link>
          </div>
          
          <div className="flex items-center">
            <nav className="mr-4">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-900 flex items-center gap-1.5">
                    <Home className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-900" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/notes" className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-900 flex items-center gap-1.5">
                    <Book className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-900" />
                    <span>Notes</span>
                  </Link>
                </li>
                <li>
                  <Link to="/chat" className="text-sm font-medium text-gray-400 transition-colors hover:text-gray-900 flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4 text-gray-400 transition-colors group-hover:text-gray-900" />
                    <span>Chat</span>
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="h-10 w-10 rounded-full p-0 hover:bg-gray-100">
                    <Avatar>
                      <AvatarFallback className="bg-primary text-primary-foreground">SM</AvatarFallback>
                    </Avatar>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>
                    <Link to="/profile" className="w-full flex items-center hover:text-gray-900">Profile</Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem>
                    <Link to="/landing" className="w-full flex items-center hover:text-gray-900">Log out</Link>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
