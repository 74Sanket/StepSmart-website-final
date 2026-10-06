import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { ArrowRight, ChevronDown } from "lucide-react";
import { mentors } from "@/data/mentorData";
import { useNavigate } from "react-router-dom";

const MentorDropdown = ({ mentorId, setMentorId }: any) => {
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();

  const selectedMentor = mentors.find((m) => m.id === mentorId);

  return (
    <div className="space-y-2">
      <label className="text-sm font-medium">Select a Mentor</label>
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button variant="outline" className="w-full justify-between">
            {selectedMentor
              ? `${selectedMentor.name} - ${selectedMentor.specialization}`
              : "Choose your mentor"}
            <ChevronDown className="ml-2 h-4 w-4" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-full p-0 shadow-md">
          <ul className="divide-y text-sm">
            {mentors.map((mentor) => (
              <li
                key={mentor.id}
                className="flex justify-between items-center p-3 hover:bg-muted transition-all"
              >
                <button
                  className="text-left flex-1"
                  onClick={() => {
                    setMentorId(mentor.id);
                    setOpen(false);
                  }}
                >
                  {mentor.name} - {mentor.specialization}
                </button>
                <ArrowRight
                  className="ml-2 w-4 h-4 text-muted-foreground hover:text-primary cursor-pointer"
                  onClick={(e) => {
                    e.stopPropagation();
                    navigate(`/mentors/${mentor.id}`);
                  }}
                />
              </li>
            ))}
          </ul>
        </PopoverContent>
      </Popover>
    </div>
  );
};

export default MentorDropdown;
