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
import { Mail, MessageSquare, Calendar, Clock, PlusCircle } from "lucide-react";
import { 
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { 
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";

const AutomationPanel = () => {
  return (
    <div className="space-y-4">
      <Card>
        <CardHeader>
          <CardTitle>AI Automation Control</CardTitle>
          <CardDescription>
            Manage how your AI twin automates tasks on your behalf
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-blue-100 mr-3">
                  <Mail className="h-5 w-5 text-blue-700" />
                </div>
                <div>
                  <h4 className="font-medium">Email Handling</h4>
                  <p className="text-sm text-muted-foreground">Automated email responses and organization</p>
                </div>
              </div>
              <Switch id="email" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-purple-100 mr-3">
                  <MessageSquare className="h-5 w-5 text-purple-700" />
                </div>
                <div>
                  <h4 className="font-medium">Chat/Message Responses</h4>
                  <p className="text-sm text-muted-foreground">Auto-responses to messages on connected platforms</p>
                </div>
              </div>
              <Switch id="chat" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-green-100 mr-3">
                  <Calendar className="h-5 w-5 text-green-700" />
                </div>
                <div>
                  <h4 className="font-medium">Calendar Management</h4>
                  <p className="text-sm text-muted-foreground">Meeting scheduling and organization</p>
                </div>
              </div>
              <Switch id="calendar" defaultChecked />
            </div>
            
            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <div className="h-10 w-10 flex items-center justify-center rounded-full bg-amber-100 mr-3">
                  <Clock className="h-5 w-5 text-amber-700" />
                </div>
                <div>
                  <h4 className="font-medium">Recurring Tasks</h4>
                  <p className="text-sm text-muted-foreground">Regular reports and periodic communications</p>
                </div>
              </div>
              <Switch id="tasks" />
            </div>
          </div>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="email">
        <TabsList className="grid grid-cols-4 w-full">
          <TabsTrigger value="email">Email</TabsTrigger>
          <TabsTrigger value="chat">Chat</TabsTrigger>
          <TabsTrigger value="calendar">Calendar</TabsTrigger>
          <TabsTrigger value="tasks">Tasks</TabsTrigger>
        </TabsList>
        
        <TabsContent value="email" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Email Automation Rules</CardTitle>
              <CardDescription>
                Configure how your AI handles different types of emails
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                  <AccordionTrigger className="py-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                        <Mail className="h-4 w-4 text-blue-700" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">General Inquiries</p>
                        <p className="text-xs text-muted-foreground">How to handle general questions</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="space-y-4 pl-10">
                      <div className="grid grid-cols-2 gap-4">
                        <div>
                          <Label>Response Type</Label>
                          <Select defaultValue="auto-draft">
                            <SelectTrigger className="w-full mt-1.5">
                              <SelectValue placeholder="Select response type" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="fully-auto">Fully Automatic</SelectItem>
                              <SelectItem value="auto-draft">Auto Draft (Needs Approval)</SelectItem>
                              <SelectItem value="manual">Manual Only</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        
                        <div>
                          <Label>Priority Level</Label>
                          <Select defaultValue="medium">
                            <SelectTrigger className="w-full mt-1.5">
                              <SelectValue placeholder="Select priority" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="high">High</SelectItem>
                              <SelectItem value="medium">Medium</SelectItem>
                              <SelectItem value="low">Low</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label>Keywords to Identify General Inquiries</Label>
                        <div className="flex flex-wrap gap-2 pt-1.5">
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">question</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">inquiry</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">information</Badge>
                          <Badge className="bg-blue-100 text-blue-800 hover:bg-blue-200">help</Badge>
                          <Button variant="outline" size="sm" className="h-6 gap-1 text-xs">
                            <PlusCircle className="h-3 w-3" /> Add
                          </Button>
                        </div>
                      </div>
                      
                      <div className="pt-2">
                        <Button size="sm">Save Rule</Button>
                      </div>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-2">
                  <AccordionTrigger className="py-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-red-100 flex items-center justify-center mr-2">
                        <Mail className="h-4 w-4 text-red-700" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Urgent Emails</p>
                        <p className="text-xs text-muted-foreground">How to handle time-sensitive emails</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-10">
                      <p className="text-muted-foreground">Configure urgent email handling settings here...</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
                
                <AccordionItem value="item-3">
                  <AccordionTrigger className="py-3">
                    <div className="flex items-center">
                      <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center mr-2">
                        <Mail className="h-4 w-4 text-green-700" />
                      </div>
                      <div className="text-left">
                        <p className="font-medium">Client Communications</p>
                        <p className="text-xs text-muted-foreground">How to handle client emails</p>
                      </div>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="pl-10">
                      <p className="text-muted-foreground">Configure client email handling settings here...</p>
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
              
              <div className="mt-4 text-center">
                <Button>
                  <PlusCircle className="mr-2 h-4 w-4" />
                  Add New Rule
                </Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="chat" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Chat Automation</CardTitle>
              <CardDescription>
                Configure chat response settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Chat automation settings will be implemented in the next phase.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="calendar" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Calendar Automation</CardTitle>
              <CardDescription>
                Configure meeting scheduling settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Calendar automation settings will be implemented in the next phase.</p>
            </CardContent>
          </Card>
        </TabsContent>
        
        <TabsContent value="tasks" className="mt-4">
          <Card>
            <CardHeader>
              <CardTitle>Task Automation</CardTitle>
              <CardDescription>
                Configure recurring task settings
              </CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">Task automation settings will be implemented in the next phase.</p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default AutomationPanel;
