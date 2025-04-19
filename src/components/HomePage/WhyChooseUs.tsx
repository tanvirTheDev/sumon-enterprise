"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import manufacturing from "../../../public/assets/images/chooseUsIcon/manufacturing.png";
import production from "../../../public/assets/images/chooseUsIcon/production.png";
import saveTheWorld from "../../../public/assets/images/chooseUsIcon/save-the-world.png";
import solution from "../../../public/assets/images/chooseUsIcon/solution.png";
import teamManagement from "../../../public/assets/images/chooseUsIcon/team-management.png";
import training from "../../../public/assets/images/chooseUsIcon/training.png";

const cardData = [
  {
    id: 1,
    icon: manufacturing,
    title: "Marine & Offshore Expertise",
    description:
      "With nearly a decade of experience, we specialize in marine engineering, offshore services, and shipyard maintenance. Our projects span from boat manufacturing to navigation system installations.",
  },
  {
    id: 2,
    icon: production,
    title: "Custom Fabrication & Repairs",
    description:
      "We offer tailored fabrication, fiber works, engine repairs, and outboard motor overhauling to meet each client’s specific needs with precision and efficiency.",
  },
  {
    id: 3,
    icon: saveTheWorld,
    title: "Skilled Workforce",
    description:
      "Our team of 14 experienced supervisors and workers are trained to handle complex tasks on-site and in our production facility with professionalism and dedication.",
  },
  {
    id: 4,
    icon: solution,
    title: "Reliable Project History",
    description:
      "We’ve worked with top companies like Square Pharmaceuticals, Penta Ocean Construction, and the Bangladesh Coast Guard, delivering proven results every time.",
  },
  {
    id: 5,
    icon: teamManagement,
    title: "Quality, Integrity & Service",
    description:
      "Our mission is to deliver high-standard, value-added services efficiently while building long-term trust through honesty and teamwork.",
  },
  {
    id: 6,
    icon: training,
    title: "Complete Marine Solutions",
    description:
      "From boat registration to rental services and supplying spare parts—we’re your one-stop partner for all marine service requirements in Bangladesh.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="bg-[#EFF1F2]">
      <div className="max-w-7xl mx-auto px-4 py-16 ">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-600 mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-600 text-lg">
            Reliable. Skilled. Sumon Chowdhury Enterprise – Your marine and
            offshore partner
          </p>
        </div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {cardData.map((card, index) => (
            <motion.div
              key={card.id}
              className="bg-white p-8 rounded-lg shadow-lg text-center group hover:bg-blue-600 transition-all duration-300"
              initial={{
                opacity: 0,
                y: 50,
                scale: 0.8,
                rotate: -10,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
                scale: 1,
                rotate: 0,
              }}
              viewport={{ once: true }}
              transition={{
                duration: 0.7,
                ease: "easeOut",
                delay: index * 0.1,
              }}
            >
              <div className="flex justify-center mb-6">
                <Image
                  src={card.icon}
                  className="w-12 h-12 text-primary_color group-hover:text-white"
                  alt="img"
                />
              </div>
              <h3 className="text-2xl font-semibold text-blue-600 mb-4 group-hover:text-white">
                {card.title}
              </h3>
              <p className="text-gray-600 group-hover:text-white mb-6">
                {card.description}
              </p>
              <span className="hidden group-hover:inline-block text-white font-medium">
                More about us
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
