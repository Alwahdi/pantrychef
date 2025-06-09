// components/cards/ExploreCard.tsx
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  title: string;
  image: string;
};

export const ExploreCard = ({ title, image }: Props) => (
  <Card className="overflow-hidden rounded-xl aspect-square">
    <div
      className="aspect-square bg-cover bg-center"
      style={{ backgroundImage: `url("${image}")` }}
    />
    <CardContent className="pt-2">
      <p className="text-base font-medium text-[#131612]">{title}</p>
    </CardContent>
  </Card>
);
