import { useState } from "react";
import { format } from "date-fns";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import MentorDropdown from "@/components/ui/MentorDropdown";
import { useToast } from "@/hooks/use-toast";
import { mentors } from "@/data/mentorData";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";


const times = [
  "9:00 AM",
  "10:00 AM",
  "11:00 AM",
  "12:00 PM",
  "1:00 PM",
  "2:00 PM",
  "3:00 PM",
  "4:00 PM",
  "5:00 PM",
];

const SchedulePage = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [mentorId, setMentorId] = useState("");
  const [date, setDate] = useState<Date | undefined>(undefined);
  const [time, setTime] = useState("");
  const [topic, setTopic] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const { toast } = useToast();
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!date || !time || !mentorId) {
      toast({
        title: "Incomplete form",
        description: "Please fill in all required fields",
        variant: "destructive",
      });
      return;
    }

    const selectedDay = format(date, "EEEE");
    const selectedMentor = mentors.find((m) => m.id === mentorId);
    const availableSlots = selectedMentor?.availableTimeSlots.find(
      (slot) => slot.day === selectedDay
    );

    if (!availableSlots || !availableSlots.slots.includes(time)) {
      toast({
        title: "Unavailable Slot",
        description: `${selectedMentor?.name} is not available on ${selectedDay} at ${time}`,
        variant: "destructive",
      });
      return;
    }

    setLoading(true);

    setTimeout(() => {
      toast({
        title: "Session scheduled!",
        description: `Your mentoring session with ${
          selectedMentor?.name
        } is confirmed for ${format(date, "PPP")} at ${time}.`,
      });

      setSuccess(true);
      setLoading(false);
    }, 1800);
  };

  return (
    <div className="container max-w-6xl mx-auto px-4 py-12">
      <div className="text-center mb-10 animate-in slide-up">
        <h1 className="text-3xl font-bold mb-3">
          Schedule a Mentorship Session
        </h1>
        <p className="text-muted-foreground max-w-lg mx-auto">
          Book a one-on-one session with one of our expert mentors to accelerate
          your learning journey.
        </p>
      </div>

      <div
        className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-start animate-in slide-up-md"
        style={{ animationDelay: "0.1s" }}
      >
        <Card>
          <CardHeader>
            <CardTitle>How It Works</CardTitle>
            <CardDescription>
              Our mentorship process is designed to help you get the most out of
              each session
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-5">
            {[
              "Select a mentor",
              "Pick a time",
              "Prepare questions",
              "Join your session",
            ].map((step, index) => (
              <div key={index} className="flex gap-3">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
                  {index + 1}
                </div>
                <div>
                  <h3 className="font-medium">{step}</h3>
                  <p className="text-sm text-muted-foreground">
                    {index === 0 &&
                      "Choose from our expert mentors based on your learning needs"}
                    {index === 1 &&
                      "Select a date and time that works best for your schedule"}
                    {index === 2 &&
                      "Add topics you'd like to discuss to make the most of your session"}
                    {index === 3 &&
                      "Receive a confirmation email with details to join your video call"}
                  </p>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Book Your Session</CardTitle>
            <CardDescription>
              Fill out the form below to schedule a 45-minute session
            </CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label htmlFor="name">Your Name</Label>
                  <Input
                    id="name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Your Email</Label>
                  <Input
                    id="email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              {/* <div className="space-y-2">
                <Label htmlFor="mentor">Select a Mentor</Label>
                <Select value={mentorId} onValueChange={setMentorId} required>
                  <SelectTrigger id="mentor">
                    <SelectValue placeholder="Choose your mentor" />
                  </SelectTrigger>
                  <SelectContent>
                    {mentors.map((mentor) => (
                      <SelectItem key={mentor.id} value={mentor.id}>
                        <div className="flex items-center justify-between w-full">
                          <span>
                            {mentor.name} - {mentor.specialization}
                          </span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div> */}
              <MentorDropdown mentorId={mentorId} setMentorId={setMentorId} />

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="space-y-2">
                  <Label>Select Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className="w-full justify-start text-left font-normal"
                      >
                        {date ? (
                          format(date, "PPP")
                        ) : (
                          <span className="text-muted-foreground">
                            Select a date
                          </span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        disabled={(date) =>
                          date < new Date() ||
                          date >
                            new Date(
                              new Date().setMonth(new Date().getMonth() + 2)
                            )
                        }
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="time">Select Time</Label>
                  <Select value={time} onValueChange={setTime} required>
                    <SelectTrigger id="time">
                      <SelectValue placeholder="Choose a time" />
                    </SelectTrigger>
                    <SelectContent>
                      {times.map((timeSlot) => (
                        <SelectItem key={timeSlot} value={timeSlot}>
                          {timeSlot}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="topic">
                  What topics would you like to discuss?
                </Label>
                <textarea
                  id="topic"
                  value={topic}
                  onChange={(e) => setTopic(e.target.value)}
                  placeholder="List specific questions or areas you need help with"
                  className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                />
              </div>
              <Button type="submit" className="w-full" disabled={loading}>
                {loading ? "Processing..." : "Schedule Session"}
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default SchedulePage;

// import { useState } from "react";
// import { format } from "date-fns";
// import { Button } from "@/components/ui/button";
// import { Calendar } from "@/components/ui/calendar";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import { Input } from "@/components/ui/input";
// import { Label } from "@/components/ui/label";
// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
// } from "@/components/ui/popover";
// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { useToast } from "@/hooks/use-toast";
// import { mentors } from "@/data/mentorData";

// const times = [
//   "9:00 AM",
//   "10:00 AM",
//   "11:00 AM",
//   "12:00 PM",
//   "1:00 PM",
//   "2:00 PM",
//   "3:00 PM",
//   "4:00 PM",
//   "5:00 PM",
// ];

// const SchedulePage = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [mentorId, setMentorId] = useState("");
//   const [date, setDate] = useState<Date | undefined>(undefined);
//   const [time, setTime] = useState("");
//   const [topic, setTopic] = useState("");
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);
//   const { toast } = useToast();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();

//     if (!date || !time || !mentorId) {
//       toast({
//         title: "Incomplete form",
//         description: "Please fill in all required fields",
//         variant: "destructive",
//       });
//       return;
//     }

//     const selectedDay = format(date, "EEEE");
//     const selectedMentor = mentors.find((m) => m.id === mentorId);
//     const availableSlots = selectedMentor?.availableTimeSlots.find(
//       (slot) => slot.day === selectedDay
//     );

//     if (!availableSlots || !availableSlots.slots.includes(time)) {
//       toast({
//         title: "Unavailable Slot",
//         description: `${selectedMentor?.name} is not available on ${selectedDay} at ${time}`,
//         variant: "destructive",
//       });
//       return;
//     }

//     setLoading(true);

//     setTimeout(() => {
//       toast({
//         title: "Session scheduled!",
//         description: `Your mentoring session with ${
//           selectedMentor?.name
//         } is confirmed for ${format(date, "PPP")} at ${time}.`,
//       });

//       setSuccess(true);
//       setLoading(false);
//     }, 1800);
//   };

//   return (
//     <div className="container max-w-6xl mx-auto px-4 py-12">
//       <div className="text-center mb-10 animate-in slide-up">
//         <h1 className="text-3xl font-bold mb-3">
//           Schedule a Mentorship Session
//         </h1>
//         <p className="text-muted-foreground max-w-lg mx-auto">
//           Book a one-on-one session with one of our expert mentors to accelerate
//           your learning journey.
//         </p>
//       </div>

//       <div
//         className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-start animate-in slide-up-md"
//         style={{ animationDelay: "0.1s" }}
//       >
//         <Card>
//           <CardHeader>
//             <CardTitle>How It Works</CardTitle>
//             <CardDescription>
//               Our mentorship process is designed to help you get the most out of
//               each session
//             </CardDescription>
//           </CardHeader>
//           <CardContent className="space-y-5">
//             {[
//               "Select a mentor",
//               "Pick a time",
//               "Prepare questions",
//               "Join your session",
//             ].map((step, index) => (
//               <div key={index} className="flex gap-3">
//                 <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
//                   {index + 1}
//                 </div>
//                 <div>
//                   <h3 className="font-medium">{step}</h3>
//                   <p className="text-sm text-muted-foreground">
//                     {index === 0 &&
//                       "Choose from our expert mentors based on your learning needs"}
//                     {index === 1 &&
//                       "Select a date and time that works best for your schedule"}
//                     {index === 2 &&
//                       "Add topics you'd like to discuss to make the most of your session"}
//                     {index === 3 &&
//                       "Receive a confirmation email with details to join your video call"}
//                   </p>
//                 </div>
//               </div>
//             ))}
//           </CardContent>
//         </Card>

//         <Card>
//           <CardHeader>
//             <CardTitle>Book Your Session</CardTitle>
//             <CardDescription>
//               Fill out the form below to schedule a 45-minute session
//             </CardDescription>
//           </CardHeader>
//           <CardContent>
//             <form onSubmit={handleSubmit} className="space-y-6">
//               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label htmlFor="name">Your Name</Label>
//                   <Input
//                     id="name"
//                     value={name}
//                     onChange={(e) => setName(e.target.value)}
//                     placeholder="John Doe"
//                     required
//                   />
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="email">Your Email</Label>
//                   <Input
//                     id="email"
//                     type="email"
//                     value={email}
//                     onChange={(e) => setEmail(e.target.value)}
//                     placeholder="john@example.com"
//                     required
//                   />
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="mentor">Select a Mentor</Label>
//                 <Select value={mentorId} onValueChange={setMentorId} required>
//                   <SelectTrigger id="mentor">
//                     <SelectValue placeholder="Choose your mentor" />
//                   </SelectTrigger>
//                   <SelectContent>
//                     {mentors.map((mentor) => (
//                       <SelectItem key={mentor.id} value={mentor.id}>
//                         {mentor.name} - {mentor.specialization}
//                       </SelectItem>
//                     ))}
//                   </SelectContent>
//                 </Select>
//               </div>
//               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
//                 <div className="space-y-2">
//                   <Label>Select Date</Label>
//                   <Popover>
//                     <PopoverTrigger asChild>
//                       <Button
//                         variant="outline"
//                         className="w-full justify-start text-left font-normal"
//                       >
//                         {date ? (
//                           format(date, "PPP")
//                         ) : (
//                           <span className="text-muted-foreground">
//                             Select a date
//                           </span>
//                         )}
//                       </Button>
//                     </PopoverTrigger>
//                     <PopoverContent className="w-auto p-0">
//                       <Calendar
//                         mode="single"
//                         selected={date}
//                         onSelect={setDate}
//                         initialFocus
//                         disabled={(date) =>
//                           date < new Date() ||
//                           date >
//                             new Date(
//                               new Date().setMonth(new Date().getMonth() + 2)
//                             )
//                         }
//                       />
//                     </PopoverContent>
//                   </Popover>
//                 </div>
//                 <div className="space-y-2">
//                   <Label htmlFor="time">Select Time</Label>
//                   <Select value={time} onValueChange={setTime} required>
//                     <SelectTrigger id="time">
//                       <SelectValue placeholder="Choose a time" />
//                     </SelectTrigger>
//                     <SelectContent>
//                       {times.map((timeSlot) => (
//                         <SelectItem key={timeSlot} value={timeSlot}>
//                           {timeSlot}
//                         </SelectItem>
//                       ))}
//                     </SelectContent>
//                   </Select>
//                 </div>
//               </div>
//               <div className="space-y-2">
//                 <Label htmlFor="topic">
//                   What topics would you like to discuss?
//                 </Label>
//                 <textarea
//                   id="topic"
//                   value={topic}
//                   onChange={(e) => setTopic(e.target.value)}
//                   placeholder="List specific questions or areas you need help with"
//                   className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
//                 />
//               </div>
//               <Button type="submit" className="w-full" disabled={loading}>
//                 {loading ? "Processing..." : "Schedule Session"}
//               </Button>
//             </form>
//           </CardContent>
//         </Card>
//       </div>
//     </div>
//   );
// };

// export default SchedulePage;

// // import { useState } from "react";
// // import { format } from "date-fns";
// // import { Button } from "@/components/ui/button";
// // import { Calendar } from "@/components/ui/calendar";
// // import {
// //   Card,
// //   CardContent,
// //   CardDescription,
// //   CardFooter,
// //   CardHeader,
// //   CardTitle,
// // } from "@/components/ui/card";
// // import { Input } from "@/components/ui/input";
// // import { Label } from "@/components/ui/label";
// // import {
// //   Popover,
// //   PopoverContent,
// //   PopoverTrigger,
// // } from "@/components/ui/popover";
// // import {
// //   Select,
// //   SelectContent,
// //   SelectItem,
// //   SelectTrigger,
// //   SelectValue,
// // } from "@/components/ui/select";
// // import { useToast } from "@/hooks/use-toast";
// // import { mentors } from "@/data/mentorData";

// // const times = [
// //   "09:00 AM",
// //   "10:00 AM",
// //   "11:00 AM",
// //   "12:00 PM",
// //   "01:00 PM",
// //   "02:00 PM",
// //   "03:00 PM",
// //   "04:00 PM",
// //   "05:00 PM",
// // ];

// // const SchedulePage = () => {
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [mentorId, setMentorId] = useState("");
// //   const [date, setDate] = useState<Date | undefined>(undefined);
// //   const [time, setTime] = useState("");
// //   const [topic, setTopic] = useState("");
// //   const [loading, setLoading] = useState(false);
// //   const [success, setSuccess] = useState(false);
// //   const { toast } = useToast();

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();

// //     if (!date || !time || !mentorId) {
// //       toast({
// //         title: "Incomplete form",
// //         description: "Please fill in all required fields",
// //         variant: "destructive",
// //       });
// //       return;
// //     }

// //     setLoading(true);

// //     // Simulate API call to schedule mentorship
// //     setTimeout(() => {
// //       const selectedMentor = mentors.find((m) => m.id === mentorId);

// //       toast({
// //         title: "Session scheduled!",
// //         description: `Your mentoring session with ${
// //           selectedMentor?.name
// //         } is confirmed for ${format(date, "PPP")} at ${time}.`,
// //       });

// //       setSuccess(true);
// //       setLoading(false);
// //     }, 1800);
// //   };

// //   if (success) {
// //     return (
// //       <div className="container max-w-md mx-auto my-16 px-4">
// //         <Card className="border-green-400">
// //           <CardHeader className="text-center">
// //             <div className="mx-auto mb-4 bg-green-100 text-green-800 rounded-full p-3 w-16 h-16 flex items-center justify-center">
// //               <svg
// //                 xmlns="http://www.w3.org/2000/svg"
// //                 width="28"
// //                 height="28"
// //                 viewBox="0 0 24 24"
// //                 fill="none"
// //                 stroke="currentColor"
// //                 strokeWidth="2"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //               >
// //                 <polyline points="20 6 9 17 4 12"></polyline>
// //               </svg>
// //             </div>
// //             <CardTitle className="text-2xl">Booking Confirmed!</CardTitle>
// //             <CardDescription>
// //               Your mentoring session has been scheduled successfully
// //             </CardDescription>
// //           </CardHeader>
// //           <CardContent className="text-center">
// //             <p className="mb-4">
// //               We've sent the confirmation details to your email. You'll receive a
// //               reminder 24 hours before your session.
// //             </p>
// //             <div className="bg-muted p-4 rounded-lg">
// //               <p className="font-medium">
// //                 {name}, your session with{" "}
// //                 {mentors.find((m) => m.id === mentorId)?.name} is confirmed for{" "}
// //                 {date && format(date, "PPP")} at {time}
// //               </p>
// //             </div>
// //           </CardContent>
// //           <CardFooter className="flex justify-center">
// //             <Button onClick={() => window.location.href = "/"}>
// //               Return to Home
// //             </Button>
// //           </CardFooter>
// //         </Card>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="container max-w-6xl mx-auto px-4 py-12">
// //       <div className="text-center mb-10 animate-in slide-up">
// //         <h1 className="text-3xl font-bold mb-3">Schedule a Mentorship Session</h1>
// //         <p className="text-muted-foreground max-w-lg mx-auto">
// //           Book a one-on-one session with one of our expert mentors to accelerate
// //           your learning journey.
// //         </p>
// //       </div>

// //       <div className="grid md:grid-cols-[1fr,1.5fr] gap-8 items-start animate-in slide-up-md" style={{animationDelay: "0.1s"}}>
// //         <Card>
// //           <CardHeader>
// //             <CardTitle>How It Works</CardTitle>
// //             <CardDescription>
// //               Our mentorship process is designed to help you get the most out of
// //               each session
// //             </CardDescription>
// //           </CardHeader>
// //           <CardContent className="space-y-5">
// //             <div className="flex gap-3">
// //               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
// //                 1
// //               </div>
// //               <div>
// //                 <h3 className="font-medium">Select a mentor</h3>
// //                 <p className="text-sm text-muted-foreground">
// //                   Choose from our expert mentors based on your learning needs
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex gap-3">
// //               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
// //                 2
// //               </div>
// //               <div>
// //                 <h3 className="font-medium">Pick a time</h3>
// //                 <p className="text-sm text-muted-foreground">
// //                   Select a date and time that works best for your schedule
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex gap-3">
// //               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
// //                 3
// //               </div>
// //               <div>
// //                 <h3 className="font-medium">Prepare questions</h3>
// //                 <p className="text-sm text-muted-foreground">
// //                   Add topics you'd like to discuss to make the most of your session
// //                 </p>
// //               </div>
// //             </div>

// //             <div className="flex gap-3">
// //               <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary font-medium">
// //                 4
// //               </div>
// //               <div>
// //                 <h3 className="font-medium">Join your session</h3>
// //                 <p className="text-sm text-muted-foreground">
// //                   Receive a confirmation email with details to join your video call
// //                 </p>
// //               </div>
// //             </div>
// //           </CardContent>
// //         </Card>

// //         <Card>
// //           <CardHeader>
// //             <CardTitle>Book Your Session</CardTitle>
// //             <CardDescription>
// //               Fill out the form below to schedule a 45-minute session
// //             </CardDescription>
// //           </CardHeader>
// //           <CardContent>
// //             <form onSubmit={handleSubmit} className="space-y-6">
// //               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
// //                 <div className="space-y-2">
// //                   <Label htmlFor="name">Your Name</Label>
// //                   <Input
// //                     id="name"
// //                     value={name}
// //                     onChange={(e) => setName(e.target.value)}
// //                     placeholder="John Doe"
// //                     required
// //                   />
// //                 </div>

// //                 <div className="space-y-2">
// //                   <Label htmlFor="email">Your Email</Label>
// //                   <Input
// //                     id="email"
// //                     type="email"
// //                     value={email}
// //                     onChange={(e) => setEmail(e.target.value)}
// //                     placeholder="john@example.com"
// //                     required
// //                   />
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="mentor">Select a Mentor</Label>
// //                 <Select value={mentorId} onValueChange={setMentorId} required>
// //                   <SelectTrigger id="mentor">
// //                     <SelectValue placeholder="Choose your mentor" />
// //                   </SelectTrigger>
// //                   <SelectContent>
// //                     {mentors.map((mentor) => (
// //                       <SelectItem key={mentor.id} value={mentor.id}>
// //                         {mentor.name} - {mentor.expertise}
// //                       </SelectItem>
// //                     ))}
// //                   </SelectContent>
// //                 </Select>
// //               </div>

// //               <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
// //                 <div className="space-y-2">
// //                   <Label>Select Date</Label>
// //                   <Popover>
// //                     <PopoverTrigger asChild>
// //                       <Button
// //                         variant="outline"
// //                         className="w-full justify-start text-left font-normal"
// //                       >
// //                         {date ? (
// //                           format(date, "PPP")
// //                         ) : (
// //                           <span className="text-muted-foreground">
// //                             Select a date
// //                           </span>
// //                         )}
// //                       </Button>
// //                     </PopoverTrigger>
// //                     <PopoverContent className="w-auto p-0">
// //                       <Calendar
// //                         mode="single"
// //                         selected={date}
// //                         onSelect={setDate}
// //                         initialFocus
// //                         disabled={(date) =>
// //                           date < new Date() ||
// //                           date > new Date(new Date().setMonth(new Date().getMonth() + 2))
// //                         }
// //                       />
// //                     </PopoverContent>
// //                   </Popover>
// //                 </div>

// //                 <div className="space-y-2">
// //                   <Label htmlFor="time">Select Time</Label>
// //                   <Select value={time} onValueChange={setTime} required>
// //                     <SelectTrigger id="time">
// //                       <SelectValue placeholder="Choose a time" />
// //                     </SelectTrigger>
// //                     <SelectContent>
// //                       {times.map((timeSlot) => (
// //                         <SelectItem key={timeSlot} value={timeSlot}>
// //                           {timeSlot}
// //                         </SelectItem>
// //                       ))}
// //                     </SelectContent>
// //                   </Select>
// //                 </div>
// //               </div>

// //               <div className="space-y-2">
// //                 <Label htmlFor="topic">What topics would you like to discuss?</Label>
// //                 <textarea
// //                   id="topic"
// //                   value={topic}
// //                   onChange={(e) => setTopic(e.target.value)}
// //                   placeholder="List specific questions or areas you need help with"
// //                   className="flex h-24 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
// //                 />
// //               </div>

// //               <Button
// //                 type="submit"
// //                 className="w-full"
// //                 disabled={loading}
// //               >
// //                 {loading ? "Processing..." : "Schedule Session"}
// //               </Button>
// //             </form>
// //           </CardContent>
// //         </Card>
// //       </div>
// //     </div>
// //   );
// // };

// // export default SchedulePage;
