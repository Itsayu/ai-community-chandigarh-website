"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { cn } from "@/lib/utils";
import { Logo } from "@/components/icons";

const navLinks = [
  { href: "/events", label: "Events" },
  { href: "/team", label: "Team" },
  // { href: "/resources", label: "Resources" },
  // { href: "/news", label: "News" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/20 bg-white/80 backdrop-blur-xl supports-[backdrop-filter]:bg-white/70">
      <style>{`
        /* Animated Google color gradient for logo text */
        @keyframes gradientFlow {
          0% {
            background-position: 0% 50%;
          }
          25% {
            background-position: 100% 50%;
          }
          50% {
            background-position: 50% 100%;
          }
          75% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 50% 0%;
          }
        }
        
        .google-gradient-text {
          background: linear-gradient(
            135deg,
            #4285F4 0%,
            #EA4335 25%,
            #FBBC05 50%,
            #34A853 75%,
            #4285F4 100%
          );
          background-size: 300% 300%;
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: gradientFlow 8s ease infinite;
        }

        /* Modern nav link with bottom gradient line */
        .nav-link {
          position: relative;
          display: inline-block;
          padding: 0.5rem 0;
          font-weight: 500;
          letter-spacing: -0.01em;
          transition: color 200ms ease;
        }
        
        .nav-link::after {
          content: "";
          position: absolute;
          left: 0;
          bottom: 0;
          height: 2px;
          width: 0;
          background: linear-gradient(90deg, #4285F4, #EA4335, #FBBC05, #34A853);
          transition: width 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .nav-link:hover::after {
          width: 100%;
        }
        
        .nav-link.active::after {
          width: 100%;
        }

        /* Mobile menu link */
        .mobile-link {
          position: relative;
          display: block;
          padding: .85rem .55rem;
          font-weight: 500;
          letter-spacing: -0.01em;
          border-radius: 0.75rem;
          transition: all 200ms ease;
        }
        
        .mobile-link::before {
          content: "";
          position: absolute;
          left: 0;
          top: 50%;
          transform: translateY(-50%);
          height: 0;
          width: 3px;
          background: linear-gradient(180deg, #4285F4, #EA4335, #FBBC05, #34A853);
          border-radius: 0 2px 2px 0;
          transition: height 300ms cubic-bezier(0.4, 0, 0.2, 1);
        }
        
        .mobile-link:hover::before,
        .mobile-link.active::before {
          height: 60%;
        }
        
        .mobile-link:hover {
          background: rgba(66, 133, 244, 0.04);
          transform: translateX(4px);
        }

        @media (prefers-reduced-motion: reduce) {
          .google-gradient-text {
            animation: none !important;
          }
          .nav-link::after, 
          .mobile-link::before,
          .mobile-link { 
            transition: none !important; 
            transform: none !important; 
          }
        }
      `}</style>

      <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-4 md:px-6 lg:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group">
          {/* <Logo className="h-8 w-8 text-primary transition-transform group-hover:scale-110" /> */}
          <span className="sm:inline font-bold text-lg tracking-tight google-gradient-text">
            AI Community Chandigarh
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => {
            const active = pathname?.startsWith(link.href);
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "nav-link",
                  active 
                    ? "active text-gray-900" 
                    : "text-gray-600 hover:text-gray-900"
                )}
                aria-current={active ? "page" : undefined}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>

        {/* Actions */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            className="hidden sm:inline-flex font-medium border border-blue-600 bg-white hover:bg-blue-50 shadow-sm text-gray-600 hover:text-gray-900"
          >
            <Link
              href="https://www.commudle.com/communities/tfug-chandigarh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900"
            >
              Join Us
            </Link>
          </Button>

          <Button 
            asChild 
            className="hidden sm:flex font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 shadow-sm"
          >
            <Link href="/contact">Contact Us</Link>
          </Button>

          {/* Mobile Menu Trigger */}
          <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
            <SheetTrigger asChild>
              <button
                aria-label="Toggle mobile menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg md:hidden focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500"
              >
                <span className="sr-only">Toggle menu</span>
                <Menu
                  className={cn(
                    "absolute h-5 w-5 transition-all duration-200",
                    isMenuOpen ? "scale-0 rotate-90 opacity-0" : "scale-100 rotate-0 opacity-100"
                  )}
                />
                <X
                  className={cn(
                    "absolute h-5 w-5 transition-all duration-200",
                    isMenuOpen ? "scale-100 rotate-0 opacity-100" : "scale-0 -rotate-90 opacity-0"
                  )}
                />
              </button>
            </SheetTrigger>

            {/* Mobile Menu Content */}
            <SheetContent
              side="right"
              className="w-full max-w-xs p-0 border-l-0"
            >
              <div className="flex flex-col h-full bg-white">
                {/* Header */}
                <div className="flex items-center justify-between p-5 border-b border-gray-100">
                  <Link 
                    href="/" 
                    className="flex items-center gap-2"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {/* <Logo className="h-7 w-7 text-primary" /> */}
                    <span className="font-bold text-base google-gradient-text">AI Community Chandigarh</span>
                  </Link>
                  <button
                    onClick={() => setIsMenuOpen(false)}
                    aria-label="Close menu"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg hover:bg-gray-100 transition-colors"
                  >
                    <X className="h-5 w-5" />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col gap-1 p-4">
                  {navLinks.map((link, index) => {
                    const active = pathname?.startsWith(link.href);
                    return (
                      <Link
                        key={link.href}
                        href={link.href}
                        onClick={() => setIsMenuOpen(false)}
                        className={cn(
                          "mobile-link",
                          active 
                            ? "active text-gray-900" 
                            : "text-gray-700 hover:text-gray-900"
                        )}
                        style={{ 
                          animationDelay: `${index * 50}ms`,
                          animation: isMenuOpen ? 'slideIn 300ms ease forwards' : 'none'
                        }}
                        aria-current={active ? "page" : undefined}
                      >
                        {link.label}
                      </Link>
                    );
                  })}
                </nav>

                {/* Contact & Join Buttons */}
                <div className="p-4 border-t border-gray-100">
                  <Button
                    asChild
                    className="w-full mb-3 font-medium border border-blue-600 bg-white hover:bg-blue-50 text-gray-600 hover:text-gray-900"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link
                      href="https://www.commudle.com/communities/tfug-chandigarh"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-600 hover:text-gray-900"
                    >
                      Join Us
                    </Link>
                  </Button>

                  <Button 
                    asChild 
                    className="w-full font-medium bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600" 
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <Link href="/contact">Contact Us</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>

      <style>{`
        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateX(-10px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
      `}</style>
    </header>
  );
}
