// components/inputs/SearchBar.tsx
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const SearchBar = ({ value, onChange }: Props) => (
  <div className="flex items-center w-full rounded-xl bg-[#f2f4f1] h-12">
    <div className="pl-4 text-[#6f816a]">
      <Search size={20} />
    </div>
    <Input
      className="border-none bg-transparent focus:ring-0 focus:outline-none text-[#131612] placeholder:text-[#6f816a] px-4 rounded-l-none"
      placeholder="Search for recipes or ingredients"
      value={value}
      onChange={(e) => onChange(e.target.value)}
    />
  </div>
);
