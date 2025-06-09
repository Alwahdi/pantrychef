// app/not-found.tsx
import NotFound from "@/components/NotFound";
import Navbar from "@/components/Navbar";

export default function NotFoundPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 flex justify-center py-10">
        <NotFound />
      </main>
    </div>
  );
}
