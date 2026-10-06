
import { cn } from "@/lib/utils";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  className?: string;
}

export function FeatureCard({
  title,
  description,
  icon,
  className,
}: FeatureCardProps) {
  return (
    <div
      className={cn(
        "bg-card p-6 rounded-lg shadow-sm border hover:shadow-md transition-all flex flex-col items-center text-center space-y-4",
        className
      )}
    >
      <div className="p-3 bg-primary/10 rounded-full text-primary">{icon}</div>
      <h3 className="text-xl font-semibold">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}
