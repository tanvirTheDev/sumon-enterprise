"use client";
import { CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";
import logo2 from "../../../../public/assets/images/logo2.jpg";
const Page = () => {
  const images = [
    {
      src: "/assets/images/aboutUs/image1.jpg",
      alt: "Fiber Boat",
    },
    {
      src: "/assets/images/aboutUs/image2.jpg",
      alt: "Engine Overhaul",
    },
    {
      src: "/assets/images/aboutUs/image3.jpg",
      alt: "Navigation Equipment",
    },
    {
      src: "/assets/images/aboutUs/image4.jpg",
      alt: "Marine Works",
    },
    {
      src: "/assets/images/aboutUs/image5.jpg",
      alt: "Workshop View",
    },
  ];

  const productionData = [
    { label: "Year of Establishment", value: "2016" },
    {
      label: "Workshop Location",
      value: "Panadi, Mijmiji, Shiddhirganj, Narayanganj",
    },
    { label: "Number of Employees", value: "14 (Workers + Supervisor)" },
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
    <div className="">
      <div className="h-[200px] flex justify-center items-center flex-col mb-5 text-center gradient-violet">
        <p className="font-bold text-5xl text-white space-y-5 mb-5">
          Company Profile
        </p>
      </div>

      {/* Grid content - 1 */}
      <div className="bg-[#F9F9F9]">
        <div className="grid grid-cols-1 place-items-center md:grid-cols-2 items-center my-20 max-w-7xl mx-auto">
          {/* Animated Logo */}
          <motion.div
            className="mb-5 md:mb-0"
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <Image src={logo2} alt="logo" width={250} height={250} />
          </motion.div>

          <div className="space-y-3 px-3 md:px-0">
            <p className="text-4xl text-primary_color font-bold">
              Business Information
            </p>
            <p className="font-light text-[18px]">
              Established in May 2016, Sumon Chowdhury Enterprise is a marine
              and offshore service provider based in Narayanganj, Bangladesh. We
              offer services in fiber boat production, engine repairs, outboard
              motor overhauling, and navigation equipment supply.
            </p>
            <p className="font-light text-[18px]">
              Over the years, we’ve proudly served top-tier clients including
              Square Pharmaceuticals, Bangladesh Coast Guard, and Penta Ocean
              Construction. Our company is built on values of integrity,
              accountability, and teamwork.
            </p>
            <p className="font-bold text-lg">Our Key Services Include:</p>
            <p className="text-sm font-semibold text-gray-700">
              Fiber Boat Building & Maintenance, Engine Overhauling, Marine Part
              Supply, and Skilled Labor for Onsite Works.
            </p>
          </div>
        </div>
      </div>

      {/* Grid content - 2 */}
      <div className="grid grid-cols-1 md:grid-cols-2 h-full gap-5">
        {/* Carousel */}
        <div className="w-full relative">
          <Carousel
            className="w-full"
            opts={{
              align: "start",
            }}
            setApi={setCarouselApi}
          >
            <CarouselContent>
              {images.map((item, index) => (
                <CarouselItem key={index}>
                  <div className="p-1">
                    <CardContent className="flex items-center justify-center p-6">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        width={600}
                        height={500}
                        className="object-center h-[500px]"
                      />
                    </CardContent>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
          </Carousel>
        </div>

        {/* Production Unit Info */}
        <div className="mt-10">
          <p className="text-4xl text-primary_color mb-5 text-center md:text-left">
            Core Information
          </p>
          <ul className="space-y-3 text-lg pl-3 md:pl-0">
            {productionData.map((item, index) => (
              <li key={index} className="flex items-center">
                <span className="text-green-600 mr-2">
                  <ChevronRight />
                </span>
                <div className="flex font-light text-[18px]">
                  <p className="mr-1">{item.label}:</p> <p>{item.value}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Page;
