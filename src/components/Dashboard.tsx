import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Mail, MessageSquare, ArrowUpRight, CheckCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Dashboard = () => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">AI Status</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <div className="mr-2 h-3 w-3 rounded-full bg-green-500"></div>
              <p className="font-medium">Active</p>
            </div>
            <p className="text-sm text-muted-foreground mt-1">Ready to handle tasks</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Pending Tasks</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">12</p>
            <p className="text-sm text-muted-foreground">Tasks waiting for AI processing</p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Accuracy Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-2xl font-bold">93%</p>
            <p className="text-sm text-muted-foreground">Based on your feedback</p>
          </CardContent>
        </Card>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Recent Activities</CardTitle>
          <CardDescription>
            Your AI twin's latest actions
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="all">
            <TabsList className="mb-4">
              <TabsTrigger value="all">All</TabsTrigger>
              <TabsTrigger value="emails">Emails</TabsTrigger>
              <TabsTrigger value="messages">Messages</TabsTrigger>
              <TabsTrigger value="meetings">Meetings</TabsTrigger>
            </TabsList>
            
            <TabsContent value="all" className="mt-0">
              <div className="space-y-4">
                <div className="flex items-start border-b pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100 mr-3">
                    <Mail className="h-5 w-5 text-blue-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Email Response</h4>
                      <span className="text-xs text-muted-foreground">1 hour ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Replied to Sarah regarding project timeline</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">Work</Badge>
                      <Badge variant="outline" className="bg-green-100">Approved</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start border-b pb-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100 mr-3">
                    <MessageSquare className="h-5 w-5 text-purple-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Chat Response</h4>
                      <span className="text-xs text-muted-foreground">2 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Responded to team chat about meeting notes</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">Team</Badge>
                      <Badge variant="outline" className="bg-amber-100">Pending Review</Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 mr-3">
                    <CheckCircle className="h-5 w-5 text-green-700" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between">
                      <h4 className="font-medium">Task Completed</h4>
                      <span className="text-xs text-muted-foreground">3 hours ago</span>
                    </div>
                    <p className="text-sm text-muted-foreground">Weekly report summary generated and sent</p>
                    <div className="mt-2 flex items-center gap-2">
                      <Badge variant="outline">Report</Badge>
                      <Badge variant="outline" className="bg-green-100">Completed</Badge>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-4 text-center">
                <Button variant="ghost" className="text-sm">
                  View All Activities
                  <ArrowUpRight className="ml-1 h-4 w-4" />
                </Button>
              </div>
            </TabsContent>
            
            <TabsContent value="emails" className="mt-0">
              <p className="text-muted-foreground">Email activities will be displayed here.</p>
            </TabsContent>
            
            <TabsContent value="messages" className="mt-0">
              <p className="text-muted-foreground">Message activities will be displayed here.</p>
            </TabsContent>
            
            <TabsContent value="meetings" className="mt-0">
              <p className="text-muted-foreground">Meeting activities will be displayed here.</p>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <Card>
          <CardHeader>
            <CardTitle>Upcoming Tasks</CardTitle>
            <CardDescription>
              Tasks scheduled for your AI to handle
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Weekly team update email</p>
                  <p className="text-sm text-muted-foreground">Scheduled for tomorrow, 9:00 AM</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Client meeting preparation</p>
                  <p className="text-sm text-muted-foreground">Thursday, 2:00 PM</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
              
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Monthly report generation</p>
                  <p className="text-sm text-muted-foreground">Next Monday, 8:00 AM</p>
                </div>
                <Button variant="outline" size="sm">Edit</Button>
              </div>
            </div>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>AI Insights</CardTitle>
            <CardDescription>
              Intelligence gathered from your data
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="rounded-lg bg-blue-50 p-3">
                <p className="font-medium text-blue-800">Communication Pattern</p>
                <p className="text-sm text-blue-700">You typically respond fastest between 9-11 AM</p>
              </div>
              
              <div className="rounded-lg bg-green-50 p-3">
                <p className="font-medium text-green-800">Meeting Preference</p>
                <p className="text-sm text-green-700">You prefer afternoon meetings over morning ones</p>
              </div>
              
              <div className="rounded-lg bg-purple-50 p-3">
                <p className="font-medium text-purple-800">Email Habit</p>
                <p className="text-sm text-purple-700">Your emails average 3 paragraphs in length</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default Dashboard;
