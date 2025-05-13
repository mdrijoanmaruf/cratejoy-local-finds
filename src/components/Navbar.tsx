
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useAuth } from "../contexts/AuthContext";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      toast.error("Failed to log out");
    }
  };

  const getInitials = (name: string | null) => {
    if (!name) return "U";
    return name.charAt(0).toUpperCase();
  };

  return (
    <nav className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container-custom py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-2xl font-bold text-primary">
            BoxWave
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about" 
              className={({ isActive }) => 
                isActive ? "text-primary font-medium" : "text-foreground hover:text-primary"
              }
            >
              About Us
            </NavLink>
            
            {currentUser ? (
              <div className="flex items-center">
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="p-0 h-auto">
                      <Avatar className="h-9 w-9">
                        <AvatarImage src={currentUser.photoURL || undefined} alt={currentUser.displayName || "User"} />
                        <AvatarFallback>{getInitials(currentUser.displayName)}</AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <div className="px-2 py-1.5 text-sm font-medium">{currentUser.displayName}</div>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem asChild>
                      <Link to="/profile" className="cursor-pointer">My Profile</Link>
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem onClick={handleLogout} className="cursor-pointer">
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <Link 
                to="/login" 
                className="btn-primary"
              >
                Login
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} aria-label="Toggle Menu">
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 space-y-3 animate-fade-in">
            <NavLink 
              to="/"
              onClick={() => setIsMenuOpen(false)}
              className={({ isActive }) => 
                isActive ? "block py-2 text-primary font-medium" : "block py-2 text-foreground hover:text-primary"
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/about"
              onClick={() => setIsMenuOpen(false)} 
              className={({ isActive }) => 
                isActive ? "block py-2 text-primary font-medium" : "block py-2 text-foreground hover:text-primary"
              }
            >
              About Us
            </NavLink>
            
            {currentUser ? (
              <>
                <NavLink 
                  to="/profile"
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) => 
                    isActive ? "block py-2 text-primary font-medium" : "block py-2 text-foreground hover:text-primary"
                  }
                >
                  My Profile
                </NavLink>
                <button 
                  onClick={() => {
                    handleLogout();
                    setIsMenuOpen(false);
                  }}
                  className="block w-full text-left py-2 text-foreground hover:text-primary"
                >
                  Log Out
                </button>
              </>
            ) : (
              <NavLink 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
                className="block py-2 text-primary font-medium"
              >
                Login
              </NavLink>
            )}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
