"use client";

import React from "react";
import {
  Phone,
  Mail,
  MapPin,
  ChevronRight,
} from "lucide-react";
import Image from "next/image";

function Footer() {
  return (
    <footer id="contact" className="relative overflow-hidden bg-slate-950 text-white px-5 md:px-10 pt-20 pb-10">

      <div className="absolute top-0 left-0 h-72 w-72 bg-orange-500/10 blur-3xl rounded-full"></div>
      <div className="absolute bottom-0 right-0 h-72 w-72 bg-blue-500/10 blur-3xl rounded-full"></div>

      <div className="max-w-7xl mx-auto relative z-20">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-14">

          <div>

            <div className="flex items-center gap-4">

                <div className="">
                            <Image
                              src="/logo.png"
                              alt="Space Academy Logo"
                              width={155}
                              height={155}
                              className="object-contain"
                            />
                          </div>

              <div>
                <h2 className="text-2xl font-black">
                  Space Academy
                </h2>

                <p className="text-slate-400 text-sm mt-1">
                  Where Passion Meets Performance
                </p>
              </div>

            </div>

            <p className="mt-7 text-slate-400 leading-relaxed">
              Empowering students with quality education,
              expert mentorship and consistent academic excellence.
            </p>

            <div className="mt-8 flex items-center gap-4">


            </div>

          </div>

          <div>



          </div>

          <div>

            <h3 className="text-xl font-bold">
              Courses
            </h3>

            <div className="mt-7 space-y-4">

              {[
                "1st - 10th",
                "11th & 12th Science",
                "11th & 12th Commerce",
                "JEE Preparation",
                "MHT-CET Preparation",
              ].map((item, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-slate-400 hover:text-orange-400 transition-all duration-300 cursor-pointer"
                >
                  <ChevronRight size={18} />
                  <p>{item}</p>
                </div>
              ))}

            </div>

          </div>

          <div>

            <h3 className="text-xl font-bold">
              Contact Info
            </h3>

            <div className="mt-7 space-y-6">

              <div className="flex gap-4">

                <Phone className="text-orange-500 mt-1" size={20} />

                <div>
                  <p className="text-slate-300 font-medium">
                    Call Us
                  </p>

                  <p className="text-slate-400 mt-1">
                    +91 86938 92209
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <Mail className="text-orange-500 mt-1" size={20} />

                <div>
                  <p className="text-slate-300 font-medium">
                    Email
                  </p>

                  <p className="text-slate-400 mt-1">
                    space01academy@gmail.com
                  </p>
                </div>

              </div>

              <div className="flex gap-4">

                <MapPin className="text-orange-500 mt-1" size={20} />

                <div>
                  <p className="text-slate-300 font-medium">
                    Location
                  </p>

                  <p className="text-slate-400 mt-1 leading-relaxed">
                    Kisan Nagar & Shree Nagar,
                    Thane, Maharashtra
                  </p>
                </div>

              </div>

            </div>

          </div>

        </div>

        <div className="mt-16 border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-5">

          <p className="text-slate-500 text-sm text-center md:text-left">
            © 2026 Space Academy. All rights reserved.
          </p>

          <p className="text-slate-500 text-sm text-center md:text-right">
            Designed with passion for modern education.
          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;