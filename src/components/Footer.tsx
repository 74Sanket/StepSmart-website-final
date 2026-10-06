
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { ArrowRight, Check, Linkedin, Twitter, Youtube } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import { Link } from "react-router-dom";

export function Footer() {
  const [email, setEmail] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const { toast } = useToast();

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    // Simulating subscription success
    setTimeout(() => {
      setIsSubscribed(true);
      toast({
        title: "Subscribed!",
        description: "You have successfully subscribed to our newsletter.",
      });
    }, 500);
  };

  return (
    <footer className="bg-secondary/50 pt-16 pb-8 mt-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
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
            </div>
            <p className="text-muted-foreground">
              Your step towards success. Join our
              community to Learn! Grow! and Succeed!
            </p>
            <div className="flex space-x-3">
              <a href="https://www.linkedin.com/company/stepsmart/posts/?feedView=all"
                target="_blank"
                rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full">
                <Linkedin className="h-4 w-4" />
                <span className="sr-only">LinkedIn</span>
              </Button>
                </a>
              <Button variant="ghost" size="icon" className="rounded-full">
                <Youtube className="h-4 w-4" />
                <span className="sr-only">YouTube</span>
              </Button>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  Our Team
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <ul className="space-y-2">
              {/* <li className="text-muted-foreground">123 Learning Street</li>
              <li className="text-muted-foreground">Mentor City, MS 12345</li> */}
              <li className="text-muted-foreground">
                administrator@stepsmart.com
              </li>
              <li className="text-muted-foreground">+91 - 9790464269 / +91 - 9766704926 </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-lg">Newsletter</h3>
            <p className="text-muted-foreground">
              Subscribe to our newsletter for updates on courses and mentorship
              opportunities.
            </p>
            <form
              onSubmit={handleSubscribe}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2">
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  disabled={isSubscribed}
                />
                <Button type="submit" disabled={isSubscribed} className="px-3">
                  {isSubscribed ? (
                    <Check className="h-4 w-4" />
                  ) : (
                    <ArrowRight className="h-4 w-4" />
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>

        <hr className="mt-8 mb-6 border-border" />

        <div className="text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} StepSmart. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
