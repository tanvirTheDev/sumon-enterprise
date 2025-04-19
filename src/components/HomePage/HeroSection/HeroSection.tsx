"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import heroImage from "../../../../public/assets/images/banner.avif";
import BookMeeting from "./BookMeetingModal";
import BookMeetingInquery from "./SendInquiery";

export default function HeroSection() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenInquery, setIsOpenInquery] = useState(false);
  const phoneNumber = "8801736299908"; // Sumon Chowdhury Enterprise phone

  const openWhatsApp = () => {
    window.open(`https://wa.me/${phoneNumber}`, "_blank");
  };

  return (
    <main className="min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={heroImage}
          alt="Sumon Chowdhury Enterprise"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black opacity-70"></div>
      </div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-4 py-20">
        {/* Company Title */}
        <motion.div
          className="bg-white rounded-full px-8 py-3 mb-8 shadow-lg"
          initial={{ x: "-100vw" }}
          animate={{ x: 0 }}
          transition={{ type: "spring", stiffness: 50, damping: 10 }}
        >
          <h1 className="text-2xl md:text-4xl font-bold text-blue-600">
            Sumon Chowdhury Enterprise
          </h1>
        </motion.div>

        {/* Headline */}
        <motion.h2
          className="text-3xl md:text-5xl font-bold text-white mb-6 max-w-4xl"
          initial={{ x: "100vw" }}
          animate={{ x: 0 }}
          transition={{
            type: "spring",
            stiffness: 50,
            damping: 10,
            delay: 0.2,
          }}
        >
          Marine & Offshore Solutions You Can Trust
        </motion.h2>

        {/* Tagline / Summary */}
        <motion.p
          className="text-white text-lg md:text-xl max-w-3xl mb-12 leading-relaxed"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Since 2016, we’ve been powering the marine and offshore industries of
          Bangladesh with expert fiber boat manufacturing, engine repair, and
          navigation system services.
        </motion.p>

        {/* Links */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mb-5"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link
            href="/about-us"
            className="bg-white hover:bg-gray-100 text-blue-600 px-8 py-3 rounded-md font-semibold text-lg shadow transition-colors"
          >
            About Us →
          </Link>
          <Link
            href="/projects"
            className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-md font-semibold text-lg shadow transition-colors"
          >
            Projects →
          </Link>
        </motion.div>

        {/* Action Buttons */}
        <motion.div
          className="flex flex-col md:flex-row gap-4 justify-center mt-8"
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          {/* <button
            onClick={() => setIsOpenInquery(true)}
            className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-semibold shadow-md transition-all hover:-translate-y-1"
          >
            Send Enquiry
          </button> */}
          <button
            onClick={() => setIsOpen(true)}
            className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-semibold shadow-md transition-all hover:-translate-y-1"
          >
            Book a Meeting
          </button>
          <button
            onClick={openWhatsApp}
            className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-semibold shadow-md transition-all hover:-translate-y-1"
          >
            WhatsApp
          </button>
          <Link
            href="tel:+8801736299908"
            className="bg-white hover:bg-gray-100 text-black px-6 py-3 rounded-md font-semibold shadow-md transition-all hover:-translate-y-1"
          >
            Call Us
          </Link>
        </motion.div>
      </div>

      {/* Modals */}
      <BookMeeting isOpen={isOpen} onClose={() => setIsOpen(false)} />
      <BookMeetingInquery
        isOpen={isOpenInquery}
        onClose={() => setIsOpenInquery(false)}
      />
    </main>
  );
}
