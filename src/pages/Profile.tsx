
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from '@/components/Header';
import { useAuth } from '../App';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/landing');
  };

  return (
    <div className="min-h-screen flex flex-col bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6 flex-1">
        <div className="max-w-md mx-auto">
          <Card>
            <CardHeader>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl mb-2">John Doe</CardTitle>
                <p className="text-muted-foreground">john.doe@example.com</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <Button variant="outline" className="w-full">
                  Edit Profile
                </Button>
                <Button variant="destructive" className="w-full" onClick={handleLogout}>
                  Logout
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
