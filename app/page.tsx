import { Button } from "@/components/ui/button";
import Link from "next/link";

const BANNER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOGzAd6jkIoLREEnRwnwSYKqAhakUkEOjgsLcu0zyCwrCWyXxNZ_bVhgz0sbhW9NUsSJNsQLNnnD4vm5TeJhujE0x_y76ZmHuaRfel1TMaAhx1uOq3uXyskfQbeIojwzpSk7vdkq8UqRelo3x1TMn3dN6viGUCgJdEDrLusB4xkePs84lh4lPKkM7WIBhpAcdVzXtS8yNvpurMugyYnPK7i2yLpjRmo_mrKoTV8h0U-AZii7EbOE8kHiFQ4AC-q_03aJkWfnvS3e4";

const Page = () => {
  return (
    <main className="min-h-screen bg-white flex flex-col">
      <section className="flex flex-1 items-center justify-center px-4 py-8">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          <div
            className="w-full h-48 sm:h-56 md:h-64 rounded-xl bg-cover bg-center bg-no-repeat mb-6"
            style={{ backgroundImage: `url("${BANNER_IMAGE}")` }}
            role="img"
            aria-label="PantryChef Banner"
          />
          <h1 className="text-[#131612] text-2xl sm:text-3xl font-bold text-center mb-3">
            Welcome to PantryChef
          </h1>
          <p className="text-[#131612] text-base sm:text-lg text-center mb-6">
            Discover recipes based on what you already have, reduce food waste,
            and save money.
          </p>
          <Link href="/onboarding" passHref>
            <Button
              className="rounded-full h-10 px-6 bg-[#8cd279] text-[#131612] text-sm font-bold min-w-[120px] hover:bg-[#7ac06a] transition-all duration-300 ease-in-out transform hover:scale-105 shadow-md hover:shadow-lg"
              asChild
            >
              <span className="inline-block transition-all duration-300 ease-in-out group-hover:translate-x-1">
                Get Started
              </span>
            </Button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Page;
