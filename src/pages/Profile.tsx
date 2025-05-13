
import { useState, useEffect } from "react";
import { useAuth } from "../contexts/AuthContext";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

// Title component for dynamic page title
const Title = ({ title }: { title: string }) => {
  useEffect(() => {
    document.title = title;
  }, [title]);
  
  return null;
};

const Profile = () => {
  const { currentUser, updateUserProfile } = useAuth();
  
  const [displayName, setDisplayName] = useState(currentUser?.displayName || "");
  const [photoURL, setPhotoURL] = useState(currentUser?.photoURL || "");
  const [isUpdating, setIsUpdating] = useState(false);
  
  useEffect(() => {
    if (currentUser) {
      setDisplayName(currentUser.displayName || "");
      setPhotoURL(currentUser.photoURL || "");
    }
  }, [currentUser]);
  
  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!currentUser) return;
    
    setIsUpdating(true);
    try {
      await updateUserProfile(displayName, photoURL);
      toast.success("Profile updated successfully");
    } catch (error) {
      // Error is handled in the context
    } finally {
      setIsUpdating(false);
    }
  };

  if (!currentUser) {
    return <div className="text-center py-12">Loading user profile...</div>;
  }

  return (
    <>
      <Title title="My Profile - BoxWave" />
      <div className="py-12 bg-gray-50">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">My Profile</h1>
            
            <Card className="bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Profile Information</CardTitle>
                <CardDescription>
                  Update your account information and profile picture.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col md:flex-row gap-6 items-start">
                  <div className="flex flex-col items-center">
                    <Avatar className="h-24 w-24 mb-4">
                      <AvatarImage src={photoURL || undefined} alt={displayName || "User"} />
                      <AvatarFallback className="text-lg">{getInitials(displayName)}</AvatarFallback>
                    </Avatar>
                  </div>
                  
                  <form onSubmit={handleSubmit} className="flex-1 space-y-4">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                        Email address
                      </label>
                      <div className="mt-1">
                        <input
                          id="email"
                          name="email"
                          type="email"
                          value={currentUser.email || ""}
                          disabled
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm bg-gray-50"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="displayName" className="block text-sm font-medium text-gray-700">
                        Display Name
                      </label>
                      <div className="mt-1">
                        <input
                          id="displayName"
                          name="displayName"
                          type="text"
                          value={displayName}
                          onChange={(e) => setDisplayName(e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label htmlFor="photoURL" className="block text-sm font-medium text-gray-700">
                        Photo URL
                      </label>
                      <div className="mt-1">
                        <input
                          id="photoURL"
                          name="photoURL"
                          type="text"
                          value={photoURL}
                          onChange={(e) => setPhotoURL(e.target.value)}
                          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-primary focus:border-primary"
                          placeholder="https://example.com/your-photo.jpg"
                        />
                      </div>
                      <p className="mt-1 text-sm text-gray-500">
                        Enter a URL to your profile picture.
                      </p>
                    </div>
                    
                    <div className="pt-4">
                      <Button 
                        type="submit" 
                        className="w-full sm:w-auto"
                        disabled={isUpdating}
                      >
                        {isUpdating ? "Updating..." : "Update Profile"}
                      </Button>
                    </div>
                  </form>
                </div>
              </CardContent>
            </Card>
            
            <Card className="mt-8 bg-white shadow-sm">
              <CardHeader>
                <CardTitle>Account Management</CardTitle>
                <CardDescription>
                  Options for your BoxWave account.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">Change Password</h3>
                  <p className="text-sm text-gray-600 mb-4">
                    To change your password, first log out and then use the "Forgot password" option on the login page.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
