
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Landing = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-b from-purple-700 to-indigo-900 flex flex-col items-center justify-center p-4">
      <div className="max-w-4xl w-full text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">Welcome to Shadow Man</h1>
        <p className="text-xl text-gray-200 mb-8">Your personal AI digital twin assistant</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-white">New User?</CardTitle>
              <CardDescription className="text-gray-200">Create your account to get started</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                size="lg" 
                className="w-full bg-white text-purple-900 hover:bg-gray-200 transition-colors"
                onClick={() => navigate('/signup')}
              >
                Sign Up
              </Button>
            </CardContent>
          </Card>
          
          <Card className="bg-white/10 backdrop-blur-sm border-none">
            <CardHeader>
              <CardTitle className="text-2xl text-white">Returning User?</CardTitle>
              <CardDescription className="text-gray-200">Sign in to access your digital twin</CardDescription>
            </CardHeader>
            <CardContent className="flex justify-center">
              <Button 
                size="lg"
                variant="outline"
                className="w-full border-white text-white hover:bg-white/20 transition-colors"
                onClick={() => navigate('/login')}
              >
                Login
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
      
      <footer className="text-gray-300 text-sm mt-auto">
        © 2025 Shadow Man - AI Digital Twin
      </footer>
    </div>
  );
};

export default Landing;
