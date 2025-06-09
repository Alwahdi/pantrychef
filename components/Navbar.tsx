"use client";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { UserButton } from "@clerk/nextjs";
import Image from "next/image";
import { Input } from "./ui/input";
import { Search, Menu, X } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { label: "Home", href: "/dashboard" },
  { label: "Pantry", href: "#" },
  { label: "Meal Planner", href: "#" },
  { label: "Recipes", href: "#" },
  { label: "Community", href: "#" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [search, setSearch] = useState("");
  const pathname = usePathname();

  return (
    <header className="border-b border-solid border-b-[#f2f4f1] px-4 py-3 md:px-10 flex items-center justify-between relative bg-white transition-shadow duration-300 shadow-none hover:shadow-md">
      <div className="flex items-center gap-4">
        <div className="size-4 animate-spin-slow hover:animate-none transition-all">
          <Image
            src="/images/logo.svg"
            alt="PantryChef Logo"
            width={16}
            height={16}
          />
        </div>
        <h2 className="text-[#131612] text-lg font-bold leading-tight tracking-[-0.015em] bg-gradient-to-r from-green-600 via-lime-400 to-green-800 bg-clip-text text-transparent animate-gradient-x">
          PantryChef
        </h2>
      </div>
      {/* Hamburger menu for mobile */}
      <button
        className="md:hidden ml-auto transition-transform duration-200 active:scale-90"
        onClick={() => setMenuOpen((open) => !open)}
        aria-label="Toggle menu"
      >
        {menuOpen ? <X size={28} /> : <Menu size={28} />}
      </button>

      {/* Desktop nav */}
      <nav className="hidden md:flex items-center gap-9 ml-8">
        {navLinks.map((link) => {
          const isActive =
            link.href !== "#" &&
            (pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href)));
          return (
            <Link
              key={link.label}
              className={`relative text-[#131612] text-sm font-medium leading-normal group transition-colors duration-200 px-1 ${
                isActive ? "group-hover:text-green-700 text-green-700" : ""
              }`}
              href={link.href}
            >
              <span
                className={`relative z-10 transition-colors duration-300 ${
                  isActive ? "text-green-700" : "group-hover:text-green-700"
                }`}
              >
                {link.label}
              </span>
              {/* Improved underline hover effect */}
              <span
                className={`pointer-events-none absolute left-0 -bottom-1 h-0.5 w-full bg-gradient-to-r from-green-400 to-lime-400 rounded-full origin-left transition-transform duration-400 ${
                  isActive ? "scale-x-100" : "scale-x-0 group-hover:scale-x-100"
                }`}
                aria-hidden="true"
              />
              {/* Subtle background highlight on hover */}
              <span
                className={`pointer-events-none absolute inset-0 rounded-md bg-green-100 transition-opacity duration-300 ${
                  isActive ? "opacity-60" : "opacity-0 group-hover:opacity-60"
                }`}
                aria-hidden="true"
              />
            </Link>
          );
        })}
      </nav>

      {/* Search and user button */}
      <div className="hidden md:flex flex-1 justify-end gap-8">
        <label className="flex flex-col min-w-40 !h-10 max-w-64">
          <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-inner focus-within:shadow-lg transition-shadow duration-200">
            <div className="text-[#6f816a] flex border-none bg-[#f2f4f1] items-center justify-center pl-4 rounded-l-xl border-r-0">
              <Search size={24} />
            </div>
            <Input
              placeholder="Search"
              className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131612] focus:outline-0 focus:ring-0 border-none bg-[#f2f4f1] focus:border-none h-full placeholder:text-[#6f816a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </label>
        <UserButton />
      </div>

      {/* Mobile menu overlay */}
      <div
        className={`fixed inset-0 z-40 bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
          menuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        } md:hidden`}
        onClick={() => setMenuOpen(false)}
        aria-hidden={!menuOpen}
      />
      <aside
        className={`fixed top-0 left-0 w-[85vw] max-w-xs h-full bg-white shadow-2xl z-50 transform transition-transform duration-400 md:hidden flex flex-col ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{ willChange: "transform" }}
      >
        <div className="flex items-center justify-between px-6 py-4 border-b border-[#f2f4f1] bg-white/90 sticky top-0 z-10">
          <div className="flex items-center gap-2">
            <Image
              src="/images/logo.svg"
              alt="PantryChef Logo"
              width={20}
              height={20}
              className="animate-spin-slow"
            />
            <span className="font-bold text-lg text-green-700">PantryChef</span>
          </div>
          <button
            className="p-2 rounded-full hover:bg-green-100 transition-colors"
            onClick={() => setMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={24} />
          </button>
        </div>
        <nav className="flex flex-col gap-2 p-6 pt-4">
          {navLinks.map((link) => {
            const isActive =
              link.href !== "#" &&
              (pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href)));
            return (
              <Link
                key={link.label}
                className={`relative text-[#131612] text-base font-medium rounded-md px-3 py-2 transition-all duration-200 active:bg-green-100 ${
                  isActive
                    ? "bg-green-50 text-green-700"
                    : "hover:bg-green-50 hover:text-green-700"
                }`}
                href={link.href}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            );
          })}
          <div className="flex items-center gap-2 mt-6">
            <label className="flex flex-col min-w-40 !h-10 max-w-64 flex-1">
              <div className="flex w-full flex-1 items-stretch rounded-xl h-full shadow-inner focus-within:shadow-lg transition-shadow duration-200">
                <div className="text-[#6f816a] flex border-none bg-[#f2f4f1] items-center justify-center pl-4 rounded-l-xl border-r-0">
                  <Search size={24} />
                </div>
                <Input
                  placeholder="Search"
                  className="form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-xl text-[#131612] focus:outline-0 focus:ring-0 border-none bg-[#f2f4f1] focus:border-none h-full placeholder:text-[#6f816a] px-4 rounded-l-none border-l-0 pl-2 text-base font-normal leading-normal"
                  value={search}
                  onChange={(e) => setSearch(e.target.value)}
                />
              </div>
            </label>
            <UserButton />
          </div>
        </nav>
      </aside>
      <style jsx global>{`
        @keyframes gradient-x {
          0%,
          100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease-in-out infinite;
        }
        @keyframes spin-slow {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }
        .animate-spin-slow {
          animation: spin-slow 6s linear infinite;
        }
      `}</style>
    </header>
  );
};

export default Navbar;
