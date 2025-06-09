// components/sections/RecipeSuggestions.tsx
import { RecipeCard } from "@/components/cards/RecipeCard";

type RecipeSuggestion = {
  title: string;
  subtitle: string;
  image: string;
};

export const RecipeSuggestions = ({
  suggestions,
}: {
  suggestions: RecipeSuggestion[];
}) => (
  <div className="overflow-x-auto scroll-smooth scrollbar-thin scrollbar-thumb-[#c7d5cb] scrollbar-track-transparent">
    <div className="flex gap-4 p-2 sm:p-4">
      {suggestions.map((recipe) => (
        <RecipeCard key={recipe.title} {...recipe} />
      ))}
    </div>
  </div>
);
