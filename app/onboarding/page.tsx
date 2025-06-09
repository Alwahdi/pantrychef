"use client";

import * as React from "react";
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { completeOnboarding } from "./_actions";
import { motion } from "framer-motion";

const dietaryOptions = [
  "Vegetarian",
  "Vegan",
  "Pescatarian",
  "Low-Carb",
  "Keto",
  "Paleo",
  "None",
];

const allergyOptions = [
  "Nuts",
  "Dairy",
  "Gluten",
  "Shellfish",
  "Soy",
  "Eggs",
  "None",
];

const cuisineOptions = [
  "Italian",
  "Mexican",
  "Asian",
  "Mediterranean",
  "Indian",
  "American",
  "French",
  "Other",
];

export default function OnboardingComponent() {
  const [error, setError] = React.useState("");
  const { user } = useUser();
  const router = useRouter();

  // Track selected values for styling
  const [selectedDiet, setSelectedDiet] = React.useState<string>("");
  const [selectedAllergy, setSelectedAllergy] = React.useState<string>("");
  const [selectedCuisine, setSelectedCuisine] = React.useState<string>("");

  const handleSubmit = async (formData: FormData) => {
    const res = await completeOnboarding(formData);
    if (res?.message) {
      await user?.reload();
      router.push("/");
    }
    if (res?.error) {
      setError(res?.error);
    }
  };

  // Animation variants
  const itemVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: { opacity: 1, scale: 1 },
  };

  return (
    <div
      className="relative flex min-h-screen flex-col bg-white overflow-x-hidden"
      style={{ fontFamily: 'Manrope, "Noto Sans", sans-serif' }}
    >
      <div className="flex flex-1 justify-center py-5 px-4">
        <div className="flex flex-col w-full max-w-[512px] py-5">
          <h2 className="text-[#131712] tracking-light text-[28px] font-bold leading-tight px-4 text-center pb-3 pt-5">
            Tell us about your preferences
          </h2>
          <p className="text-[#131712] text-base font-normal leading-normal pb-3 pt-1 px-4 text-center">
            This will help us suggest recipes that you'll love.
          </p>
          <form action={handleSubmit}>
            {/* Dietary Preferences */}
            <h3 className="text-[#131712] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Dietary Preferences
            </h3>
            <motion.div
              className="flex flex-wrap gap-3 p-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {dietaryOptions.map((option) => (
                <motion.label
                  key={option}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dee4dc] px-4 h-11 relative cursor-pointer transition-all duration-200
                    ${
                      selectedDiet === option
                        ? "bg-[#50d22c] text-[#131712] border-[#50d22c]"
                        : "text-[#131712] bg-white"
                    }
                  `}
                >
                  {option}
                  <input
                    type="radio"
                    className="invisible absolute"
                    name="dietaryPreference"
                    value={option}
                    required
                    checked={selectedDiet === option}
                    onChange={() => setSelectedDiet(option)}
                  />
                </motion.label>
              ))}
            </motion.div>
            {/* Allergies */}
            <h3 className="text-[#131712] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Allergies
            </h3>
            <motion.div
              className="flex flex-wrap gap-3 p-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {allergyOptions.map((option) => (
                <motion.label
                  key={option}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dee4dc] px-4 h-11 relative cursor-pointer transition-all duration-200
                    ${
                      selectedAllergy === option
                        ? "bg-[#50d22c] text-[#131712] border-[#50d22c]"
                        : "text-[#131712] bg-white"
                    }
                  `}
                >
                  {option}
                  <input
                    type="radio"
                    className="invisible absolute"
                    name="allergy"
                    value={option}
                    required
                    checked={selectedAllergy === option}
                    onChange={() => setSelectedAllergy(option)}
                  />
                </motion.label>
              ))}
            </motion.div>
            {/* Favorite Cuisines */}
            <h3 className="text-[#131712] text-lg font-bold leading-tight tracking-[-0.015em] px-4 pb-2 pt-4">
              Favorite Cuisines
            </h3>
            <motion.div
              className="flex flex-wrap gap-3 p-4"
              initial="hidden"
              animate="visible"
              variants={{
                visible: { transition: { staggerChildren: 0.05 } },
              }}
            >
              {cuisineOptions.map((option) => (
                <motion.label
                  key={option}
                  variants={itemVariants}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.98 }}
                  className={`text-sm font-medium leading-normal flex items-center justify-center rounded-xl border border-[#dee4dc] px-4 h-11 relative cursor-pointer transition-all duration-200
                    ${
                      selectedCuisine === option
                        ? "bg-[#50d22c] text-[#131712] border-[#50d22c]"
                        : "text-[#131712] bg-white"
                    }
                  `}
                >
                  {option}
                  <input
                    type="radio"
                    className="invisible absolute"
                    name="cuisine"
                    value={option}
                    required
                    checked={selectedCuisine === option}
                    onChange={() => setSelectedCuisine(option)}
                  />
                </motion.label>
              ))}
            </motion.div>
            {error && (
              <p className="text-red-600 text-center py-2">Error: {error}</p>
            )}
            <div className="flex px-4 py-3 justify-center">
              <button
                type="submit"
                className="flex min-w-[84px] max-w-[480px] cursor-pointer items-center justify-center overflow-hidden rounded-full h-10 px-4 bg-[#50d22c] text-[#131712] text-sm font-bold leading-normal tracking-[0.015em]"
              >
                <span className="truncate">Save Preferences</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
