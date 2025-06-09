"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const BANNER_IMAGE =
  "https://lh3.googleusercontent.com/aida-public/AB6AXuCOGzAd6jkIoLREEnRwnwSYKqAhakUkEOjgsLcu0zyCwrCWyXxNZ_bVhgz0sbhW9NUsSJNsQLNnnD4vm5TeJhujE0x_y76ZmHuaRfel1TMaAhx1uOq3uXyskfQbeIojwzpSk7vdkq8UqRelo3x1TMn3dN6viGUCgJdEDrLusB4xkePs84lh4lPKkM7WIBhpAcdVzXtS8yNvpurMugyYnPK7i2yLpjRmo_mrKoTV8h0U-AZii7EbOE8kHiFQ4AC-q_03aJkWfnvS3e4";

export default function Page() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-[#f8fff4] to-[#e6f4ea] flex flex-col">
      <section className="flex flex-1 items-center justify-center px-4 py-8 animate-fadeIn">
        <div className="w-full max-w-3xl mx-auto flex flex-col items-center">
          <div
            className="w-full h-48 sm:h-56 md:h-64 rounded-xl bg-cover bg-center bg-no-repeat mb-8 shadow-lg animate-zoomIn"
            style={{ backgroundImage: `url("${BANNER_IMAGE}")` }}
            role="img"
            aria-label="PantryChef Banner"
          />
          <h1 className="text-[#131612] text-3xl sm:text-4xl font-extrabold text-center mb-4 tracking-tight drop-shadow">
            Welcome to <span className="text-[#8cd279]">PantryChef</span>
          </h1>
          <p className="text-[#222] text-lg sm:text-xl text-center mb-8 max-w-2xl">
            Discover recipes based on what you already have, reduce food waste,
            and save money.
          </p>
          <Link href="/onboarding" passHref>
            <Button
              className="rounded-full h-12 px-8 bg-[#8cd279] text-[#131612] text-base font-bold min-w-[140px] shadow-lg hover:bg-[#7ac06a] transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:ring-4 focus:ring-[#8cd279]/40 animate-bounceIn"
              asChild
            >
              <span className="inline-block transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                Get Started
              </span>
            </Button>
          </Link>
        </div>
      </section>
      <style jsx global>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes zoomIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-zoomIn {
          animation: zoomIn 1s 0.2s cubic-bezier(0.4, 0, 0.2, 1) both;
        }
        @keyframes bounceIn {
          0% {
            transform: scale(0.9);
          }
          60% {
            transform: scale(1.05);
          }
          100% {
            transform: scale(1);
          }
        }
        .animate-bounceIn {
          animation: bounceIn 0.7s 0.8s cubic-bezier(0.68, -0.55, 0.27, 1.55)
            both;
        }
      `}</style>
    </main>
  );
}
