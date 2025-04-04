
import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Mic, Play, Square, Volume2, Headphones, Save } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useToast } from "@/hooks/use-toast";

const VoicePanel = () => {
  const { toast } = useToast();
  const [isRecording, setIsRecording] = useState(false);
  const [recordingProgress, setRecordingProgress] = useState(0);
  const [recordingTime, setRecordingTime] = useState(0);
  const [trainingProgress, setTrainingProgress] = useState(35);
  
  // Simulate recording audio
  const handleStartRecording = () => {
    if (isRecording) return;
    
    setIsRecording(true);
    toast({
      title: "Recording Started",
      description: "Your voice is now being recorded...",
    });
    
    // Simulate recording progress updates
    const progressInterval = setInterval(() => {
      setRecordingProgress(prev => {
        const newProgress = prev + 5;
        if (newProgress >= 100) {
          clearInterval(progressInterval);
          return 100;
        }
        return newProgress;
      });
      
      setRecordingTime(prev => prev + 1);
    }, 1000);
  };
  
  // Simulate stopping recording
  const handleStopRecording = () => {
    if (!isRecording) return;
    
    setIsRecording(false);
    toast({
      title: "Recording Complete",
      description: "Your voice sample has been recorded.",
    });
    
    // Simulate API call to backend
    setTimeout(() => {
      // This would be where you'd send the recording to your backend
      toast({
        title: "Processing Voice Sample",
        description: "Uploading and processing your voice recording...",
      });
      
      // Simulate successful processing
      setTimeout(() => {
        setTrainingProgress(prev => Math.min(prev + 10, 100));
        toast({
          title: "Voice Training Updated",
          description: "Your new voice sample has been processed and added to your voice profile.",
          variant: "success",
        });
        
        // Reset recording state
        setRecordingProgress(0);
        setRecordingTime(0);
      }, 3000);
    }, 1500);
  };
  
  // Simulate saving voice settings
  const handleSaveVoiceSettings = () => {
    toast({
      title: "Saving Voice Settings",
      description: "Your voice customization settings are being saved...",
    });
    
    // Simulate API call to backend
    setTimeout(() => {
      toast({
        title: "Settings Saved",
        description: "Your voice settings have been saved successfully.",
        variant: "success",
      });
    }, 2000);
  };

  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>Voice Training & Customization</CardTitle>
          <CardDescription>
            Train your AI to speak in your voice and customize speech settings
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-medium mb-2">Voice Profile Status</h3>
              <div className="flex flex-col border rounded-lg p-4">
                <div className="flex justify-between mb-2">
                  <span className="text-sm">Voice Training</span>
                  <span className="text-sm text-muted-foreground">{trainingProgress}% Complete</span>
                </div>
                <Progress value={trainingProgress} className="h-2" />
                
                <div className="mt-4">
                  <p className="text-sm text-muted-foreground">Minimum recording required: 10 minutes</p>
                  <p className="text-sm text-muted-foreground">Recorded so far: {(trainingProgress / 10).toFixed(1)} minutes</p>
                </div>
                
                <div className="mt-4">
                  <Button className="w-full">
                    <Mic className="mr-2 h-4 w-4" />
                    Continue Voice Training
                  </Button>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="font-medium mb-2">Current Voice Demo</h3>
              <div className="border rounded-lg p-4">
                <div className="flex items-center justify-center h-24 bg-muted rounded-md mb-4">
                  <p className="text-muted-foreground text-center px-4">
                    {trainingProgress}% trained voice sample
                  </p>
                </div>
                
                <div className="flex items-center justify-center space-x-2">
                  <Button variant="outline" size="icon">
                    <Play className="h-4 w-4" />
                  </Button>
                  <Progress value={0} className="h-2 flex-1" />
                  <span className="text-xs text-muted-foreground whitespace-nowrap">0:00 / 0:30</span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="record">
        <TabsList className="grid grid-cols-3 w-full">
          <TabsTrigger value="record">Record Voice</TabsTrigger>
          <TabsTrigger value="customize">Voice Settings</TabsTrigger>
          <TabsTrigger value="testing">Test & Refine</TabsTrigger>
        </TabsList>
        
        <TabsContent value="record" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Voice Recording Studio</CardTitle>
              <CardDescription>
                Record your voice to train the AI speech model
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div className="border rounded-lg p-4">
                  <h3 className="font-medium mb-3">Recording Script #1</h3>
                  <div className="bg-muted p-4 rounded-md mb-4 text-sm">
                    <p>
                      The quick brown fox jumps over the lazy dog. 
                      Voice training requires diverse phonetic sounds to create an accurate model.
                      Please read this passage naturally, as if you were having a conversation.
                    </p>
                  </div>
                  
                  <div className="flex items-center justify-center space-x-4 py-4">
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className={`h-12 w-12 rounded-full ${isRecording ? 'bg-red-100 text-red-600 border-red-300' : ''}`}
                      onClick={handleStartRecording}
                      disabled={isRecording}
                    >
                      <Mic className="h-6 w-6" />
                    </Button>
                    <Button 
                      variant="outline" 
                      size="icon" 
                      className="h-10 w-10 rounded-full"
                      onClick={handleStopRecording}
                      disabled={!isRecording}
                    >
                      <Square className="h-4 w-4" />
                    </Button>
                  </div>
                  
                  <div className="flex items-center mt-2">
                    <div className="h-8 flex-1 bg-muted rounded-md flex items-center">
                      <div 
                        className="h-full rounded-md bg-primary transition-all duration-300" 
                        style={{ width: `${recordingProgress}%` }}
                      ></div>
                    </div>
                    <span className="text-xs text-muted-foreground ml-2 whitespace-nowrap">
                      {Math.floor(recordingTime / 60)}:{String(recordingTime % 60).padStart(2, '0')}
                    </span>
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Recording Tips</h3>
                    <ul className="mt-2 space-y-1 text-sm">
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">1</span>
                        <span>Find a quiet environment with minimal background noise</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">2</span>
                        <span>Speak naturally at your normal pace and tone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">3</span>
                        <span>Keep a consistent distance from the microphone</span>
                      </li>
                      <li className="flex items-start">
                        <span className="bg-blue-100 text-blue-800 h-5 w-5 rounded-full flex items-center justify-center mr-2 flex-shrink-0">4</span>
                        <span>Try to include various emotions and intonations</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div className="border rounded-lg p-4">
                    <h3 className="font-medium">Progress</h3>
                    <div className="mt-3 space-y-3">
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs">Script #1</span>
                          <span className="text-xs text-muted-foreground">
                            {recordingProgress > 0 ? `${recordingProgress}%` : 'Not Started'}
                          </span>
                        </div>
                        <Progress value={recordingProgress} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs">Script #2</span>
                          <span className="text-xs text-muted-foreground">Not Started</span>
                        </div>
                        <Progress value={0} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs">Script #3</span>
                          <span className="text-xs text-muted-foreground">Not Started</span>
                        </div>
                        <Progress value={0} className="h-1.5" />
                      </div>
                      <div>
                        <div className="flex justify-between mb-1">
                          <span className="text-xs">Script #4</span>
                          <span className="text-xs text-muted-foreground">Not Started</span>
                        </div>
                        <Progress value={0} className="h-1.5" />
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button disabled={recordingProgress < 100}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Recordings & Continue
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="customize" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Voice Customization</CardTitle>
              <CardDescription>
                Adjust how your AI voice sounds and behaves
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <div className="flex items-center mb-4">
                    <Volume2 className="h-5 w-5 mr-2 text-muted-foreground" />
                    <Label className="text-base">Speech Rate</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Slower</span>
                    <Slider defaultValue={[50]} className="flex-1" />
                    <span className="text-sm text-muted-foreground">Faster</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Headphones className="h-5 w-5 mr-2 text-muted-foreground" />
                    <Label className="text-base">Pitch</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Lower</span>
                    <Slider defaultValue={[50]} className="flex-1" />
                    <span className="text-sm text-muted-foreground">Higher</span>
                  </div>
                </div>
                
                <div>
                  <div className="flex items-center mb-4">
                    <Volume2 className="h-5 w-5 mr-2 text-muted-foreground" />
                    <Label className="text-base">Clarity</Label>
                  </div>
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-muted-foreground">Natural</span>
                    <Slider defaultValue={[70]} className="flex-1" />
                    <span className="text-sm text-muted-foreground">Crisp</span>
                  </div>
                </div>
                
                <div className="pt-4 border-t">
                  <h3 className="font-medium text-base mb-4">Speech Styles</h3>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    <div className="border rounded-md p-3 text-center hover:border-primary cursor-pointer">
                      <p className="font-medium">Professional</p>
                      <p className="text-xs text-muted-foreground">Clean and polished</p>
                    </div>
                    <div className="border rounded-md p-3 text-center border-primary bg-primary/5 cursor-pointer">
                      <p className="font-medium">Conversational</p>
                      <p className="text-xs text-muted-foreground">Natural and friendly</p>
                    </div>
                    <div className="border rounded-md p-3 text-center hover:border-primary cursor-pointer">
                      <p className="font-medium">Energetic</p>
                      <p className="text-xs text-muted-foreground">Upbeat and animated</p>
                    </div>
                    <div className="border rounded-md p-3 text-center hover:border-primary cursor-pointer">
                      <p className="font-medium">Calm</p>
                      <p className="text-xs text-muted-foreground">Steady and soothing</p>
                    </div>
                  </div>
                </div>
                
                <div className="pt-2">
                  <Button className="w-full" onClick={handleSaveVoiceSettings}>
                    <Save className="mr-2 h-4 w-4" />
                    Save Voice Settings
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="testing" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Voice Testing & Refinement</CardTitle>
              <CardDescription>
                Test and refine your AI voice
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-4">
                Once you've recorded enough voice samples, you can test how your AI voice sounds and make refinements.
              </p>
              
              <Button 
                onClick={() => {
                  toast({
                    title: "Feature Coming Soon",
                    description: "Voice testing functionality will be available in the next update.",
                  });
                }}
              >
                Generate Voice Sample
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default VoicePanel;
