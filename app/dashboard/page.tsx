"use client";

import { useUser } from "@clerk/nextjs";
import { useState } from "react";
import { SearchBar } from "@/components/inputs/SearchBar";
import { IngredientInput } from "@/components/inputs/IngredientInput";
import { RecipeSuggestions } from "@/components/sections/RecipeSuggestions";
import { ExploreGrid } from "@/components/sections/ExploreGrid";
import Navbar from "@/components/Navbar";

// Mock data for now
const recipeSuggestions = [
  {
    title: "Spaghetti22 Carbonara",
    subtitle: "Easy • 30 mins",
    image: "/recipes/carbonara.png",
  },
  {
    title: "Spaghetti2 Carbonara",
    subtitle: "Easy • 30 mins",
    image: "/recipes/carbonara.png",
  },
  {
    title: "Spaghetti1 Carbonara",
    subtitle: "Easy • 30 mins",
    image: "/recipes/carbonara.png",
  },
];

const exploreCards = [
  { title: "Indian", image: "/explore/indian.jpg" },
  { title: "Indisan", image: "/explore/indian.jpg" },
  { title: "Indissan", image: "/explore/indian.jpg" },
];

export default function Page() {
  const { user } = useUser();
  const [search, setSearch] = useState("");
  const [ingredients, setIngredients] = useState("");

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <Navbar />
      <main className="max-w-5xl w-full mx-auto px-4 py-6">
        <h2 className="text-2xl font-bold mb-4">
          Welcome back, {user?.firstName || user?.username || "Chef"}!
        </h2>

        <SearchBar value={search} onChange={setSearch} />

        <h3 className="text-xl font-semibold mt-6 mb-2">Recipe Suggestions</h3>
        <RecipeSuggestions suggestions={recipeSuggestions} />

        <h3 className="text-xl font-semibold mt-6 mb-2">What Can I Cook?</h3>
        <IngredientInput value={ingredients} onChange={setIngredients} />
        <button
          className="mt-3 bg-[#8cd279] text-[#131612] font-bold py-2 px-4 rounded-full hover:bg-[#7fcf6f] transition"
          onClick={() => {
            // Add your logic here
            console.log("Finding recipes with:", ingredients);
          }}
        >
          Find Recipes
        </button>

        <h3 className="text-xl font-semibold mt-6 mb-2">Explore More</h3>
        <ExploreGrid items={exploreCards} />
      </main>
    </div>
  );
}
