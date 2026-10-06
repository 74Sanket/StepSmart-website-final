
export interface Mentor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  avatar: string;
  bio: string;
  experience: number;
  rating: number;
  availableTimeSlots: {
    day: string;
    slots: string[];
  }[];
}

export const mentors: Mentor[] = [
  {
    id: "1",
    name: "Ankit",
    title: "Microsoft - PM",
    specialization: "Machine Learning & AI",
    avatar: "https://i.pravatar.cc/300?img=1",
    bio: "Dr. Chen is a leading expert in machine learning with over 10 years of industry experience. She has led data science teams at top tech companies and specializes in helping professionals transition into AI careers.",
    experience: 10,
    rating: 4.9,
    availableTimeSlots: [
      {
        day: "Monday",
        slots: ["10:00 AM", "2:00 PM", "4:00 PM"],
      },
      {
        day: "Wednesday",
        slots: ["9:00 AM", "1:00 PM", "5:00 PM"],
      },
      {
        day: "Friday",
        slots: ["11:00 AM", "3:00 PM"],
      },
    ],
  },
  {
    id: "2",
    name: "Michael Rodriguez",
    title: "Senior Software Engineer",
    specialization: "Web Development & System Design",
    avatar: "https://i.pravatar.cc/300?img=2",
    bio: "Michael has been building scalable web applications for over 8 years. He specializes in frontend frameworks, system architecture, and guiding junior developers through career advancement.",
    experience: 8,
    rating: 4.8,
    availableTimeSlots: [
      {
        day: "Tuesday",
        slots: ["11:00 AM", "3:00 PM", "5:00 PM"],
      },
      {
        day: "Thursday",
        slots: ["10:00 AM", "2:00 PM", "4:00 PM"],
      },
      {
        day: "Saturday",
        slots: ["9:00 AM", "12:00 PM"],
      },
    ],
  },
  {
    id: "3",
    name: "Sarah Johnson",
    title: "UX/UI Design Director",
    specialization: "User Experience & Product Design",
    avatar: "https://i.pravatar.cc/300?img=3",
    bio: "Sarah is a design leader with experience at top creative agencies. She helps aspiring designers build standout portfolios and master the UX process from research to implementation.",
    experience: 12,
    rating: 4.7,
    availableTimeSlots: [
      {
        day: "Monday",
        slots: ["9:00 AM", "1:00 PM", "3:00 PM"],
      },
      {
        day: "Wednesday",
        slots: ["10:00 AM", "2:00 PM", "4:00 PM"],
      },
      {
        day: "Friday",
        slots: ["12:00 PM", "5:00 PM"],
      },
    ],
  },
  {
    id: "4",
    name: "Dr. James Wilson",
    title: "Director of Education",
    specialization: "Learning Strategies & Academic Achievement",
    avatar: "https://i.pravatar.cc/300?img=4",
    bio: "With a PhD in Educational Psychology, Dr. Wilson helps students develop effective learning strategies and overcome academic challenges. He specializes in knowledge retention and study techniques.",
    experience: 15,
    rating: 4.9,
    availableTimeSlots: [
      {
        day: "Tuesday",
        slots: ["9:00 AM", "11:00 AM", "2:00 PM"],
      },
      {
        day: "Thursday",
        slots: ["10:00 AM", "3:00 PM", "5:00 PM"],
      },
      {
        day: "Saturday",
        slots: ["10:00 AM", "1:00 PM"],
      },
    ],
  },
  {
    id: "5",
    name: "Priya Patel",
    title: "Project Management Professional",
    specialization: "Agile Methodologies & Leadership",
    avatar: "https://i.pravatar.cc/300?img=5",
    bio: "Priya is a certified PMP with expertise in leading complex projects. She mentors emerging project managers in agile practices, team leadership, and career advancement in the technology sector.",
    experience: 9,
    rating: 4.6,
    availableTimeSlots: [
      {
        day: "Monday",
        slots: ["11:00 AM", "2:00 PM", "4:00 PM"],
      },
      {
        day: "Wednesday",
        slots: ["9:00 AM", "1:00 PM", "3:00 PM"],
      },
      {
        day: "Friday",
        slots: ["10:00 AM", "12:00 PM", "2:00 PM"],
      },
    ],
  },
];
