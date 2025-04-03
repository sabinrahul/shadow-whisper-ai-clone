
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
import { Brain, Upload, CheckCircle2, Mail, MessageSquare, Calendar, AlertTriangle } from "lucide-react";
import { Slider } from "@/components/ui/slider";
import { useState } from "react";
import { toast } from "@/components/ui/use-toast";

const PersonalizationPanel = () => {
  const [emailSample, setEmailSample] = useState("");
  const [chatSample, setChatSample] = useState("");
  const [isTraining, setIsTraining] = useState(false);
  const [selectedDecisions, setSelectedDecisions] = useState({
    emailPriority: 50,
    meetingTime: "afternoon",
    communicationStyle: "friendly"
  });

  const handleEmailSampleChange = (e) => {
    setEmailSample(e.target.value);
  };

  const handleChatSampleChange = (e) => {
    setChatSample(e.target.value);
  };

  const handleAddSample = (type) => {
    if (type === "email" && emailSample.trim()) {
      // In a real implementation, this would send the sample to an AI training endpoint
      toast({
        title: "Email Sample Added",
        description: "Your email sample has been added to the training data.",
      });
      setEmailSample("");
    } else if (type === "chat" && chatSample.trim()) {
      toast({
        title: "Chat Sample Added",
        description: "Your chat messages have been added to the training data.",
      });
      setChatSample("");
    } else {
      toast({
        title: "Empty Sample",
        description: "Please provide a sample before adding.",
        variant: "destructive",
      });
    }
  };

  const handleSelectMeetingTime = (time) => {
    setSelectedDecisions({...selectedDecisions, meetingTime: time});
  };

  const handleSelectCommunicationStyle = (style) => {
    setSelectedDecisions({...selectedDecisions, communicationStyle: style});
  };

  const handleSliderChange = (value) => {
    setSelectedDecisions({...selectedDecisions, emailPriority: value[0]});
  };

  const handleSaveTrainingData = () => {
    setIsTraining(true);
    
    // Simulate AI training process
    setTimeout(() => {
      toast({
        title: "Training Complete",
        description: "Your AI has been updated with the new training data.",
      });
      setIsTraining(false);
    }, 3000);
  };

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
        <TabsList className="grid grid-cols-1 w-full">
          <TabsTrigger value="train">Train AI</TabsTrigger>
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
                    value={emailSample}
                    onChange={handleEmailSampleChange}
                  />
                  <div className="mt-2 flex justify-end">
                    <Button onClick={() => handleAddSample("email")}>
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
                    value={chatSample}
                    onChange={handleChatSampleChange}
                  />
                  <div className="mt-2 flex justify-end">
                    <Button onClick={() => handleAddSample("chat")}>
                      <Upload className="mr-2 h-4 w-4" />
                      Add Sample
                    </Button>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <Label>Or connect your accounts for automatic training</Label>
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

                <div className="rounded-lg border border-amber-200 bg-amber-50 p-4 mt-6">
                  <div className="flex items-start">
                    <AlertTriangle className="h-5 w-5 text-amber-500 mr-3 mt-0.5" />
                    <div>
                      <h4 className="font-medium text-amber-800">Important Training Notes</h4>
                      <ul className="mt-2 text-sm text-amber-700 space-y-1 list-disc pl-5">
                        <li>Provide diverse examples of your communication style for better AI learning</li>
                        <li>Include both formal and casual examples for a well-rounded AI twin</li>
                        <li>The more samples you provide, the more accurate your AI will be</li>
                        <li>Connect accounts for automatic analysis of your communication patterns</li>
                      </ul>
                    </div>
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
                        <Slider 
                          defaultValue={[selectedDecisions.emailPriority]} 
                          max={100} 
                          step={1} 
                          onValueChange={handleSliderChange}
                        />
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
                        <Button 
                          variant={selectedDecisions.meetingTime === "morning" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectMeetingTime("morning")}
                        >
                          Morning
                        </Button>
                        <Button 
                          variant={selectedDecisions.meetingTime === "afternoon" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectMeetingTime("afternoon")}
                        >
                          Afternoon
                        </Button>
                        <Button 
                          variant={selectedDecisions.meetingTime === "evening" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectMeetingTime("evening")}
                        >
                          Evening
                        </Button>
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
                        <Button 
                          variant={selectedDecisions.communicationStyle === "brief" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectCommunicationStyle("brief")}
                        >
                          Brief & Direct
                        </Button>
                        <Button 
                          variant={selectedDecisions.communicationStyle === "friendly" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectCommunicationStyle("friendly")}
                        >
                          Friendly & Detailed
                        </Button>
                        <Button 
                          variant={selectedDecisions.communicationStyle === "formal" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectCommunicationStyle("formal")}
                        >
                          Formal & Professional
                        </Button>
                        <Button 
                          variant={selectedDecisions.communicationStyle === "casual" ? "default" : "outline"} 
                          size="sm"
                          onClick={() => handleSelectCommunicationStyle("casual")}
                        >
                          Casual & Conversational
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-6">
                <Button 
                  className="w-full" 
                  onClick={handleSaveTrainingData}
                  disabled={isTraining}
                >
                  {isTraining ? (
                    <>
                      <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></div>
                      Training in Progress...
                    </>
                  ) : (
                    <>
                      <CheckCircle2 className="mr-2 h-4 w-4" />
                      Save Training Data
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default PersonalizationPanel;
