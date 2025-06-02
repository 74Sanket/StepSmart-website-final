import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { cn } from "@/lib/utils";
import { useNavigate } from "react-router-dom";

const Header = () => {
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
          {/* <div className="bg-primary rounded-lg p-1"> */}
            {/* <svg
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
            </svg> */}
            <img
      src="/icon.png"
      alt="StepSmart Logo"
      className="h-6 w-6 object-contain"
    />
          {/* </div> */}
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
};

export default Header;

// import { useState, useEffect } from "react";
// import { Link } from "react-router-dom";
// import { Button } from "@/components/ui/button";
// import { ThemeToggle } from "./ThemeToggle";
// import { useNavigate } from "react-router-dom";

// const Header = () => {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const navigate = useNavigate();

//   // Check if user is logged in from localStorage
//   const isLoggedIn = localStorage.getItem("stepSmart-user") !== null;

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollPosition = window.scrollY;
//       setIsScrolled(scrollPosition > 50);
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   const handleLogout = () => {
//     localStorage.removeItem("stepSmart-user");
//     navigate("/");
//     // We would add toast notification here
//   };

//   return (
//     <header
//       className={`sticky top-0 w-full z-50 transition-all duration-300 ${
//         isScrolled
//           ? "bg-background/80 backdrop-blur-md py-2 shadow-md"
//           : "bg-transparent py-4"
//       }`}
//     >
//       <div className="container flex items-center justify-between">
//         <Link to="/" className="flex items-center">
//           <span className="font-heading text-2xl font-bold text-primary">
//             Step<span className="text-brand-500">Smart</span>
//           </span>
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden md:flex items-center gap-8">
//           <Link
//             to="/"
//             className="text-foreground/80 hover:text-primary transition-colors"
//           >
//             Home
//           </Link>
//           <Link
//             to="/blog"
//             className="text-foreground/80 hover:text-primary transition-colors"
//           >
//             Blog
//           </Link>
//           <Link
//             to="/about"
//             className="text-foreground/80 hover:text-primary transition-colors"
//           >
//             About
//           </Link>
//           <Link
//             to="/schedule"
//             className="text-foreground/80 hover:text-primary transition-colors"
//           >
//             Schedule
//           </Link>
//         </nav>

//         <div className="hidden md:flex items-center gap-4">
//           <ThemeToggle />
//           {isLoggedIn ? (
//             <Button variant="ghost" onClick={handleLogout}>
//               Logout
//             </Button>
//           ) : (
//             <>
//               <Button variant="ghost" asChild>
//                 <Link to="/login">Login</Link>
//               </Button>
//               <Button asChild>
//                 <Link to="/signup">Sign up</Link>
//               </Button>
//             </>
//           )}
//         </div>

//         {/* Mobile Navigation Button */}
//         <div className="flex items-center gap-2 md:hidden">
//           <ThemeToggle />
//           <Button
//             variant="ghost"
//             size="icon"
//             onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//             aria-label="Toggle menu"
//           >
//             <svg
//               xmlns="http://www.w3.org/2000/svg"
//               width="24"
//               height="24"
//               viewBox="0 0 24 24"
//               fill="none"
//               stroke="currentColor"
//               strokeWidth="2"
//               strokeLinecap="round"
//               strokeLinejoin="round"
//             >
//               {isMobileMenuOpen ? (
//                 <>
//                   <line x1="18" y1="6" x2="6" y2="18"></line>
//                   <line x1="6" y1="6" x2="18" y2="18"></line>
//                 </>
//               ) : (
//                 <>
//                   <line x1="4" y1="12" x2="20" y2="12"></line>
//                   <line x1="4" y1="6" x2="20" y2="6"></line>
//                   <line x1="4" y1="18" x2="20" y2="18"></line>
//                 </>
//               )}
//             </svg>
//           </Button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden bg-background/95 backdrop-blur-sm">
//           <div className="container flex flex-col py-4 animate-in">
//             <Link
//               to="/"
//               className="py-2 hover:text-primary"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Home
//             </Link>
//             <Link
//               to="/blog"
//               className="py-2 hover:text-primary"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Blog
//             </Link>
//             <Link
//               to="/about"
//               className="py-2 hover:text-primary"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               About
//             </Link>
//             <Link
//               to="/schedule"
//               className="py-2 hover:text-primary"
//               onClick={() => setIsMobileMenuOpen(false)}
//             >
//               Schedule
//             </Link>

//             <div className="border-t border-border my-2 pt-2">
//               {isLoggedIn ? (
//                 <Button
//                   variant="ghost"
//                   onClick={() => {
//                     handleLogout();
//                     setIsMobileMenuOpen(false);
//                   }}
//                   className="w-full justify-start px-0 font-normal"
//                 >
//                   Logout
//                 </Button>
//               ) : (
//                 <div className="flex flex-col gap-2">
//                   <Button
//                     variant="ghost"
//                     asChild
//                     className="w-full justify-start px-0 font-normal"
//                   >
//                     <Link
//                       to="/login"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       Login
//                     </Link>
//                   </Button>
//                   <Button
//                     asChild
//                     className="w-full"
//                   >
//                     <Link
//                       to="/signup"
//                       onClick={() => setIsMobileMenuOpen(false)}
//                     >
//                       Sign up
//                     </Link>
//                   </Button>
//                 </div>
//               )}
//             </div>
//           </div>
//         </div>
//       )}
//     </header>
//   );
// };

// export default Header;
