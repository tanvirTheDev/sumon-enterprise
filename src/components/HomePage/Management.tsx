"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import sumonChowdhury from "../../../public/assets/images/aboutUs/pic2.jpg"; // Replace with the actual path to the image

export default function Management() {
  const profiles = [
    {
      name: "SUMON CHOWDHURY",
      title: "Proprietor, Sumon Chowdhury Enterprise",
      image: sumonChowdhury,
      description: [
        "At Sumon Chowdhury Enterprise, we are committed to delivering engineering services with precision, professionalism, and passion. Since our founding in 2016, we've built our reputation by supporting the marine, gas, and offshore industries across Bangladesh.",
        "Our focus has always been on providing dependable, high-quality services—from fiber boat manufacturing and outboard motor repairs to customized fabrication and navigation system support. We’re proud to serve prominent clients like Penta Ocean Construction, Square Pharmaceuticals, and Bangladesh Coast Guard.",
        "We believe in teamwork, accountability, and a deep commitment to client satisfaction. As we grow, we remain focused on innovation, sustainability, and strengthening long-term partnerships with every project we take on.",
      ],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-16 relative">
      <div>
        <p className="md:text-[120px] xl:text-[155px] text-gray-100 absolute top-0 left-10 font-bold">
          Management
        </p>
      </div>
      <div className="pt-10">
        {profiles.map((profile, index) => (
          <div
            key={index}
            className="grid md:grid-cols-[300px,1fr] gap-8 items-start space-y-10"
          >
            <motion.div
              className="relative top-7"
              initial={{ opacity: 0, x: -100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
              }}
            >
              <Image
                src={profile.image || "/placeholder.svg"}
                alt={profile.name}
                className="w-full rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: 0.2,
              }}
            >
              <h2 className="text-4xl font-bold text-blue-600">
                {profile.name}
              </h2>
              <h3 className="text-xl text-gray-700">{profile.title}</h3>
              <div className="py-3">
                <div className="border border-b-1 border-gray-300 w-16"></div>
              </div>
              <div className="space-y-4 text-gray-600">
                {profile.description.map((paragraph, idx) => (
                  <p key={idx} className="leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
