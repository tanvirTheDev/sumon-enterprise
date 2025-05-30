"use client";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";

import Image from "next/image";
import React from "react";

export function OurClients() {
  // Array of images
  const images = [
    {
      src: "/assets/images/ourClients/1.jpg",
      alt: "Higg Index",
    },
    {
      src: "/assets/images/ourClients/2.jpg",
      alt: "Social & Labor Convergence",
    },
    {
      src: "/assets/images/ourClients/3.jpg",
      alt: "Sedex",
    },
    {
      src: "/assets/images/ourClients/4.jpg",
      alt: "Amfori BSCI",
    },
    {
      src: "/assets/images/ourClients/5.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/6.jpg",
      alt: "GOTS",
    },
    {
      src: "/assets/images/ourClients/7.jpg",
      alt: "GOTS",
    },
   
  ];

  const [carouselApi, setCarouselApi] = React.useState<CarouselApi | null>(
    null
  );

  // Autoplay functionality
  React.useEffect(() => {
    if (!carouselApi) return;

    const interval = setInterval(() => {
      if (carouselApi.canScrollNext()) {
        carouselApi.scrollNext();
      } else {
        carouselApi.scrollTo(0); // Go back to the start
      }
    }, 3000); // Autoplay interval in milliseconds (3 seconds)

    return () => {
      clearInterval(interval); // Cleanup interval on unmount
    };
  }, [carouselApi]);

  return (
    <div className="bg-[#F2F3F5] py-16 h-[400px]">
      <h2 className="text-center text-3xl font-semibold text-violet-600 mb-8">
        Our Clients
      </h2>
      <Carousel
        opts={{
          align: "start",
        }}
        setApi={setCarouselApi} // Set the API instance here
        className="w-full max-w-5xl mx-auto relative"
      >
        <CarouselContent className="flex gap-4 mb-5">
          {images.map((image, index) => (
            <CarouselItem
              key={index}
              className="basis-1/2 md:basis-1/3 xl:basis-1/5"
            >
              <div className="p-2">
                <Card className="shadow-lg">
                  <CardContent className="flex items-center justify-center p-4">
                    {/* Display the image */}
                    <Image
                      src={image.src}
                      alt={image.alt}
                      width={150}
                      height={150}
                      className="object-contain size-20"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>

        {/* Bottom navigation buttons */}
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-8 flex">
          <CarouselPrevious className="px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200"></CarouselPrevious>
          <CarouselNext className="px-4 py-2 bg-white rounded shadow-md hover:bg-gray-200"></CarouselNext>
        </div>
      </Carousel>
    </div>
  );
}
