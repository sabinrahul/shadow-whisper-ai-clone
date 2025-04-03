
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Brain, Upload, CheckCircle2, Mail, MessageSquare, Calendar } from "lucide-react";
import { Slider } from "@/components/ui/slider";

const PersonalizationPanel = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI Personalization</CardTitle>
          <CardDescription>
            Train your AI twin to learn your communication style and preferences
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <h3 className="font-medium">Learning Progress</h3>
                <span className="text-sm text-muted-foreground">67% Complete</span>
              </div>
              <Progress value={67} className="h-2" />
              <div className="grid grid-cols-3 mt-1 text-xs text-muted-foreground">
                <div>Basic</div>
                <div className="text-center">Intermediate</div>
                <div className="text-right">Advanced</div>
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="border rounded-lg p-4 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-3">
                  <Mail className="h-6 w-6 text-blue-700" />
                </div>
                <h4 className="font-medium">Email Style</h4>
                <p className="text-sm text-muted-foreground text-center mb-3">82% Trained</p>
                <Progress value={82} className="h-1 w-full" />
              </div>
              
              <div className="border rounded-lg p-4 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center mb-3">
                  <MessageSquare className="h-6 w-6 text-purple-700" />
                </div>
                <h4 className="font-medium">Chat Style</h4>
                <p className="text-sm text-muted-foreground text-center mb-3">74% Trained</p>
                <Progress value={74} className="h-1 w-full" />
              </div>
              
              <div className="border rounded-lg p-4 flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                  <Calendar className="h-6 w-6 text-green-700" />
                </div>
                <h4 className="font-medium">Scheduling</h4>
                <p className="text-sm text-muted-foreground text-center mb-3">45% Trained</p>
                <Progress value={45} className="h-1 w-full" />
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="train">
        <TabsList className="grid grid-cols-2 w-full">
          <TabsTrigger value="train">Train AI</TabsTrigger>
          <TabsTrigger value="preferences">Preferences</TabsTrigger>
        </TabsList>
        
        <TabsContent value="train" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Communication Training</CardTitle>
              <CardDescription>
                Provide samples of your communication style
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div>
                  <Label htmlFor="email-sample">Email Sample</Label>
                  <Textarea 
                    id="email-sample" 
                    placeholder="Paste a sample email that represents your style..."
                    className="mt-1.5 h-32"
                  />
                  <div className="mt-2 flex justify-end">
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      Add Sample
                    </Button>
                  </div>
                </div>
                
                <div>
                  <Label htmlFor="chat-sample">Chat/Message Sample</Label>
                  <Textarea 
                    id="chat-sample" 
                    placeholder="Paste sample chat messages that represent your style..."
                    className="mt-1.5 h-32"
                  />
                  <div className="mt-2 flex justify-end">
                    <Button>
                      <Upload className="mr-2 h-4 w-4" />
                      Add Sample
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Or connect your accounts</Label>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                    <Button variant="outline" className="justify-start">
                      <Mail className="mr-2 h-4 w-4" />
                      Gmail Account
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Slack
                    </Button>
                    <Button variant="outline" className="justify-start">
                      <Calendar className="mr-2 h-4 w-4" />
                      Calendar
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Decision Training</CardTitle>
              <CardDescription>
                Help your AI learn how you make decisions
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="border rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 mr-3">
                      <Brain className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email Priority Decision</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        When you receive an email from your boss, how quickly do you typically respond?
                      </p>
                      <div className="mt-4">
                        <div className="flex justify-between mb-2">
                          <span className="text-xs">Within minutes</span>
                          <span className="text-xs">Within hours</span>
                          <span className="text-xs">Within a day</span>
                        </div>
                        <Slider defaultValue={[50]} max={100} step={1} />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 mr-3">
                      <Brain className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Meeting Scheduling</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        When scheduling meetings, what time of day do you prefer?
                      </p>
                      <div className="mt-4 grid grid-cols-3 gap-2">
                        <Button variant="outline" size="sm">Morning</Button>
                        <Button variant="default" size="sm">Afternoon</Button>
                        <Button variant="outline" size="sm">Evening</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="border rounded-lg p-4">
                  <div className="flex items-start">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 mr-3">
                      <Brain className="h-5 w-5 text-blue-700" />
                    </div>
                    <div>
                      <h4 className="font-medium">Communication Style</h4>
                      <p className="text-sm text-muted-foreground mt-1">
                        How would you describe your typical communication style?
                      </p>
                      <div className="mt-4 grid grid-cols-2 gap-2">
                        <Button variant="outline" size="sm">Brief & Direct</Button>
                        <Button variant="default" size="sm">Friendly & Detailed</Button>
                        <Button variant="outline" size="sm">Formal & Professional</Button>
                        <Button variant="outline" size="sm">Casual & Conversational</Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button className="w-full">
                  <CheckCircle2 className="mr-2 h-4 w-4" />
                  Save Training Data
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="preferences" className="space-y-4 mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">AI Behavior Preferences</CardTitle>
              <CardDescription>
                Control how your AI twin represents you
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <Label className="text-base">Response Tone</Label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Professional</span>
                      <span>Balanced</span>
                      <span>Casual</span>
                    </div>
                    <Slider defaultValue={[50]} max={100} step={1} />
                  </div>
                </div>
                
                <div>
                  <Label className="text-base">Response Length</Label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Concise</span>
                      <span>Moderate</span>
                      <span>Detailed</span>
                    </div>
                    <Slider defaultValue={[70]} max={100} step={1} />
                  </div>
                </div>
                
                <div>
                  <Label className="text-base">Decision Making Autonomy</Label>
                  <div className="mt-2">
                    <div className="flex justify-between text-sm mb-2">
                      <span>Always Ask</span>
                      <span>Smart Decisions</span>
                      <span>Full Autonomy</span>
                    </div>
                    <Slider defaultValue={[30]} max={100} step={1} />
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium text-base mb-3">Approval Requirements</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="email-approval" className="cursor-pointer">Email Responses</Label>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">Always</Button>
                        <Button variant="default" size="sm">Important Only</Button>
                        <Button variant="outline" size="sm">Never</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="meeting-approval" className="cursor-pointer">Meeting Scheduling</Label>
                      <div className="flex items-center space-x-2">
                        <Button variant="default" size="sm">Always</Button>
                        <Button variant="outline" size="sm">Important Only</Button>
                        <Button variant="outline" size="sm">Never</Button>
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <Label htmlFor="chat-approval" className="cursor-pointer">Chat Responses</Label>
                      <div className="flex items-center space-x-2">
                        <Button variant="outline" size="sm">Always</Button>
                        <Button variant="default" size="sm">Important Only</Button>
                        <Button variant="outline" size="sm">Never</Button>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mt-6">
                  <Button className="w-full">
                    <CheckCircle2 className="mr-2 h-4 w-4" />
                    Save Preferences
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalizationPanel;
