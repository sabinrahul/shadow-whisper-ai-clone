
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
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
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row items-start gap-6">
            <div className="w-full md:w-1/3">
              <Card>
                <CardHeader>
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-2">
                      <AvatarImage src="/placeholder.svg" />
                      <AvatarFallback className="bg-primary text-primary-foreground text-xl">SM</AvatarFallback>
                    </Avatar>
                    <CardTitle className="mt-2">John Doe</CardTitle>
                    <CardDescription>john.doe@example.com</CardDescription>
                    <Badge className="mt-2">Premium User</Badge>
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
            
            <div className="w-full md:w-2/3">
              <Tabs defaultValue="details" className="w-full">
                <TabsList className="grid grid-cols-3 mb-4">
                  <TabsTrigger value="details">Profile Details</TabsTrigger>
                  <TabsTrigger value="preferences">Preferences</TabsTrigger>
                  <TabsTrigger value="security">Security</TabsTrigger>
                </TabsList>
                
                <TabsContent value="details" className="space-y-4">
                  <Card>
                    <CardHeader>
                      <CardTitle>Personal Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Full Name</p>
                        <p>John Doe</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Email Address</p>
                        <p>john.doe@example.com</p>
                      </div>
                      <Separator />
                      <div>
                        <p className="text-sm font-medium text-muted-foreground">Account Created</p>
                        <p>April 23, 2025</p>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="preferences">
                  <Card>
                    <CardHeader>
                      <CardTitle>User Preferences</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Preference settings would go here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
                
                <TabsContent value="security">
                  <Card>
                    <CardHeader>
                      <CardTitle>Security Settings</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p>Security settings would go here.</p>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Profile;
