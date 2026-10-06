// components/ui/SearchInput.tsx
import { Input } from "@/components/ui/input";

interface Props {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const SearchInput = ({ value, onChange }: Props) => (
  <div className="relative flex-1">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="absolute top-0 bottom-0 w-5 h-5 my-auto text-muted-foreground left-3"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
        clipRule="evenodd"
      />
    </svg>
    <Input
      type="text"
      placeholder="Search articles..."
      value={value}
      onChange={onChange}
      className="pl-10"
    />
  </div>
);

export default SearchInput;
