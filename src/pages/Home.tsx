
import { Button } from "@/components/ui/button";
import { HeroAnimation } from "@/components/HeroAnimation";
import { SectionHeading } from "@/components/SectionHeading";
import { FeatureCard } from "@/components/FeatureCard";
import { TestimonialCard } from "@/components/TestimonialCard";
import { testimonials } from "@/data/testimonials";
import { testimonialsData } from "@/data/testimonialData";
import { ArrowRight, BookOpen, Users, Award, BarChart } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function Home() {
  // Function to simulate the AOS (Animate On Scroll) behavior
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonialIndex((prevIndex) =>
        prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll(".animate-on-scroll");
      elements.forEach((el) => {
        const rect = el.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight - 100;
        if (isVisible) {
          (el as HTMLElement).classList.add("animate-fade-in");
          (el as HTMLElement).style.opacity = "1";
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    // Trigger once to check initial elements in view
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-32 pb-16 hero-pattern">
        <div className="container px-4 md:px-6">
          <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
            <div className="flex flex-col justify-center space-y-4">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl">
                  Your step to {" "}
                  <span className="text-primary">Success</span>
                </h1>
                <p className="max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Connect with expert mentors and access world-class courses
                  designed to help you achieve your professional goals.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3">
                <Button size="lg" asChild>
                  <Link to="/blog">
                    Explore <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/about">Join Our Community</Link>
                </Button>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <HeroAnimation />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      {/* <section className="py-16 bg-accent/30">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="About StepSmart"
            subtitle="We're on a mission to democratize access to high-quality mentorship and education"
            centered
          />

          <div className="grid gap-6 md:grid-cols-2 lg:gap-12">
            <div
              className="space-y-4 animate-on-scroll opacity-0"
              style={{ transitionDelay: "100ms" }}
            >
              <h3 className="text-2xl font-bold">Our Vision</h3>
              <p className="text-muted-foreground">
                At StepSmart, we believe that everyone deserves access to
                quality mentorship and education regardless of their background.
                We're building a community where knowledge sharing and personal
                growth go hand in hand.
              </p>
              <p className="text-muted-foreground">
                Our platform connects ambitious learners with experienced
                mentors, creating relationships that foster professional
                development and accelerate career growth.
              </p>
            </div>
            <div
              className="space-y-4 animate-on-scroll opacity-0"
              style={{ transitionDelay: "300ms" }}
            >
              <h3 className="text-2xl font-bold">Our Approach</h3>
              <p className="text-muted-foreground">
                We've developed a unique matching system that pairs mentees with
                the perfect mentor based on their goals, industry, and learning
                style.
              </p>
              <p className="text-muted-foreground">
                Our courses are designed by industry experts and undergo a
                rigorous review process to ensure they deliver practical,
                up-to-date knowledge that you can apply immediately in your
                career.
              </p>
            </div>
          </div>
        </div>
      </section> */}

      <section className="py-20 bg-muted/20">
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold font-heading animate-in">
                Our Mission & Vision
              </h2>
              <div className="space-y-4">
                <p
                  className="text-lg animate-in"
                  style={{ animationDelay: "0.1s" }}
                >
                  StepSmart was founded with a simple but powerful idea:
                  learning is most effective when guided by experienced mentors
                  who have walked the path before you.
                </p>
                <p
                  className="text-lg animate-in"
                  style={{ animationDelay: "0.2s" }}
                >
                  Our mission is: if a student has the skills and domain knowledge, they deserve a step at their dream job.

                </p>
                <p
                  className="text-lg animate-in"
                  style={{ animationDelay: "0.3s" }}
                >
                  We're not just building a platform — we’re building a community for students, by students, where support, mentorship, and progress go hand in hand.
                </p>
              </div>
              <div className="animate-in" style={{ animationDelay: "0.4s" }}>
                <Button asChild variant="outline" size="lg">
                  <Link to="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
            <div className="relative h-[400px] lg:h-[500px] overflow-hidden rounded-2xl shadow-xl animate-in">
              <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-2xl" />
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Why Choose StepSmart"
            subtitle="Stepsmart provides strategy with expert guidance to provide a comprehensive preparation experience"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <FeatureCard
              title="Expert Mentorship"
              description="Connect with industry professionals who have walked the path you're on."
              icon={<Users className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="100ms"
            />
            <FeatureCard
              title="Quality resources"
              description="Access comprehensive learning materials designed for practical application."
              icon={<BookOpen className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="300ms"
            />
            <FeatureCard
              title="Skill assessment and guidance"
              description="Monitor your development with regular skill tests and feedback for improvement"
              icon={<Award className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="500ms"
            />
            <FeatureCard
              title="Structured pathways"
              description="Step by step guide to attain your goals"
              icon={<BarChart className="h-6 w-6" />}
              className="animate-on-scroll opacity-0 transition-all"
              data-delay="700ms"
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12 md:mb-20">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-in">
              Why Choose StepSmart
            </h2>
            <p
              className="text-lg text-muted-foreground animate-in"
              style={{ animationDelay: "0.1s" }}
            >
              Our platform offers a unique approach to learning through
              mentorship and community.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 staggered-animate">
            <FeatureCard
              title="Expert Mentors"
              description="Connect with industry professionals who provide personalized guidance tailored to your goals."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M17 11h1a3 3 0 0 1 0 6h-1"></path>
                  <path d="M9 12v6"></path>
                  <path d="M13 12v6"></path>
                  <path d="M14 7.5c-1 0-1.64.08-2.53.22-1.42.22-2.62 1.43-2.85 2.85C8.5 11.5 8.5 12 8.5 12"></path>
                  <path d="m14 7.5-.01-4L11 7l2.99.5Z"></path>
                </svg>
              }
            />

            <FeatureCard
              title="Structured Learning"
              description="Follow curated learning paths designed to take you from beginner to expert in your chosen field."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path>
                  <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path>
                </svg>
              }
            />

            <FeatureCard
              title="Practical Projects"
              description="Apply your knowledge to real-world projects with feedback from experienced professionals."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M8.3 10a.7.7 0 0 1-.626-1.079L11.4 3a.7.7 0 0 1 1.198-.043L16.3 8.9a.7.7 0 0 1-.572 1.1H8.3Z"></path>
                  <rect x="3" y="14" width="7" height="7" rx="1"></rect>
                  <circle cx="17.5" cy="17.5" r="3.5"></circle>
                </svg>
              }
            />

            <FeatureCard
              title="Community Support"
              description="Join a vibrant community of learners and mentors who share knowledge and provide support."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M14 19a6 6 0 0 0-12 0"></path>
                  <circle cx="8" cy="9" r="4"></circle>
                  <path d="M22 19a6 6 0 0 0-6-6 4 4 0 1 0 0-8"></path>
                </svg>
              }
            />

            <FeatureCard
              title="Flexible Scheduling"
              description="Book sessions that fit your schedule, with options for both short-term and long-term mentorship."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path>
                  <path d="M16 2v4"></path>
                  <path d="M8 2v4"></path>
                  <path d="M3 10h18"></path>
                  <path d="M18 21a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"></path>
                  <path d="M18 15v.01"></path>
                  <path d="M18 18v3"></path>
                </svg>
              }
            />

            <FeatureCard
              title="Resource Library"
              description="Access a comprehensive library of articles, videos, and tools to supplement your learning."
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect>
                  <path d="M21 14h-8a2 2 0 0 1-2-2V3"></path>
                </svg>
              }
            />
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      {/* <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Success Stories"
            subtitle="Hear from professionals who have transformed their careers with StepSmart"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={testimonial.id}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatarUrl={testimonial.avatarUrl}
                className={`animate-on-scroll opacity-0 transition-all`}
                data-delay={`${index * 200}ms`}
              />
            ))}
          </div>
        </div>
      </section> */}

      {/* Testimonials Section */}
      <section className="py-20 bg-background">
        <div className="container px-4 md:px-6">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="text-3xl md:text-4xl font-bold font-heading mb-4 animate-in">
              What Our Students Say
            </h2>
            <p
              className="text-lg text-muted-foreground animate-in"
              style={{ animationDelay: "0.1s" }}
            >
              Read about the transformative experiences of learners who found
              success through our platform.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {testimonialsData.map((testimonial, index) => (
                <div
                  key={testimonial.id}
                  className={`transition-opacity duration-500 ${
                    index === currentTestimonialIndex
                      ? "opacity-100"
                      : "opacity-0 absolute top-0 left-0"
                  }`}
                  style={{
                    display:
                      index === currentTestimonialIndex ? "block" : "none",
                  }}
                >
                  <Card className="border-none shadow-lg">
                    <CardContent className="pt-6">
                      <div className="flex flex-col items-center text-center space-y-4">
                        <div className="relative">
                          <div className="absolute -z-10 -inset-1 rounded-full bg-primary/20 blur-sm" />
                          <img
                            src={testimonial.avatar}
                            alt={testimonial.name}
                            className="w-16 h-16 rounded-full object-cover border-2 border-primary/50"
                          />
                        </div>
                        <div className="space-y-2">
                          <svg
                            className="h-8 w-8 text-muted-foreground/50 mx-auto mb-2"
                            fill="none"
                            height="24"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            width="24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                            <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                          </svg>
                          <p className="text-lg">{testimonial.quote}</p>
                          <div className="pt-2">
                            <h4 className="font-medium">{testimonial.name}</h4>
                            <p className="text-muted-foreground text-sm">
                              {testimonial.role}, {testimonial.company}
                            </p>
                          </div>
                          <div className="flex justify-center pt-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <svg
                                key={i}
                                className={`w-4 h-4 ${
                                  i < testimonial.rating
                                    ? "text-yellow-500"
                                    : "text-gray-300"
                                }`}
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 20 20"
                                fill="currentColor"
                              >
                                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                              </svg>
                            ))}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6 gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonialIndex(index)}
                  className={`w-3 h-3 rounded-full ${
                    index === currentTestimonialIndex
                      ? "bg-primary"
                      : "bg-primary/30"
                  }`}
                  aria-label={`View testimonial ${index + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="max-w-[700px] mx-auto mb-8 text-primary-foreground/80">
            Join thousands of professionals who are accelerating their careers
            with StepSmart's mentorship and courses.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-3">
            <Button size="lg" variant="secondary" asChild>
              <Link to="/blog">
                Browse Blogs <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              asChild
            >
              <Link to="/schedule">Learn About Mentorship</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-20 mt-20 bg-primary text-primary-foreground">
        <div className="container px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold font-heading animate-in">
              Ready to Accelerate Your Learning Journey?
            </h2>
            <p
              className="text-lg opacity-90 animate-in"
              style={{ animationDelay: "0.1s" }}
            >
              Join thousands of learners who are achieving their goals faster
              with personalized mentorship and structured guidance.
            </p>
            <div
              className="flex flex-col sm:flex-row gap-4 justify-center animate-in"
              style={{ animationDelay: "0.2s" }}
            >
              <Button
                asChild
                size="lg"
                variant="secondary"
                className="rounded-full"
              >
                <Link to="/signup">Sign Up Now</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="rounded-full bg-transparent text-primary-foreground border-primary-foreground hover:bg-primary-foreground/10"
              >
                <Link to="/schedule">Browse Mentors</Link>
              </Button>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}
