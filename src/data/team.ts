
export interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string;
  image: string;
  social: {
    twitter?: string;
    linkedin?: string;
    github?: string;
  };
}

export const team: TeamMember[] = [
  {
    id: "1",
    name: "Sanket Katore",
    role: "Founder & CEO",
    bio: "Sanket founded StepSmart with a vision to make mentorship accessible to everyone. With 5+ years in EdTech, he's passionate about transforming how we approach learning.",
    image: "/Sanket.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "2",
    name: "Ankit Surkar",
    role: "Head of Education",
    bio: "Ankit is an IIM Bangalore graduate and Product Manager at Microsoft with a passion for education. He oversees our mentorship programs, ensuring they provide real value to both mentors and mentees.",
    image: "/Ankit.jpeg",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
  {
    id: "3",
    name: "Achyut Singh",
    role: "Strategy and Outreach",
    bio: "Achyut drives our strategic initiatives and outreach efforts. With a background in business development, he connects StepSmart with industry leaders and mentors to enhance our platform.",
    image: "/Achyut.jpeg",
    social: {
      linkedin: "https://linkedin.com",
      github: "https://github.com",
    },
  },
  {
    id: "4",
    name: "Shivang Bajaj",
    role: "Community Manager",
    bio: "Shivang is an IIT Kanpur grad and fosters our vibrant community of mentors and learners. He organizes events and programs that create meaningful connections within the StepSmart ecosystem.",
    image: "https://i.pravatar.cc/300?img=1",
    social: {
      twitter: "https://twitter.com",
      linkedin: "https://linkedin.com",
    },
  },
];
