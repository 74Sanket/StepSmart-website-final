import React from "react";
import { TimeSlot } from "../types/mentor";
import { Button } from "@/components/ui/button";
import { Calendar, Clock } from "lucide-react";

interface TimeSlotCardProps {
  timeSlot: TimeSlot;
  onBookSlot: (day: string, time: string) => void;
}

const TimeSlotCard: React.FC<TimeSlotCardProps> = ({
  timeSlot,
  onBookSlot,
}) => {
  return (
    <div className="bg-white dark:bg-zinc-800 rounded-lg shadow-sm border border-gray-100 dark:border-zinc-700 p-4 mb-4">
      <div className="flex items-center mb-3">
        <Calendar className="h-4 w-4 text-purple-600 mr-2" />
        <h3 className="font-medium text-gray-800 dark:text-gray-100">
          {timeSlot.day}
        </h3>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
        {timeSlot.slots.map((slot, index) => (
          <div
            key={`${timeSlot.day}-${index}`}
            className="flex justify-between items-center bg-gray-50 dark:bg-zinc-700 hover:bg-purple-50 dark:hover:bg-purple-900 transition-colors rounded-md p-2"
          >
            <div className="flex items-center">
              <Clock className="h-3 w-3 text-purple-600 mr-2" />
              <span className="text-sm text-gray-800 dark:text-gray-100">
                {slot}
              </span>
            </div>
            <Button
              size="sm"
              variant="outline"
              onClick={() => onBookSlot(timeSlot.day, slot)}
              className="text-xs h-7 px-2 hover:bg-purple-600 hover:text-white dark:hover:text-white"
            >
              Book
            </Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TimeSlotCard;
