
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-50 to-purple-100 flex items-center justify-center p-4">
      <div className="max-w-4xl w-full">
        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-4 text-center">Welcome to Shadow Man</h1>
        <p className="text-xl text-gray-600 mb-8 text-center">Your personal AI digital twin assistant</p>
        
        <div className="flex flex-col items-center justify-center max-w-md mx-auto space-y-4">
          <Card className="w-full bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">New User?</CardTitle>
              <CardDescription className="text-gray-600">Create your account to get started</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                size="lg" 
                className="w-full bg-gray-900 text-white hover:bg-gray-800 transition-colors"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </CardContent>
          </Card>
          
          <Card className="w-full bg-white/90 backdrop-blur-sm">
            <CardHeader>
              <CardTitle className="text-2xl text-gray-900">Returning User?</CardTitle>
              <CardDescription className="text-gray-600">Sign in to access your digital twin</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-gray-900 text-gray-900 hover:bg-gray-100 transition-colors"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Landing;
