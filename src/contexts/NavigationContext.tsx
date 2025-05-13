
import React, { createContext, useContext, ReactNode } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'sonner';

interface NavigationContextType {
  navigateToTrackOrder: () => void;
  renderTrackOrderLink: () => React.ReactNode;
}

const NavigationContext = createContext<NavigationContextType | undefined>(undefined);

export const NavigationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const navigateToTrackOrder = () => {
    window.location.href = '/track-order';
  };
  
  const renderTrackOrderLink = () => {
    return (
      <Link to="/track-order" className="text-sm font-medium text-gray-700 hover:text-primary">
        Track Order
      </Link>
    );
  };
  
  const value = {
    navigateToTrackOrder,
    renderTrackOrderLink,
  };
  
  return (
    <NavigationContext.Provider value={value}>
      {children}
    </NavigationContext.Provider>
  );
};

export const useNavigation = () => {
  const context = useContext(NavigationContext);
  if (context === undefined) {
    throw new Error('useNavigation must be used within a NavigationProvider');
  }
  return context;
};
