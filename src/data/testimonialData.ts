
export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  avatar: string;
  quote: string;
  rating: number;
}

export const testimonialsData: Testimonial[] = [
  {
    id: "1",
    name: "Bharat",
    role: "Visual Analytics Engineer",
    company: "Rackspace Technology",
    avatar: "https://i.pravatar.cc/150?img=20",
    quote:
      "Stepsmart literally changed my career. I went from doing basic data entry to actually working in analytics, because they gave me a clear plan instead of just throwing a bunch of resources at me. They didn’t just teach me, but helped me figure out what to focus on, how to nail interviews, and most importantly, to believe I could do this. Now I’m not just making more money, but I’ve got a career I’m genuinely excited about. All thanks to Stepsmart.",
    rating: 5,
  },
  {
    id: "2",
    name: "Rohit",
    role: "Btech Student",
    company: "",
    avatar: "https://i.pravatar.cc/150?img=21",
    quote:
      "I always kinda knew I had the skills... like I was decent at coding, had worked on a few projects, but every time placements came around, I’d freeze. I just didn’t know how to prepare properly. What to study, how to answer interviews, or even if I was doing enough.Thats when I came across Stepsmart—and honestly, it changed everything. They didn''t throw random resources at me. It was proper step-by-step guidance. Weekly check-ins, mock interviews that actually felt real, and mentors who gave practical advice—not the usual textbook stuff.The best part? They made me believe I could actually do this. From being unsure about applying anywhere to actually landing a job I’m proud of, the journey wouldn’t have been possible without Stepsmart.If you’re someone who’s confused, overwhelmed, or just needs a bit of direction—trust me, this is it.",
    rating: 5,
  },
  {
    id: "3",
    name: "Aisha Patel",
    role: "UX Designer",
    company: "Creative Design Co.",
    avatar: "https://i.pravatar.cc/150?img=22",
    quote:
      "My mentor didn't just help me improve my design skills, but also navigated me through corporate politics and helped me position myself for leadership. This holistic approach to mentorship is what sets StepSmart apart.",
    rating: 4,
  },
  {
    id: "4",
    name: "Michael Chen",
    role: "Data Analyst",
    company: "Insight Analytics",
    avatar: "https://i.pravatar.cc/150?img=23",
    quote:
      "I was struggling to transition from academia to industry. My StepSmart mentor helped me translate my research experience into marketable skills, resulting in multiple job offers within weeks of our collaboration.",
    rating: 5,
  },
];
