import { Facebook, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-blue-700 text-white">
      <div className="max-w-7xl mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Us Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">About Us</h2>
            <p className="text-gray-200 mb-6">
              Sumon Chowdhury Enterprise is a trusted marine and offshore
              service provider in Bangladesh, specializing in fiber boat
              manufacturing, engine repair, and project-based marine solutions
              since 2016.
            </p>
            <div className="flex gap-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-gray-300 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </div>

          {/* Menus Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-4">Menus</h2>
            <ul className="flex justify-between">
              <div>
                <li>
                  <Link
                    href="/about-us"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/services"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    href="/projects"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Projects
                  </Link>
                </li>
                <li>
                  <Link
                    href="/gallery"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Gallery
                  </Link>
                </li>
              </div>
              <div>
                <li>
                  <Link
                    href="/clients"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Clients
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact-us"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/career"
                    className="text-gray-200 hover:text-white transition-colors"
                  >
                    Career
                  </Link>
                </li>
              </div>
            </ul>
          </div>

          {/* Contact Us Section */}
          <div className="pr-10">
            <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <div className="w-5 h-5 mt-1 text-violet-200">
                  <MapPin size={20} />
                </div>
                <p className="text-gray-200">
                  Panadi, Mijmiji, Shiddhirganj, Narayanganj, Dhaka
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 text-violet-200">
                  <Phone size={20} />
                </div>
                <a
                  href="tel:+8801736299908"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  +8801736299908
                </a>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-5 h-5 text-violet-200">
                  <Mail size={20} />
                </div>
                <a
                  href="mailto:sumonc061@gmail.com"
                  className="text-gray-200 hover:text-white transition-colors"
                >
                  sumonc061@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-16 pt-8 border-t border-gray-400">
          <p className="text-center text-gray-300">
            © {new Date().getFullYear()} Sumon Chowdhury Enterprise. All Rights
            Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
