"use client";

import Link from "next/link";
import React from "react";
// Removed lucide-react import as we are now using external images

const socials = [
  {
    title: "Subscribe",
    desc: "Subscribe to join a community of creative developers and learn the latest in Google technology.",
    // UPDATED YOUTUBE LINK
    href: "https://www.youtube.com/@MLChandigarh", 
    // Updated to use the external YouTube logo URL
    icon: <img src="https://developers.google.com/static/homepage-assets/images/yt.svg" alt="YouTube Logo" className="w-8 h-8" />,
  },
  {
    title: "Follow",
    desc: "Follow and discover developer resources, community events, and inspirational stories.",
    // UPDATED INSTAGRAM LINK
    href: "https://www.instagram.com/mlchandigarh", 
    // Updated to use the external Instagram logo URL
    icon: <img src="https://developers.google.com/static/homepage-assets/images/ig.webp" alt="Instagram Logo" className="w-8 h-8" />,
  },
  {
    title: "Connect",
    desc: "Join a community of creative developers and learn how to use the latest in technology.",
    // UPDATED LINKEDIN LINK
    href: "https://in.linkedin.com/company/ml-chandigarh", 
    // Updated to use the external LinkedIn logo URL
    icon: <img src="https://developers.google.com/static/homepage-assets/images/li_72.png" alt="LinkedIn Logo" className="w-8 h-8" />,
  },
  {
    title: "Tweet",
    desc: "Join the conversation to discover the latest developer tools, resources, events, and announcements.",
    // UPDATED X (TWITTER) LINK
    href: "https://x.com/TFUGChandigarh", 
    // Updated to use the external X logo URL
    icon: <img src="https://developers.google.com/static/homepage-assets/images/x.svg" alt="X Logo" className="w-8 h-8" />,
  },
];

export default function AISocialSection() {
  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1 className="font-bold bg-gradient-to-r from-[#4285F4] via-[#DB4437] to-[#F4B400] bg-clip-text text-transparent
           text-4xl md:text-5xl text-center">
          AI Community Chandigarh
        </h1>
        <div className="mt-4 flex items-center justify-center">
          <span className="inline-block h-1 w-24 rounded-full bg-gradient-to-r from-red-400 to-primary/80 animate-[pulse_2.5s_infinite] opacity-90"></span>
        </div>

        <p className="mt-4 text-muted-foreground text-lg">
          Connect with AI/ML enthusiasts, developers & researchers.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-14">
          {socials.map((s, i) => (
            <div
              key={i}
              className="border border-border rounded-2xl p-6 bg-[#ededed85] text-left hover:shadow-md transition-shadow"
            >
              {/* s.icon is now the <img> tag */}
              <div className="mb-4">{s.icon}</div>
              <h3 className="text-xl font-semibold">{s.title}</h3>
              <p className="text-sm mt-3 text-muted-foreground">{s.desc}</p>
              <Link
                href={s.href}
                target="_blank"
                className="inline-block mt-6 text-sm font-medium underline underline-offset-4 hover:no-underline"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}