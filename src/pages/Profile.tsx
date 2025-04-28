
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Header from '@/components/Header';
import { useAuth } from '../App';
import { useNavigate } from 'react-router-dom';
import { Mail, Phone, MapPin, Briefcase, Calendar, Globe } from 'lucide-react';

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
        <div className="max-w-3xl mx-auto space-y-6">
          <Card className="bg-purple-50/50">
            <CardHeader>
              <div className="flex flex-col items-center">
                <Avatar className="h-24 w-24 mb-4">
                  <AvatarFallback className="bg-primary text-primary-foreground text-xl">JD</AvatarFallback>
                </Avatar>
                <CardTitle className="text-2xl mb-2">John Doe</CardTitle>
                <p className="text-muted-foreground">Senior Software Engineer</p>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Mail className="h-4 w-4 text-purple-600" />
                      <span>john.doe@example.com</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Phone className="h-4 w-4 text-purple-600" />
                      <span>+1 (555) 123-4567</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="h-4 w-4 text-purple-600" />
                      <span>San Francisco, CA</span>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-purple-600" />
                      <span>Tech Solutions Inc.</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="h-4 w-4 text-purple-600" />
                      <span>Joined April 2023</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-purple-600" />
                      <span>portfolio.example.com</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-4 pt-6">
                  <div>
                    <h3 className="font-medium text-lg mb-2">About</h3>
                    <p className="text-muted-foreground">
                      Passionate software engineer with expertise in full-stack development.
                      Focused on creating efficient and scalable solutions for complex problems.
                    </p>
                  </div>
                  
                  <div>
                    <h3 className="font-medium text-lg mb-2">Skills</h3>
                    <div className="flex flex-wrap gap-2">
                      {['React', 'TypeScript', 'Node.js', 'Python', 'AWS', 'Docker'].map((skill) => (
                        <span key={skill} className="px-3 py-1 bg-purple-100 text-purple-700 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="flex gap-4 pt-6">
                  <Button variant="outline" className="flex-1 hover:bg-purple-100">
                    Edit Profile
                  </Button>
                  <Button variant="destructive" className="flex-1" onClick={handleLogout}>
                    Logout
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;
