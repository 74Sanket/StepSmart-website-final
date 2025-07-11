import { SectionHeading } from "@/components/SectionHeading";
import { TeamMemberCard } from "@/components/TeamMemberCard";
import { team } from "@/data/team";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const TeamMemberCard2 = ({ member }: { member: any }) => {
  return (
    <Card className="overflow-hidden border-none">
      <div className="aspect-square overflow-hidden">
        <img
          src={member.image}
          alt={member.name}
          className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
        />
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl">{member.name}</CardTitle>
        <CardDescription>{member.role}</CardDescription>
      </CardHeader>
      <CardContent className="pb-4">
        <p className="text-sm line-clamp-3">{member.bio}</p>
      </CardContent>
      <CardFooter className="pt-0 gap-2">
        <TooltipProvider>
          {member.social.linkedin && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={member.social.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z" />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>LinkedIn</TooltipContent>
            </Tooltip>
          )}

          {member.social.twitter && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={member.social.twitter}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>Twitter</TooltipContent>
            </Tooltip>
          )}

          {member.social.github && (
            <Tooltip>
              <TooltipTrigger asChild>
                <a
                  href={member.social.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-8 h-8 flex items-center justify-center rounded-full bg-muted/80 text-muted-foreground hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                  </svg>
                </a>
              </TooltipTrigger>
              <TooltipContent>GitHub</TooltipContent>
            </Tooltip>
          )}
        </TooltipProvider>
      </CardFooter>
    </Card>
  );
};

const ValueCard = ({
  title,
  description,
  icon,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
}) => {
  return (
    <Card className="border-none shadow-sm">
      <CardHeader>
        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-4">
          {icon}
        </div>
        <CardTitle>{title}</CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-base">{description}</CardDescription>
      </CardContent>
    </Card>
  );
};

const StatCard = ({ number, label }: { number: string; label: string }) => {
  return (
    <div className="space-y-2">
      <p className="text-4xl font-bold text-primary">{number}</p>
      <p className="text-muted-foreground">{label}</p>
    </div>
  );
};

export default function About() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      {/* Company Info Section */}
      <section className="py-10">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="About StepSmart"
            subtitle="Our mission is to connect people with knowledge and mentorship to achieve their professional goals"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="space-y-6">
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Story</h3>
                <p className="text-muted-foreground">
                  StepSmart is founded by IIT/IIM alums with a mission to make career mentorship accessible to everyone. We connect learners with experienced professionals to provide personalized guidance and real-world insights.
