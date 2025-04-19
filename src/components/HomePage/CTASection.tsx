import Link from "next/link";

export default function CTASection() {
  return (
    <div className="relative min-h-[400px] flex items-center justify-center px-4 py-16">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: "url('/assets/images/cta/fiber-boat-repair.jpg')", // Suggested image path
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center">
        <p
          className="text-white text-2xl sm:text-3xl md:text-[2rem] font-bold mb-8"
          style={{ lineHeight: "50px" }}
        >
          Need marine solutions, fiber boat services, or engine overhauls?
          <br />
          Get in touch with Sumon Chowdhury Enterprise today!
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact-us"
            className="px-8 py-3 bg-[#1e3a8a] text-white font-medium rounded hover:bg-blue-900 transition-colors delay-200"
          >
            Contact Us
          </Link>
          <a
            href="tel:+8801736299908"
            className="px-8 py-3 bg-blue-600 text-white font-medium rounded hover:bg-blue-800 transition-colors delay-200"
          >
            Call +8801736299908
          </a>
        </div>
      </div>
    </div>
  );
}
