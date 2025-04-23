"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";
import { CardContent } from "../ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/carousel";

const AboutCarousel = () => {
  const images = [
    {
      src: "/assets/images/aboutUs/image1.jpg",
      alt: "Higg Index",
    },
    {
      src: "/assets/images/aboutUs/image2.jpg",
      alt: "Social & Labor Convergence",
    },
    {
      src: "/assets/images/aboutUs/image3.jpg",
      alt: "Sedex",
    },
    {
      src: "/assets/images/aboutUs/image4.jpg",
      alt: "Amfori BSCI",
    },
    {
      src: "/assets/images/aboutUs/image5.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/aboutUs/image6.jpg",
      alt: "GOTS",
    },
  ];

  const [carouselApi, setCarouselApi] = useState<CarouselApi | null>(null);

  useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [carouselApi]);

  return (
    <div className="max-w-7xl mx-auto grid grid-cols-1 xl:grid-cols-2 my-10 py-10">
      {/* Content Section */}
      <motion.div
        className="space-y-5"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <p className="text-4xl text-blue-600 mb-5 mx-3 font-bold">
          Sumon Chowdhury Enterprise
        </p>
        <div className="text-[#34343c] space-y-3 text-[20px] font-light mx-3">
          <p>
            Sumon Chowdhury Enterprise was established in May 2016 in
            Narayanganj, Bangladesh. We specialize in marine and offshore
            engineering services, including fiber boat manufacturing, outboard
            motor overhauling, and custom repair solutions.
          </p>
          <p>
            With hands-on expertise in the gas field, power plant, shipyard, and
            anchorage projects, we provide comprehensive services from steering
            system installation to spare parts supply for engines and navigation
            systems.
          </p>
          <p>
            Our facility is operated by a dedicated 14-member team consisting of
            skilled workers and supervisors. We have served renowned clients
            such as Bangladesh Coast Guard, Square Pharmaceuticals, Penta Ocean
            Construction, and more. Our mission is to deliver high-value
            engineering solutions with reliability, honesty, and technical
            excellence.
          </p>
        </div>
      </motion.div>

      {/* Carousel Section */}
      <motion.div
        className="w-full relative flex items-center justify-center"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
      >
        <Carousel
          className="w-full flex items-center"
          opts={{
            align: "center",
          }}
          setApi={setCarouselApi}
        >
          <CarouselContent className="flex items-center">
            {images.map((item, index) => (
              <CarouselItem
                key={index}
                className="flex items-center justify-center"
              >
                <div className="p-1">
                  <CardContent className="flex items-center justify-center p-6">
                    <Image
                      src={item.src}
                      alt={item.alt}
                      layout="responsive"
                      width={1920}
                      height={1080}
                      className="object-cover w-full h-full"
                    />
                  </CardContent>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="absolute left-10 px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200" />
          <CarouselNext className="absolute right-10 px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200" />
        </Carousel>
      </motion.div>
    </div>
  );
};

export default AboutCarousel;
