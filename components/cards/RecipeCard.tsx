// components/cards/RecipeCard.tsx
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  subtitle: string;
  image: string;
};

export const RecipeCard = ({ title, subtitle, image }: Props) => (
  <Card className="min-w-[220px] sm:min-w-60 rounded-xl overflow-hidden shadow-sm border border-[#e6eae4] bg-white">
    <div
      className="aspect-video bg-cover bg-center w-full"
      style={{ backgroundImage: `url("${image}")` }}
    />
    <CardContent className="pt-3 pb-4 px-4">
      <p className="text-[#131612] text-base font-medium leading-snug">
        {title}
      </p>
      <p className="text-[#6f816a] text-sm font-normal leading-snug">
        {subtitle}
      </p>
    </CardContent>
  </Card>
);
