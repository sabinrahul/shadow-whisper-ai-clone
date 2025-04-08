
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { checkBackendHealth } from '@/utils/api';
import { Wifi, WifiOff } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip";

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

    // Check on initial load
    checkConnection();

    // Set up periodic checks
    const interval = setInterval(checkConnection, 30000); // Check every 30 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <header className="bg-card border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link to="/" className="font-bold text-xl">Shadow Man</Link>
            
            {/* API Connection Status */}
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
