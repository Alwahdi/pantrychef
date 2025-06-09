// components/sections/ExploreGrid.tsx
import { ExploreCard } from "@/components/cards/ExploreCard";

type ExploreItem = {
  title: string;
  image: string;
};

export const ExploreGrid = ({ items }: { items: ExploreItem[] }) => (
  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 p-4">
    {items.map((item) => (
      <ExploreCard key={item.title} {...item} />
    ))}
  </div>
);
