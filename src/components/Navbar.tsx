
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";



export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

  // Check if user is logged in from localStorage
  const isLoggedIn = localStorage.getItem("stepSmart-user") !== null;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background/80 backdrop-blur-lg shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <div className="bg-primary rounded-lg p-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-6 w-6 text-primary-foreground"
            >
              <path d="M10 20l4-16" />
              <path d="M4 20l7-7" />
              <path d="M13 7l7 7" />
            </svg>
          </div>
          <span className="font-bold text-xl">StepSmart</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            to="/"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Home
          </Link>
          <Link
            to="/blog"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Blog
          </Link>
          <Link
            to="/schedule"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            Schedule
          </Link>
          <Link
            to="/about"
            className="text-foreground hover:text-primary transition-colors font-medium"
          >
            About Us
          </Link>
    
          <div className="hidden md:flex items-center gap-4">
            <ThemeToggle />
            {isLoggedIn ? (
              <Button variant="ghost" onClick={handleLogout}>
                Logout
              </Button>
            ) : (
              <>
                <Button variant="ghost" asChild>
                  <Link to="/login">Login</Link>
                </Button>
                <Button asChild>
                  <Link to="/signup">Sign up</Link>
                </Button>
              </>
            )}
          </div>
        </nav>

        {/* Mobile Navigation Toggle */}
        <div className="flex md:hidden items-center space-x-2">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="relative z-20"
          >
            {mobileMenuOpen ? (
              <X className="h-5 w-5" />
            ) : (
              <Menu className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>

        {/* Mobile Navigation Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden fixed inset-0 z-10 bg-background/95 backdrop-blur-sm">
            <nav className="flex flex-col items-center justify-center h-full space-y-8 animate-fade-in">
              <Link
                to="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Home
              </Link>
              <Link
                to="/blog"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Blog
              </Link>
              <Link
                to="/schedule"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                Schedule
              </Link>
              <Link
                to="/about"
                onClick={() => setMobileMenuOpen(false)}
                className="text-xl font-medium"
              >
                About Us
              </Link>
              <Button size="lg" onClick={() => setMobileMenuOpen(false)}>
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
