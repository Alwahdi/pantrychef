// components/inputs/IngredientInput.tsx
import { Input } from "@/components/ui/input";

type Props = {
  value: string;
  onChange: (val: string) => void;
};

export const IngredientInput = ({ value, onChange }: Props) => (
  <Input
    className="h-14 rounded-xl text-[#131612] placeholder:text-[#6f816a]"
    placeholder="Enter your ingredients"
    value={value}
    onChange={(e) => onChange(e.target.value)}
  />
);
