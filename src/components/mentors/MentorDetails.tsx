import React from "react";
import { Mentor } from "../types/mentor";
import StarRating from "./StarRating";
import TimeSlotCard from "./TimeSlotCard";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Calendar, Book } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

interface MentorDetailsProps {
  mentor: Mentor;
}

const MentorDetails: React.FC<MentorDetailsProps> = ({ mentor }) => {
  const { toast } = useToast();

  const handleBookSlot = (day: string, time: string) => {
    toast({
      title: "Slot Booked!",
      description: `You've booked a session with ${mentor.name} on ${day} at ${time}`,
    });
  };

  return (
    <div className="container mx-auto px-4 py-8 max-w-4xl">
      <Card className="overflow-hidden shadow-md">
        <div className="md:flex">
          {/* Profile Section */}
          <div className="md:w-2/5 p-6 flex flex-col items-center md:items-start">
            <div className="w-32 h-32 rounded-full overflow-hidden border-4 shadow-md mb-4">
              <img
                src={mentor.avatar}
                alt={mentor.name}
                className="w-full h-full object-cover"
              />
            </div>

            <h1 className="text-2xl font-bold mb-1">{mentor.name}</h1>
            <p className=" mb-2">
              {mentor.title}
            </p>

            <Badge
              variant="secondary"
              className="bg-purple-100 text-purple-800 hover:bg-purple-200 dark:bg-purple-900 dark:text-purple-100 mb-4"
            >
              {mentor.specialization}
            </Badge>

            <div className="flex items-center mb-4">
              <StarRating rating={mentor.rating} />
            </div>

            <div className="flex items-center space-x-4 mb-6">
              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Experience
                </p>
                <p className="font-bold text-purple-700 dark:text-purple-400">
                  {mentor.experience} years
                </p>
              </div>

              <div className="text-center">
                <p className="text-sm text-gray-500 dark:text-gray-400">
                  Sessions
                </p>
                <p className="font-bold text-purple-700 dark:text-purple-400">
                  200+
                </p>
              </div>
            </div>
          </div>

          {/* Details Section */}
          <div className="md:w-3/5 p-6">
            <div className="mb-6">
              <h2 className="text-lg font-semibold flex items-center mb-3">
                <Book className="h-5 w-5 text-purple-600 mr-2" />
                Biography
              </h2>
              <p className="leading-relaxed text-gray-700 dark:text-gray-300">
                {mentor.bio}
              </p>
            </div>

            <div>
              <h2 className="text-lg font-semibold flex items-center mb-3 ">
                <Calendar className="h-5 w-5 text-purple-600 mr-2" />
                Available Time Slots
              </h2>

              {mentor.availableTimeSlots.map((timeSlot, index) => (
                <TimeSlotCard
                  key={index}
                  timeSlot={timeSlot}
                  onBookSlot={handleBookSlot}
                />
              ))}
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default MentorDetails;
