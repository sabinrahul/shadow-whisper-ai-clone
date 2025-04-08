
import React, { useEffect, useState } from 'react';
import { useToast } from "@/hooks/use-toast";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Pencil, Trash2, Plus, Loader2, X, Check } from "lucide-react";
import { getNotes, createNote, updateNote, deleteNote, Note } from "@/utils/api";
import Header from "@/components/Header";

const NotesPage = () => {
  const { toast } = useToast();
  const [notes, setNotes] = useState<Note[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  // Form states
  const [isCreating, setIsCreating] = useState(false);
  const [editingNoteId, setEditingNoteId] = useState<string | null>(null);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  
  // Load notes on component mount
  useEffect(() => {
    fetchNotes();
  }, []);
  
  // Fetch notes from API
  const fetchNotes = async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await getNotes();
      setNotes(data);
    } catch (err) {
      console.error('Failed to fetch notes:', err);
      setError('Failed to load notes. Please try again later.');
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to load notes. Please try again later.",
      });
    } finally {
      setLoading(false);
    }
  };
  
  // Handle creating a new note
  const handleCreateNote = async () => {
    if (!title.trim() || !content.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Title and content are required.",
      });
      return;
    }
    
    try {
      const newNote = await createNote(title, content);
      setNotes([newNote, ...notes]);
      resetForm();
      toast({
        variant: "success",
        title: "Success",
        description: "Note created successfully!",
      });
    } catch (err) {
      console.error('Failed to create note:', err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to create note. Please try again.",
      });
    }
  };
  
  // Start editing a note
  const startEditing = (note: Note) => {
    setEditingNoteId(note._id);
    setTitle(note.title);
    setContent(note.content);
  };
  
  // Handle updating a note
  const handleUpdateNote = async () => {
    if (!editingNoteId || !title.trim() || !content.trim()) {
      toast({
        variant: "destructive",
        title: "Validation Error",
        description: "Title and content are required.",
      });
      return;
    }
    
    try {
      const updatedNote = await updateNote(editingNoteId, title, content);
      setNotes(notes.map(note => note._id === editingNoteId ? updatedNote : note));
      resetForm();
      toast({
        variant: "success",
        title: "Success",
        description: "Note updated successfully!",
      });
    } catch (err) {
      console.error('Failed to update note:', err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to update note. Please try again.",
      });
    }
  };
  
  // Handle deleting a note
  const handleDeleteNote = async (id: string) => {
    try {
      await deleteNote(id);
      setNotes(notes.filter(note => note._id !== id));
      if (editingNoteId === id) {
        resetForm();
      }
      toast({
        variant: "success",
        title: "Success",
        description: "Note deleted successfully!",
      });
    } catch (err) {
      console.error('Failed to delete note:', err);
      toast({
        variant: "destructive",
        title: "Error",
        description: "Failed to delete note. Please try again.",
      });
    }
  };
  
  // Reset form state
  const resetForm = () => {
    setTitle('');
    setContent('');
    setIsCreating(false);
    setEditingNoteId(null);
  };
  
  // Format date for display
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleString();
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-3xl font-bold">Notes</h1>
          <Button 
            onClick={() => setIsCreating(!isCreating)}
            variant={isCreating ? "outline" : "default"}
          >
            {isCreating ? (
              <><X className="mr-2 h-4 w-4" /> Cancel</>
            ) : (
              <><Plus className="mr-2 h-4 w-4" /> New Note</>
            )}
          </Button>
        </div>
        
        {/* Create or Edit Form */}
        {(isCreating || editingNoteId) && (
          <Card className="mb-6">
            <CardHeader>
              <CardTitle>{editingNoteId ? 'Edit Note' : 'Create New Note'}</CardTitle>
              <CardDescription>
                {editingNoteId 
                  ? 'Update your note details below'
                  : 'Fill out the form below to create a new note'}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label htmlFor="title" className="text-sm font-medium">Title</label>
                <Input
                  id="title"
                  placeholder="Note Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="space-y-2">
                <label htmlFor="content" className="text-sm font-medium">Content</label>
                <Textarea
                  id="content"
                  placeholder="Note Content"
                  rows={5}
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                />
              </div>
            </CardContent>
            <CardFooter className="flex justify-end gap-2">
              <Button variant="outline" onClick={resetForm}>
                Cancel
              </Button>
              <Button onClick={editingNoteId ? handleUpdateNote : handleCreateNote}>
                <Check className="mr-2 h-4 w-4" />
                {editingNoteId ? 'Update' : 'Create'}
              </Button>
            </CardFooter>
          </Card>
        )}
        
        {/* Loading State */}
        {loading && (
          <div className="flex justify-center items-center py-12">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}
        
        {/* Error State */}
        {error && !loading && (
          <div className="text-center py-8">
            <p className="text-destructive">{error}</p>
            <Button 
              variant="outline" 
              className="mt-4"
              onClick={fetchNotes}
            >
              Try Again
            </Button>
          </div>
        )}
        
        {/* Empty State */}
        {!loading && !error && notes.length === 0 && (
          <div className="text-center py-12 border border-dashed rounded-lg">
            <p className="text-muted-foreground mb-4">No notes yet. Create your first note!</p>
            {!isCreating && (
              <Button onClick={() => setIsCreating(true)}>
                <Plus className="mr-2 h-4 w-4" />
                Create Note
              </Button>
            )}
          </div>
        )}
        
        {/* Notes List */}
        {!loading && !error && notes.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {notes.map((note) => (
              <Card key={note._id} className="h-full flex flex-col">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-xl">{note.title}</CardTitle>
                    <div className="flex space-x-2">
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => startEditing(note)}
                      >
                        <Pencil className="h-4 w-4" />
                      </Button>
                      <Button 
                        size="icon" 
                        variant="ghost" 
                        onClick={() => handleDeleteNote(note._id)}
                      >
                        <Trash2 className="h-4 w-4 text-destructive" />
                      </Button>
                    </div>
                  </div>
                  <CardDescription>
                    {formatDate(note.createdAt)}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <p className="whitespace-pre-wrap">{note.content}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
};

export default NotesPage;
