"use client";
import ClientData from "@/components/clients/ClientData";
import { motion } from "framer-motion";

const Clients = () => {
  return (
    <>
      <div className="h-[1000px] md:h-[500px] flex justify-center items-center flex-col mb-5 text-center px-5 md:px-0 gradient-violet">
        <motion.p
          className="font-bold text-[32px] text-white space-y-5 mb-5"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          Our Valued Clients
        </motion.p>

        <motion.div
          className="max-w-4xl text-white font-light text-[18px] space-y-3"
          initial={{ opacity: 0, y: 100 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="mb-3">
            At Sumon Chowdhury Enterprise, our clients are the driving force
            behind everything we do. We are proud to serve a variety of sectors,
            including marine, offshore, gas fields, shipyards, and power plants.
            Their confidence in our services fuels our passion for excellence.
          </p>
          <p>
            Over the years, we’ve had the privilege of working with leading
            organizations like Square Pharmaceuticals, Bangladesh Coast Guard,
            Penta Ocean Construction Co. Ltd., and government transportation
            departments. Our solutions are crafted to meet the unique technical
            and logistical needs of each client.
          </p>
          <p>
            We are grateful for the trust our clients place in us and remain
            committed to building lasting relationships through reliability,
            integrity, and performance-driven service. Your success is our
            mission.
          </p>
        </motion.div>
      </div>
      <ClientData />
    </>
  );
};

export default Clients;
