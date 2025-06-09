"use server";

import { auth, clerkClient } from "@clerk/nextjs/server";

export const completeOnboarding = async (formData: FormData) => {
  const { userId } = await auth();

  if (!userId) {
    return { error: "No Logged In User" };
  }

  try {
    const dietaryPreference = formData.get("dietaryPreference")?.toString() || "";
    const allergy = formData.get("allergy")?.toString() || "";
    const cuisine = formData.get("cuisine")?.toString() || "";

    const client = await clerkClient();
    await client.users.updateUser(userId, {
      publicMetadata: {
        onboardingComplete: true,
        dietaryPreference,
        allergy,
        cuisine,
      },
    });
    return { message: "Onboarding complete" };
  } catch (err) {
    console.error("Error updating user metadata:", err);
    return { error: err instanceof Error ? err.message : "There was an error updating the user metadata." };
  }
};
