"use client";
import MachineryGallery from "@/components/AboutUs/MachineryGallery";
import { motion } from "framer-motion";

const SumonEnterpriseMachinery = () => {
  return (
    <>
      <motion.div
        className="h-[900px] md:h-[500px] flex justify-center items-center flex-col mb-5 text-center px-5 md:px-0"
        style={{
          background: "linear-gradient(to right, #7F00FF 0%, #E100FF 100%)",
        }}
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <p className="font-bold text-[40px] text-white space-y-5 mb-5">
          Our Machinery & Capabilities
        </p>
        <div className="max-w-4xl text-white font-light text-[18px] space-y-3">
          <p className="mb-3">
            At Sumon Chowdhury Enterprise, we are committed to excellence in the marine and engineering sectors. Our workshop in Narayanganj is equipped with essential tools and skilled professionals to carry out high-standard fabrication, engine repair, and fiber boat works.
          </p>
          <p>
            We specialize in fiber boat manufacturing, engine and gearbox overhauling, steering system installations, and stainless steel component fabrication. With experience serving organizations like the Bangladesh Coast Guard and Penta Ocean, our technical capacity and machinery are aligned with industry standards. Explore the tools and equipment that power our operations.
          </p>
        </div>
      </motion.div>

      {/* Animated machinery list */}
      {/* <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MachineryList />
      </motion.div> */}

      {/* Animated machinery gallery */}
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1 }}
      >
        <MachineryGallery />
      </motion.div>
    </>
  );
};

export default SumonEnterpriseMachinery;
