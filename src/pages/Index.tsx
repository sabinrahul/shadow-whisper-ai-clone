import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, Calendar, MessageSquare, Mic, Brain, Settings, PieChart, Activity, Clock } from "lucide-react";
import Dashboard from "@/components/Dashboard";
import PersonalizationPanel from "@/components/PersonalizationPanel";
import AutomationPanel from "@/components/AutomationPanel";
import VoicePanel from "@/components/VoicePanel";
import SettingsPanel from "@/components/SettingsPanel";
import Header from "@/components/Header";

const Index = () => {
  const [activeTab, setActiveTab] = useState("dashboard");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex flex-col md:flex-row gap-6">
          
          {/* Sidebar */}
          <div className="w-full md:w-64 space-y-4">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Shadow Man</CardTitle>
                <CardDescription>Your AI Digital Twin</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col items-center mb-4">
                  <Avatar className="h-24 w-24 mb-2">
                    <AvatarImage src="/placeholder.svg" />
                    <AvatarFallback className="bg-primary text-primary-foreground text-xl">SM</AvatarFallback>
                  </Avatar>
                  <div className="text-center">
                    <p className="font-medium">AI Learning Progress</p>
                    <Progress value={67} className="h-2 mt-1" />
                    <p className="text-sm text-muted-foreground mt-1">67% Complete</p>
                  </div>
                </div>
                
                <nav className="space-y-1">
                  <Button 
                    variant={activeTab === "dashboard" ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab("dashboard")}
                  >
                    <PieChart className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                  <Button 
                    variant={activeTab === "personalization" ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab("personalization")}
                  >
                    <Brain className="mr-2 h-4 w-4" />
                    Personalization
                  </Button>
                  <Button 
                    variant={activeTab === "automation" ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab("automation")}
                  >
                    <Activity className="mr-2 h-4 w-4" />
                    Automation
                  </Button>
                  <Button 
                    variant={activeTab === "voice" ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab("voice")}
                  >
                    <Mic className="mr-2 h-4 w-4" />
                    Voice Training
                  </Button>
                  <Button 
                    variant={activeTab === "settings" ? "default" : "ghost"} 
                    className="w-full justify-start" 
                    onClick={() => setActiveTab("settings")}
                  >
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                </nav>
              </CardContent>
            </Card>
            
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">AI Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-2 text-blue-500" />
                    <div className="flex-1">
                      <p className="text-sm">Emails Handled</p>
                      <p className="text-xl font-bold">24</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-2 text-green-500" />
                    <div className="flex-1">
                      <p className="text-sm">Meetings Scheduled</p>
                      <p className="text-xl font-bold">8</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <MessageSquare className="h-4 w-4 mr-2 text-purple-500" />
                    <div className="flex-1">
                      <p className="text-sm">Messages Sent</p>
                      <p className="text-xl font-bold">56</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-2 text-amber-500" />
                    <div className="flex-1">
                      <p className="text-sm">Time Saved</p>
                      <p className="text-xl font-bold">3.2h</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
          
          {/* Main Content */}
          <div className="flex-1">
            <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
              <TabsContent value="dashboard">
                <Dashboard />
              </TabsContent>
              <TabsContent value="personalization">
                <PersonalizationPanel />
              </TabsContent>
              <TabsContent value="automation">
                <AutomationPanel />
              </TabsContent>
              <TabsContent value="voice">
                <VoicePanel />
              </TabsContent>
              <TabsContent value="settings">
                <SettingsPanel />
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
