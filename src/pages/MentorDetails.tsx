import React from "react";
import { useParams } from "react-router-dom";
import MentorDetails from "../components/mentors/MentorDetails";
import { Mentor } from "../types/mentor";
import { mentors } from "@/data/mentorData";

const MentorPage = () => {
  const { id } = useParams<{ id: string }>();
  const mentor = mentors.find((m) => m.id === id);

  if (!mentor) {
    return (
      <div className="container mx-auto p-6 min-h-screen flex items-center justify-center">
        <p className="text-center text-destructive text-lg dark:text-red-400">
          Mentor not found.
        </p>
      </div>
    );
  } 

  return (
    <div className="min-h-screen py-8">
      <MentorDetails mentor={mentor} />
    </div>
  );
};

export default MentorPage;

// import MentorDetails from "../components/mentors/MentorDetails";
// import { Mentor } from "../types/mentor";

// const mentorData: Mentor = {
//   id: "1",
//   name: "Ankit",
//   title: "Microsoft - PM",
//   specialization: "Machine Learning & AI",
//   avatar: "https://i.pravatar.cc/300?img=1",
//   bio: "Dr. Chen is a leading expert in machine learning with over 10 years of industry experience. She has led data science teams at top tech companies and specializes in helping professionals transition into AI careers.",
//   experience: 10,
//   rating: 4.9,
//   availableTimeSlots: [
//     {
//       day: "Monday",
//       slots: ["10:00 AM", "2:00 PM", "4:00 PM"],
//     },
//     {
//       day: "Wednesday",
//       slots: ["9:00 AM", "1:00 PM", "5:00 PM"],
//     },
//     {
//       day: "Friday",
//       slots: ["11:00 AM", "3:00 PM"],
//     },
//   ],
// };

// const MentorPage = () => {
//   return (
//     <div className="min-h-screen py-8">
//       <MentorDetails mentor={mentorData} />
//     </div>
//   );
// };

// export default MentorPage;
