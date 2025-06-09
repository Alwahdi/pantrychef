import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center px-4 py-6 text-center max-w-2xl mx-auto">
      <div
        className="aspect-video w-full max-w-[360px] rounded-xl bg-cover bg-center"
        style={{
          backgroundImage:
            "url(https://lh3.googleusercontent.com/aida-public/AB6AXuCNIFJf11Zz3ekEqTd2HAggBV1_QAG0Zz0RcSwHD02tkr1fBf7OTitYdUKTUeWK1qDn-StFRXdRgxrfGD6gzQplhxu5Ymyo2f4Iy25oNSgVKajaEtWlJAoPhqiBhocaPvJhwZYs1zqDA3mplPHDOA96Yfbja_3PQuxOiPKvLVOl2ugh1E7afTffaI1LLDadrjhKSrAVx0oLW56nK49z8FYNolrN8kbrafOTM4AuWMScrwhYaK_gM-m1BiC5kGaEBQYJGzXhZQEpqWU)",
        }}
      ></div>

      <h1 className="mt-6 text-lg font-bold leading-tight tracking-[-0.015em]">
        Oops! Page Not Found
      </h1>
      <p className="mt-2 text-sm text-[#131712]">
        We are sorry, but the page you were looking for does not seem to exist.
        Please check the URL or try navigating from our homepage.
      </p>

      <Link
        href="/"
        className="mt-6 rounded-full bg-[#f1f4f1] px-4 py-2 text-sm font-bold tracking-[0.015em] hover:opacity-80 transition"
      >
        Return to Home
      </Link>

      <p className="mt-3 text-sm text-[#6d8566] underline">
        Or explore our recipe search page to find delicious meals based on your
        ingredients.
      </p>
    </div>
  );
}
