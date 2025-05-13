
import React, { createContext, useContext, useState, useEffect } from 'react';
import { toast } from "sonner";

interface User {
  uid: string;
  email: string | null;
  displayName: string | null;
  photoURL: string | null;
}

interface AuthContextType {
  currentUser: User | null;
  isLoading: boolean;
  login: (email: string, password: string) => Promise<void>;
  register: (email: string, password: string, displayName: string, photoURL: string) => Promise<void>;
  logout: () => Promise<void>;
  googleSignIn: () => Promise<void>;
  updateUserProfile: (displayName: string, photoURL: string) => Promise<void>;
  resetPassword: (email: string) => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

// Mock Firebase authentication for demonstration
export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Initialize with localStorage data if available
  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setCurrentUser(JSON.parse(storedUser));
    }
    setIsLoading(false);
  }, []);

  // Mock login function
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      // Validate email and password (simple validation for demo)
      if (!email || !password) {
        throw new Error("Email and password are required");
      }
      
      // For demo purposes, automatically "login" with provided email
      // In a real app, this would be authenticated with Firebase
      const user = {
        uid: Math.random().toString(36).substring(2, 15),
        email: email,
        displayName: email.split('@')[0],
        photoURL: `https://ui-avatars.com/api/?name=${email.split('@')[0]}&background=random`
      };
      
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success("Logged in successfully!");
    } catch (error: any) {
      toast.error(error.message || "Login failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock register function
  const register = async (email: string, password: string, displayName: string, photoURL: string) => {
    try {
      setIsLoading(true);
      
      // Validate password
      if (!/[A-Z]/.test(password)) {
        throw new Error("Password must contain an uppercase letter");
      }
      if (!/[a-z]/.test(password)) {
        throw new Error("Password must contain a lowercase letter");
      }
      if (password.length < 6) {
        throw new Error("Password must be at least 6 characters");
      }
      
      // Create a new user with the provided information
      const user = {
        uid: Math.random().toString(36).substring(2, 15),
        email: email,
        displayName: displayName || email.split('@')[0],
        photoURL: photoURL || `https://ui-avatars.com/api/?name=${displayName || email.split('@')[0]}&background=random`
      };
      
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success("Account created successfully!");
    } catch (error: any) {
      toast.error(error.message || "Registration failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock logout function
  const logout = async () => {
    try {
      setIsLoading(true);
      setCurrentUser(null);
      localStorage.removeItem('user');
      toast.success("Logged out successfully");
    } catch (error: any) {
      toast.error(error.message || "Logout failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock Google Sign In
  const googleSignIn = async () => {
    try {
      setIsLoading(true);
      // For demo, create a Google user
      const user = {
        uid: Math.random().toString(36).substring(2, 15),
        email: "google.user@example.com",
        displayName: "Google User",
        photoURL: "https://ui-avatars.com/api/?name=Google+User&background=random"
      };
      
      setCurrentUser(user);
      localStorage.setItem('user', JSON.stringify(user));
      toast.success("Signed in with Google!");
    } catch (error: any) {
      toast.error(error.message || "Google sign in failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock update user profile
  const updateUserProfile = async (displayName: string, photoURL: string) => {
    try {
      setIsLoading(true);
      if (!currentUser) throw new Error("No user is signed in");
      
      const updatedUser = {
        ...currentUser,
        displayName: displayName || currentUser.displayName,
        photoURL: photoURL || currentUser.photoURL
      };
      
      setCurrentUser(updatedUser);
      localStorage.setItem('user', JSON.stringify(updatedUser));
      toast.success("Profile updated successfully");
    } catch (error: any) {
      toast.error(error.message || "Profile update failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Mock reset password
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);
      // Simulate sending a reset password email
      toast.success(`Password reset email sent to ${email}`);
      
      // Redirect to gmail for demonstration
      window.open("https://mail.google.com", "_blank");
    } catch (error: any) {
      toast.error(error.message || "Password reset failed");
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  const value = {
    currentUser,
    isLoading,
    login,
    register,
    logout,
    googleSignIn,
    updateUserProfile,
    resetPassword
  };

  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
