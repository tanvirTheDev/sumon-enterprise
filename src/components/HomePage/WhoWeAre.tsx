"use client";
import { motion, useInView } from "framer-motion";
import Link from "next/link";
import { useRef } from "react";

export default function WhoWeAre() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.section
      ref={ref}
      className="max-w-5xl mx-auto px-4 py-16 text-center"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, ease: "easeOut" }}
    >
      <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-8">
        Who We Are
      </h2>

      <p className="text-gray-600 text-lg leading-relaxed mb-8 mx-auto">
        Sumon Chowdhury Enterprise is a trusted engineering company based in
        Narayanganj, Bangladesh, established in May 2016. We specialize in
        marine and offshore solutions, serving the gas field, power plant,
        shipyard, anchorage, and more. Our services include fiber boat
        manufacturing and repair, outboard motor overhauling, navigation
        material supply, and on-site manpower support. With a dedicated team of
        professionals and a commitment to quality, we strive to deliver
        value-added services tailored to our client&#39;s needs. Our vision is
        to be recognized as a leading engineering firm driven by integrity,
        teamwork, and innovation.
      </p>

      <Link
        href="/about-us"
        className="inline-flex items-center justify-center bg-blue-600 hover:bg-blue-800 text-white px-6 py-3 rounded-md font-semibold transition-colors duration-200"
      >
        Read More →
      </Link>
    </motion.section>
  );
}
