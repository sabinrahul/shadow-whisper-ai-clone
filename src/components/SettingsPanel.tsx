import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { useToast } from "@/hooks/use-toast";
import {
  Shield,
  Cloud,
  Database,
  Bell,
  Languages,
  LockKeyhole,
  Share2,
  Trash2,
  RefreshCw,
} from "lucide-react";

const SettingsPanel = () => {
  const { toast } = useToast();

  const handleSaveSettings = (section: string) => {
    toast({
      title: "Settings Saved",
      description: `Your ${section} settings have been saved successfully.`,
    });
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI Settings & Configuration</CardTitle>
          <CardDescription>
            Configure your AI twin settings and connections
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="general">
            <TabsList className="grid grid-cols-4 w-full">
              <TabsTrigger value="general">General</TabsTrigger>
              <TabsTrigger value="security">Security</TabsTrigger>
              <TabsTrigger value="integrations">Integrations</TabsTrigger>
              <TabsTrigger value="advanced">Advanced</TabsTrigger>
            </TabsList>
            
            <TabsContent value="general" className="mt-4 space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Notification Settings</Label>
                    <p className="text-sm text-muted-foreground">
                      Receive notifications when your AI twin performs actions
                    </p>
                  </div>
                  <Switch id="notifications" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">AI Activity Log</Label>
                    <p className="text-sm text-muted-foreground">
                      Record detailed logs of all AI actions for review
                    </p>
                  </div>
                  <Switch id="activity-log" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div>
                    <Label className="text-base">Language Preferences</Label>
                    <p className="text-sm text-muted-foreground">
                      Select primary and secondary languages for your AI
                    </p>
                  </div>
                  <div className="flex items-center">
                    <Languages className="h-4 w-4 mr-2 text-muted-foreground" />
                    <span className="text-sm">English (US)</span>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button className="w-full" onClick={() => handleSaveSettings("general")}>
                  Save General Settings
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="security" className="mt-4 space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <Shield className="h-5 w-5 mr-3 mt-0.5 text-blue-500" />
                    <div>
                      <Label className="text-base">Data Encryption</Label>
                      <p className="text-sm text-muted-foreground">
                        Enable end-to-end encryption for all your data
                      </p>
                    </div>
                  </div>
                  <Switch id="encryption" defaultChecked />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <LockKeyhole className="h-5 w-5 mr-3 mt-0.5 text-blue-500" />
                    <div>
                      <Label className="text-base">Two-Factor Authentication</Label>
                      <p className="text-sm text-muted-foreground">
                        Add an extra layer of security to your account
                      </p>
                    </div>
                  </div>
                  <Switch id="two-factor" />
                </div>
                
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <Share2 className="h-5 w-5 mr-3 mt-0.5 text-blue-500" />
                    <div>
                      <Label className="text-base">API Access Control</Label>
                      <p className="text-sm text-muted-foreground">
                        Manage which applications can access your AI twin
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">
                    Manage
                  </Button>
                </div>
              </div>
              
              <div className="pt-4 border-t">
                <Button className="w-full" onClick={() => handleSaveSettings("security")}>
                  Save Security Settings
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="integrations" className="mt-4 space-y-4">
              <div className="space-y-4">
                <Card className="border-2 border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Email Providers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 mr-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                            <path d="M22 4H2v16h20V4z"/>
                            <path d="M22 4l-10 8L2 4"/>
                          </svg>
                        </div>
                        <span>Gmail</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-blue-100 mr-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-blue-700">
                            <rect width="20" height="16" x="2" y="4" rx="2"/>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                          </svg>
                        </div>
                        <span>Outlook</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Calendar Services</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-100 mr-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                        </div>
                        <span>Google Calendar</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-green-100 mr-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-green-700">
                            <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                          </svg>
                        </div>
                        <span>Outlook Calendar</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <Card className="border-2 border-dashed">
                  <CardHeader className="pb-2">
                    <CardTitle className="text-base">Messaging Platforms</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-purple-100 mr-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                            <polyline points="22 4 12 14.01 9 11.01"/>
                          </svg>
                        </div>
                        <span>Slack</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center">
                        <div className="h-8 w-8 rounded-full bg-purple-100 mr-2 flex items-center justify-center">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-purple-700">
                            <path d="m3 20 1.3-3.9a9 9 0 1 1 3.4 2l-4.7 1.9"/>
                            <circle cx="12" cy="12" r="3"/>
                          </svg>
                        </div>
                        <span>WhatsApp</span>
                      </div>
                      <Button variant="outline" size="sm">Connect</Button>
                    </div>
                  </CardContent>
                </Card>
                
                <div className="flex justify-center">
                  <Button variant="outline">
                    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2 h-4 w-4">
                      <path d="M8 2.75C8 2.47386 7.77614 2.25 7.5 2.25C7.22386 2.25 7 2.47386 7 2.75V7H2.75C2.47386 7 2.25 7.22386 2.25 7.5C2.25 7.77614 2.47386 8 2.75 8H7V12.25C7 12.5261 7.22386 12.75 7.5 12.75C7.77614 12.75 8 12.5261 8 12.25V8H12.25C12.5261 8 12.75 7.77614 12.75 7.5C12.75 7.22386 12.5261 7 12.25 7H8V2.75Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path>
                    </svg>
                    Add New Integration
                  </Button>
                </div>
              </div>
            </TabsContent>
            
            <TabsContent value="advanced" className="mt-4 space-y-4">
              <div className="space-y-4">
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-start">
                    <Database className="h-5 w-5 mr-3 mt-0.5 text-amber-500" />
                    <div>
                      <Label className="text-base">Data Storage</Label>
                      <p className="text-sm text-muted-foreground">
                        Configure where your data is stored and accessed
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-start">
                    <Cloud className="h-5 w-5 mr-3 mt-0.5 text-amber-500" />
                    <div>
                      <Label className="text-base">API Settings</Label>
                      <p className="text-sm text-muted-foreground">
                        Manage API connections and custom endpoints
                      </p>
                    </div>
                  </div>
                  <Button variant="outline" size="sm">Configure</Button>
                </div>
                
                <div className="flex items-center justify-between pb-4 border-b">
                  <div className="flex items-start">
                    <Bell className="h-5 w-5 mr-3 mt-0.5 text-amber-500" />
                    <div>
                      <Label className="text-base">Webhook Notifications</Label>
                      <p className="text-sm text-muted-foreground">
                        Set up custom notification webhooks for external services
                      </p>
                    </div>
                  </div>
                  <Input 
                    placeholder="Enter Zapier webhook URL" 
                    className="w-48"
                  />
                </div>
                
                <div className="pt-4 border-t">
                  <div className="space-y-3">
                    <div>
                      <Button variant="outline" className="w-full flex justify-between items-center">
                        <div className="flex items-center">
                          <RefreshCw className="h-4 w-4 mr-2 text-amber-500" />
                          Reset AI Learning
                        </div>
                        <span className="text-xs text-muted-foreground">Restarts training process</span>
                      </Button>
                    </div>
                    
                    <div>
                      <Button 
                        variant="destructive" 
                        className="w-full flex justify-between items-center"
                        onClick={() => {
                          toast({
                            title: "Warning",
                            description: "This action cannot be undone. Are you sure?",
                            variant: "destructive",
                          });
                        }}
                      >
                        <div className="flex items-center">
                          <Trash2 className="h-4 w-4 mr-2" />
                          Delete All Data
                        </div>
                        <span className="text-xs">Permanently removes all data</span>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
};

export default SettingsPanel;
