export interface TimeSlot {
  day: string;
  slots: string[];
}

export interface Mentor {
  id: string;
  name: string;
  title: string;
  specialization: string;
  avatar: string;
  bio: string;
  experience: number;
  rating: number;
  availableTimeSlots: TimeSlot[];
}
