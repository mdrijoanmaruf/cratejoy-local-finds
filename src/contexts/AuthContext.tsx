
import React, { createContext, useContext, useState, useEffect } from 'react';
import { 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword, 
  signOut, 
  onAuthStateChanged, 
  GoogleAuthProvider, 
  signInWithPopup,
  updateProfile,
  sendPasswordResetEmail,
  User as FirebaseUser
} from 'firebase/auth';
import { toast } from "sonner";
import { auth } from '../config/firebase';
import Swal from 'sweetalert2';

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

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setCurrentUser({
          uid: user.uid,
          email: user.email,
          displayName: user.displayName,
          photoURL: user.photoURL
        });
      } else {
        setCurrentUser(null);
      }
      setIsLoading(false);
    });

    return () => unsubscribe();
  }, []);

  // Login with email and password
  const login = async (email: string, password: string) => {
    try {
      setIsLoading(true);
      await signInWithEmailAndPassword(auth, email, password);
      Swal.fire({
        icon: 'success',
        title: 'Login Successful',
        text: 'Welcome back!',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error: any) {
      let errorMessage = "Login failed";
      if (error.code === 'auth/user-not-found') {
        errorMessage = "User not found. Please check your email or sign up.";
      } else if (error.code === 'auth/wrong-password') {
        errorMessage = "Incorrect password. Please try again.";
      } else if (error.code === 'auth/invalid-credential') {
        errorMessage = "Invalid credentials. Please check your email and password.";
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Login Error',
        text: errorMessage
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Register with email and password
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
      
      // Create user
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      
      // Update profile with display name and photo URL
      await updateProfile(user, {
        displayName: displayName || email.split('@')[0],
        photoURL: photoURL || `https://ui-avatars.com/api/?name=${displayName || email.split('@')[0]}&background=random`
      });
      
      Swal.fire({
        icon: 'success',
        title: 'Registration Successful',
        text: 'Your account has been created!',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error: any) {
      let errorMessage = error.message || "Registration failed";
      if (error.code === 'auth/email-already-in-use') {
        errorMessage = "Email is already in use. Please use a different email or login.";
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Registration Error',
        text: errorMessage
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Google Sign In
  const googleSignIn = async () => {
    try {
      setIsLoading(true);
      const provider = new GoogleAuthProvider();
      await signInWithPopup(auth, provider);
      
      Swal.fire({
        icon: 'success',
        title: 'Google Sign-in Successful',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Google Sign-in Error',
        text: error.message || "Failed to sign in with Google"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Logout
  const logout = async () => {
    try {
      setIsLoading(true);
      await signOut(auth);
      
      Swal.fire({
        icon: 'success',
        title: 'Logged Out',
        text: 'You have been successfully logged out',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Logout Error',
        text: error.message || "Failed to log out"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Update user profile
  const updateUserProfile = async (displayName: string, photoURL: string) => {
    try {
      setIsLoading(true);
      const user = auth.currentUser;
      if (!user) throw new Error("No user is signed in");
      
      await updateProfile(user, {
        displayName: displayName || user.displayName,
        photoURL: photoURL || user.photoURL
      });
      
      // Update current user state after profile update
      setCurrentUser({
        uid: user.uid,
        email: user.email,
        displayName: displayName || user.displayName,
        photoURL: photoURL || user.photoURL
      });
      
      Swal.fire({
        icon: 'success',
        title: 'Profile Updated',
        text: 'Your profile has been updated successfully',
        timer: 1500,
        showConfirmButton: false
      });
    } catch (error: any) {
      Swal.fire({
        icon: 'error',
        title: 'Profile Update Error',
        text: error.message || "Failed to update profile"
      });
      throw error;
    } finally {
      setIsLoading(false);
    }
  };

  // Reset password
  const resetPassword = async (email: string) => {
    try {
      setIsLoading(true);
      await sendPasswordResetEmail(auth, email);
      
      Swal.fire({
        icon: 'success',
        title: 'Password Reset Email Sent',
        text: `Password reset email sent to ${email}`,
      });
      
      // Redirect to gmail for demonstration
      window.open("https://mail.google.com", "_blank");
    } catch (error: any) {
      let errorMessage = error.message || "Failed to send password reset email";
      if (error.code === 'auth/user-not-found') {
        errorMessage = "No user found with this email address";
      }
      
      Swal.fire({
        icon: 'error',
        title: 'Password Reset Error',
        text: errorMessage
      });
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
