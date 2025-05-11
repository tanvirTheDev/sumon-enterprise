"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";

const ClientData = () => {
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

  return (
    <section className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
        {images.map((image, index) => (
          <Card
            key={index}
            className="p-6 flex items-center justify-center transition-transform hover:scale-105"
          >
            <div className="relative w-full aspect-[4/3]">
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-contain"
                sizes="(max-width: 768px) 50vw, (max-width: 1200px) 33vw, 16vw"
              />
            </div>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default ClientData;
