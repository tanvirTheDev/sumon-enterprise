"use client";
import { motion } from "framer-motion";
import Image from "next/image";

import sumonChowdhury from "../../../public/assets/images/aboutUs/pic2.jpg";
import rahim from "../../../public/assets/images/management/Abdur Rahim Mollah.jpg";
import jakir from "../../../public/assets/images/management/Jakir Baphari.jpg";
import ariyan from "../../../public/assets/images/management/Md Ariyan Hossen.jpg";
import sagor from "../../../public/assets/images/management/Md Sagor Molla.jpg";
import monir from "../../../public/assets/images/management/Monir Molla.jpg";

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

  const teamMembers = [
    { name: "Md Ariyan Hossen", title: "Engineer", image: ariyan },
    { name: "Jakir Baphari", title: "Engineer", image: jakir },
    { name: "Md Sagor Molla", title: "Engineer", image: sagor },
    { name: "Abdur Rahim Mollah", title: "Engineer", image: rahim },
    { name: "Monir Molla", title: "Engineer", image: monir },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-12 space-y-20 relative">
      {/* Section Title */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center"
      >
        <p className="text-gray-100 md:text-[120px] xl:text-[155px] font-bold absolute -top-5 left-5 pointer-events-none opacity-10 z-0">
          Management
        </p>
        <h2 className="text-4xl font-bold z-10 relative">Our Leadership</h2>
        <p className="text-gray-600 mt-2 z-10 relative">
          Meet the team driving excellence at Sumon Chowdhury Enterprise
        </p>
      </motion.div>

      {/* Proprietor Section */}
      <div className="pt-10 z-10 relative">
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
                src={profile.image}
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
                <div className="border-b border-gray-300 w-16"></div>
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

      {/* Team Section */}
      <div className="bg-gray-50 py-10 px-4 rounded-xl shadow-inner">
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-10">
          Meet Our Engineers
        </h3>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-10">
          {teamMembers.map((member, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center space-y-4 p-4 bg-white rounded-lg shadow-md hover:shadow-xl transition duration-300 ease-in-out"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="w-[130px] h-[130px] object-cover rounded-full border-4 border-blue-100"
              />
              <div className="text-center">
                <p className="font-semibold text-lg text-gray-800">
                  {member.name}
                </p>
                <p className="text-sm text-gray-500">{member.title}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