Our goal is to bridge the gap between academia and industry by offering practical support and trusted mentorship helping individuals move confidently from campus to career.
                </p>
                <p className="text-muted-foreground">
                  Our goal is to bridge the gap between academia and industry by offering practical support and trusted mentorship helping individuals move confidently from campus to career.

                </p>
              </div>

              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Our Values</h3>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      1
                    </div>
                    <div>
                      <span className="font-semibold">Accessibility</span> - We
                      believe quality education and mentorship should be
                      available to all.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      2
                    </div>
                    <div>
                      <span className="font-semibold">Community</span> - We
                      foster meaningful connections that extend beyond
                      individual mentorships.
                    </div>
                  </li>
                  <li className="flex items-start">
                    <div className="mr-2 h-6 w-6 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                      3
                    </div>
                    <div>
                      <span className="font-semibold">Excellence</span> - We
                      maintain high standards for our courses, mentors, and
                      platform.
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-background to-transparent z-10"></div>
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c"
                alt="Team collaboration"
                className="w-full h-full object-cover rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Hero Section */}
      {/* <section className="mb-12 md:mb-20 text-center">
        <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold font-heading mb-6 animate-in">
          About StepSmart
        </h1>
        <p
          className="text-xl text-muted-foreground max-w-3xl mx-auto animate-in"
          style={{ animationDelay: "0.1s" }}
        >
          Empowering learners through personalized mentorship and curated
          educational experiences
        </p>
      </section> */}
      {/* Our Story Section */}
      {/* <section className="grid md:grid-cols-2 gap-16 items-center mb-20 py-8 md:py-16 px-4 md:px-6 max-w-5xl mx-auto">
        <div className="space-y-6 animate-in">
          <h2 className="text-2xl md:text-3xl font-bold font-heading">
            Our Story
          </h2>
          <div className="space-y-4 text-lg">
            <p>
              StepSmart began with a simple observation: the most transformative
              learning experiences often come from personalized mentorship, yet
              such opportunities remain inaccessible to many.
            </p>
            <p>
              Founded in 2022 by a team of educators and technologists, our
              mission is to democratize access to high-quality mentorship and
              create a global community where knowledge flows freely across
              generations and disciplines.
            </p>
            <p>
              What started as a small pilot program with 50 mentors has grown
              into a thriving platform connecting thousands of learners with
              experts across diverse fields – from technology and business to
              creative arts and sciences.
            </p>
          </div>
        </div>
        <div
          className="relative h-[400px] overflow-hidden rounded-2xl shadow-xl animate-in"
          style={{ animationDelay: "0.2s" }}
        >
          <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10 rounded-2xl" />
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
            alt="Team collaboration"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </section> */}

      {/* Our Mission & Values */}
      {/* <section className="mb-20 mx-20">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 animate-in">
            Our Mission & Values
          </h2>
          <p
            className="text-lg text-muted-foreground animate-in"
            style={{ animationDelay: "0.1s" }}
          >
            The principles that guide our work and shape our community
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 staggered-animate">
          <ValueCard
            title="Access & Equity"
            description="We believe quality mentorship should be available to all, regardless of background or circumstance."
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
                <path d="m2 8 2 2-2 2 2 2-2 2"></path>
                <path d="m22 8-2 2 2 2-2 2 2 2"></path>
                <path d="M8 8v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V8"></path>
                <path d="M7 8a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2"></path>
              </svg>
            }
          />
          <ValueCard
            title="Transformative Learning"
            description="We focus on deep, meaningful learning experiences that develop both skills and mindsets."
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
                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 4.44-2.04Z"></path>
                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24A2.5 2.5 0 0 0 14.5 2Z"></path>
              </svg>
            }
          />
          <ValueCard
            title="Community & Connection"
            description="We believe learning thrives in supportive communities that foster meaningful relationships."
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
                <path d="M17 7.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                <path d="M7 7.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                <path d="M7 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
                <path d="M17 16.5a3.5 3.5 0 1 0 0-7 3.5 3.5 0 0 0 0 7Z"></path>
              </svg>
            }
          />
          <ValueCard
            title="Continuous Growth"
            description="We embrace lifelong learning and adapt constantly to serve our community better."
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
                <path d="M2 12h5"></path>
                <path d="M17 12h5"></path>
                <path d="M12 2v5"></path>
                <path d="M12 17v5"></path>
                <path d="M20 16a4 4 0 0 0 0-8"></path>
                <path d="M4 8a4 4 0 0 0 0 8"></path>
                <path d="M16 4a4 4 0 0 0-8 0"></path>
                <path d="M8 20a4 4 0 0 0 8 0"></path>
              </svg>
            }
          />
          <ValueCard
            title="Quality & Excellence"
            description="We maintain high standards in everything we do, from our platform to our mentor selection."
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
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
              </svg>
            }
          />
          <ValueCard
            title="Innovation & Adaptability"
            description="We constantly explore new ways to enhance learning experiences and adapt to changing needs."
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
                <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z"></path>
                <path d="m7 10 2 2 2-2"></path>
                <path d="M15 10h2v2"></path>
                <path d="M18 16h-6.5a2.5 2.5 0 0 1 0-5H14"></path>
              </svg>
            }
          />
        </div>
      </section> */}

      {/* Our Impact */}
      <section className="mb-20 py-16 bg-muted/30 rounded-3xl">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 animate-in">
            Our Impact
          </h2>
          <p
            className="text-lg text-muted-foreground animate-in"
            style={{ animationDelay: "0.1s" }}
          >
            The difference we're making in learning journeys worldwide
          </p>
        </div>

        <div className="container grid grid-cols-2 md:grid-cols-4 gap-8 text-center staggered-animate">
          <StatCard number="5,000+" label="Active Mentors" />
          <StatCard number="25,000+" label="Learners Supported" />
          <StatCard number="120+" label="Countries Reached" />
          <StatCard number="92%" label="Success Rate" />
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="py-16 bg-primary text-primary-foreground">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 animate-in">
            Our Impact
          </h2>
          <p
            className="text-lg text-muted-foreground animate-in text-white"
            style={{ animationDelay: "0.1s" }}
          >
            The difference we're making in learning journeys worldwide
          </p>
        </div>
        <div className="container px-4 md:px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div className="space-y-2">
              <div className="text-4xl font-bold">500+</div>
              <div className="text-primary-foreground/80">Active Mentors</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">10,000+</div>
              <div className="text-primary-foreground/80">Learners</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">100+</div>
              <div className="text-primary-foreground/80">Courses</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold">25+</div>
              <div className="text-primary-foreground/80">Industries</div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Team Section */}
      <section className="py-16">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Meet Our Team"
            subtitle="The passionate people behind StepSmart"
            centered
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {team.map((member) => (
              <TeamMemberCard
                key={member.id}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                social={member.social}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team */}
      {/* <section className="mb-20  px-4 md:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-2xl md:text-3xl font-bold font-heading mb-4 animate-in">
            Meet Our Team
          </h2>
          <p
            className="text-lg text-muted-foreground animate-in"
            style={{ animationDelay: "0.1s" }}
          >
            The passionate individuals behind StepSmart
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 staggered-animate">
          {team.map((member) => (
            <TeamMemberCard2 key={member.id} member={member} />
          ))}
        </div>
      </section> */}

      {/* Journey Section */}
      {/* <section className="py-16 bg-secondary/50">
        <div className="container px-4 md:px-6">
          <SectionHeading
            title="Our Journey"
            subtitle="The milestones that define our growth"
            centered
          />

          <div className="relative">
            <div className="absolute left-0 md:left-1/2 h-full w-1 bg-border transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right ml-6 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2023</div>
                  <p className="text-muted-foreground">
                    StepSmart was founded with a small network of tech mentors
                    helping newcomers navigate the industry.
                  </p>
                </div>
              </div>
              <div className="relative">
                <div className="md:w-1/2 md:pl-8 md:ml-auto ml-6">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2024</div>
                  <p className="text-muted-foreground">
                    Launched our first set of curated courses and expanded
                    mentorship to multiple industries including design and
                    marketing.
                  </p>
                </div>
              </div>

              <div className="relative">
                <div className="md:w-1/2 md:pr-8 md:text-right ml-6 md:ml-0">
                  <div className="absolute left-0 md:left-1/2 w-6 h-6 rounded-full bg-primary -translate-x-3 md:-translate-x-3 mt-1"></div>
                  <div className="mb-2 text-xl font-bold">2025</div>
                  <p className="text-muted-foreground">
                    Reached 5,000 active users and introduced our matching
                    algorithm to better connect mentors with mentees.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA section */}
      <section className="text-center py-16 px-4 rounded-3xl bg-primary text-primary-foreground mb-0">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-2xl md:text-3xl font-bold font-heading animate-in">
            Join Our Mission
          </h2>
          <p
            className="text-lg opacity-90 mx-auto max-w-2xl animate-in"
            style={{ animationDelay: "0.1s" }}
          >
            Whether you're seeking guidance or want to share your expertise,
            become part of our growing community dedicated to transforming
            education through mentorship.
          </p>
          <div
            className="flex flex-wrap justify-center gap-4 pt-2 animate-in"
            style={{ animationDelay: "0.2s" }}
          >
            <a
              href="/schedule"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring bg-white text-primary shadow hover:bg-white/90 h-9 px-4 py-2"
            >
              Find a Mentor
            </a>
            <a
              href="/signup"
              className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring border border-primary-foreground bg-transparent text-primary-foreground shadow-sm hover:bg-primary-foreground/10 h-9 px-4 py-2"
            >
              Become a Mentor
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
