
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkBackendHealth } from '@/utils/api';
import { Wifi, WifiOff, LogIn, UserPlus, Home, Book, MessageSquare } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [apiConnected, setApiConnected] = useState<boolean | null>(null);

  useEffect(() => {
    const checkConnection = async () => {
      try {
        const isConnected = await checkBackendHealth();
        setApiConnected(isConnected);
      } catch (error) {
        console.error('Error checking API connection:', error);
        setApiConnected(false);
      }
    };

    checkConnection();

    const interval = setInterval(checkConnection, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-xl">Shadow Man</Link>
            
            <TooltipProvider>
              <Tooltip>
                <TooltipTrigger>
                  <div className="ml-2 flex items-center">
                    {apiConnected === null ? (
                      <div className="w-4 h-4 rounded-full bg-gray-300 animate-pulse" />
                    ) : apiConnected ? (
                      <Wifi className="w-4 h-4 text-green-500" />
                    ) : (
                      <WifiOff className="w-4 h-4 text-red-500" />
                    )}
                  </div>
                </TooltipTrigger>
                <TooltipContent>
                  {apiConnected === null 
                    ? "Checking API connection..." 
                    : apiConnected 
                      ? "API connected" 
                      : "API disconnected - some features may not work"}
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          </div>
          
          <div className="flex items-center">
            <nav className="mr-4">
              <ul className="flex space-x-6">
                <li>
                  <Link to="/" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
                    <Home className="h-4 w-4" />
                    <span>Home</span>
                  </Link>
                </li>
                <li>
                  <Link to="/notes" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
                    <Book className="h-4 w-4" />
                    <span>Notes</span>
                  </Link>
                </li>
                <li>
                  <Link to="/chat" className="text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5">
                    <MessageSquare className="h-4 w-4" />
                    <span>Chat</span>
                  </Link>
                </li>
              </ul>
            </nav>
            
            <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" asChild>
                <Link to="/login" className="flex items-center gap-2">
                  <LogIn className="h-4 w-4" />
                  <span>Login</span>
                </Link>
              </Button>
              
              <Button size="sm" asChild>
                <Link to="/signup" className="flex items-center gap-2">
                  <UserPlus className="h-4 w-4" />
                  <span>Sign Up</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
