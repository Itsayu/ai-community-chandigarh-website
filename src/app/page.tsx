"use client";

import { Button } from "@/components/ui/button";
import { members } from "@/lib/data";
import { ArrowRight, Calendar, Users, Clock, MapPin } from "lucide-react";
import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { MemberCard } from "@/components/MemberCard";
import { useEffect, useRef, useState } from "react";
import type { Member } from "@/lib/types";
import { MemberModal } from "@/components/MemberModal";
import AILogo from "@/assets/ai-community-logo.svg";
import SocialFollowSection from "@/components/SocialFollowSection";
import { formatEventData } from "@/lib/event-utils";

interface Event {
  id: number;
  title: string;
  date: string;
  type: string;
  description: string;
  location: string;
  link: string;
  image?: string | null;
  raw?: any;
}

/** Try to extract image URL from HTML description */
function extractImageFromHtml(html: string | undefined | null): string | null {
  if (!html) return null;
  const m = html.match(/<img[^>]+src=(?:'|")([^'">]+)(?:'|")[^>]*>/i);
  return m ? m[1] : null;
}

export default function Home() {
  const COMMUNITY_ID = 316;
  const team = members.slice(0, 4);
  const [selectedMember, setSelectedMember] = useState<Member | null>(null);
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [eventsLoading, setEventsLoading] = useState(true);
  const [eventsError, setEventsError] = useState<string | null>(null);

  const chandigarhRef = useRef<HTMLSpanElement | null>(null);

  // Fetch events from API
  useEffect(() => {
    let mounted = true;
    async function fetchEvents() {
      setEventsLoading(true);
      setEventsError(null);

      const futureUrl = `https://json.commudle.com/api/v2/events/public/index_by_community?when=future&community_id=${COMMUNITY_ID}`;

      try {
        const response = await fetch(futureUrl);
        const result = await response.json();

        if (!mounted) return;

        if (result?.status !== 200) throw new Error("Failed to fetch upcoming events.");

        const formattedUpcoming = (result.data?.values || []).map((r: any) => {
          const formatted = formatEventData(r);
          const img =
            r?.header_image?.i500 ||
            r?.header_image?.i350 ||
            r?.header_image?.i320 ||
            r?.header_image?.url ||
            r?.header_image_path ||
            r?.image_url ||
            r?.banner ||
            extractImageFromHtml(r?.description) ||
            null;
          return { ...formatted, image: img, raw: r };
        });

        // Take only first 3 events for home page
        setUpcomingEvents(formattedUpcoming.slice(0, 3));
      } catch (e) {
        console.error("Event Fetch Error:", e);
        setEventsError("Failed to load events data.");
      } finally {
        if (mounted) setEventsLoading(false);
      }
    }

    fetchEvents();
    return () => {
      mounted = false;
    };
  }, []);

  // Scramble effect for Chandigarh text
  useEffect(() => {
    const el = chandigarhRef.current;
    if (!el) return;

    const finalText = "Chandigarh";
    const charset =
      "!<>-_\\/[]{}—=+*^?#abcdefghijkmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    const duration = 3500;
    const frameRate = 30;
    const totalFrames = Math.round((duration / 1000) * frameRate);
    let frame = 0;

    const revealFrames: number[] = Array.from({ length: finalText.length }).map(
      (_, i) => Math.floor((i / finalText.length) * totalFrames * 0.4)
    );
    const settleFrames: number[] = Array.from({ length: finalText.length }).map(
      (_, i) => Math.floor((i / finalText.length) * totalFrames * 0.7 + totalFrames * 0.3)
    );

    let rafId: number;

    function tick() {
      frame++;
      let output = "";

      for (let i = 0; i < finalText.length; i++) {
        if (frame >= settleFrames[i]) {
          output += finalText[i];
        } else if (frame >= revealFrames[i]) {
          const randChar = charset[Math.floor(Math.random() * charset.length)];
          output += `<span class="scramble-char" aria-hidden="true">${randChar}</span>`;
        } else {
          output += `<span class="scramble-char placeholder" aria-hidden="true"> </span>`;
        }
      }

      el.innerHTML = output;

      if (frame < totalFrames) {
        rafId = requestAnimationFrame(tick);
      } else {
        el.textContent = finalText;
      }
    }

    rafId = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafId);
  }, []);

  return (
    <>
      <style>{`
        .scramble-char { 
          display:inline-block; 
          width: 1ch;
          height: 1.125rem;
          line-height: 1.125rem;
          transition: transform 160ms ease, opacity 160ms ease; 
          font-weight:700; 
        }
        .scramble-char.placeholder { opacity: 0; }
        .scramble-char[aria-hidden="true"] { filter: blur(0.1px); color: currentColor; }
        .reveal-final { transition: color 400ms ease, text-shadow 400ms ease; }
        .spin-cw { animation: spin360 12s linear infinite; }
        @keyframes spin360 { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }
      `}</style>

      {/* HERO SECTION */}
      <section className="relative w-full py-12 md:py-32 flex items-center justify-center text-center">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 z-10">

          {/* LOGO + GLOW */}
          <div className="relative flex items-center justify-center">
            <div
              className="spin-cw absolute w-[140px] h-[140px] bg-gradient-conic from-blue-500 via-green-500 via-yellow-400 via-red-500 to-blue-500 blur-3xl opacity-70 rounded-full rotatingColor"
            />
            <div
              className="spin-cw absolute w-[160px] h-[160px] bg-radial from-blue-500 via-transparent to-transparent blur-[60px] opacity-40 rounded-full srinkingColor"
            />

            <Image
              alt="AI Community Logo"
              width={100}
              height={100}
              src={AILogo}
              className="z-10 rounded-full"
            />
          </div>

          {/* TITLE + SUBTEXT */}
          <div className="max-w-3xl mx-auto mt-6">
            <span
              ref={chandigarhRef}
              aria-live="polite"
              className="text-4xl md:text-5xl font-extrabold text-red-600 reveal-final"
            >
              Chandigarh
            </span>

            <p className="heroContent mt-5 text-base md:text-lg text-foreground/80 font-medium max-w-2xl mx-auto">
              In the City Beautiful, the heart of Artificial Intelligence beats, where the brightest minds in AI connect, collaborate, and innovate allowing AI/ML enthusiasts, developers, and researchers to learn, share, and grow together.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
              <Button asChild size="lg">
                <Link href="/events">Upcoming Events <Calendar className="ml-2 h-5 w-5" /></Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/team">Meet the Team <Users className="ml-2 h-5 w-5" /></Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* EVENTS SECTION */}
      <section className="py-12 md:py-20">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold tracking-tight">Upcoming Events</h2>
          </div>

          {eventsLoading ? (
            <div className="text-center py-12">
              <p className="inline-flex items-center justify-center gap-3 text-lg text-primary">
                <Clock className="h-5 w-5 animate-spin" /> Loading events...
              </p>
            </div>
          ) : eventsError ? (
            <div className="text-center py-12">
              <p className="text-sm text-red-500">{eventsError}</p>
            </div>
          ) : upcomingEvents.length > 0 ? (
            /* Centering grid: fixed-ish card widths and center entire grid */
            <div
              className="gap-8"
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
                justifyContent: "center",
                gap: "2rem",
              }}
            >
              {upcomingEvents.map((event) => (
                <article
                  key={event.id}
                  className="bg-background/80 rounded-2xl border border-border/50 overflow-hidden hover:shadow-2xl transition-shadow duration-300 flex flex-col"
                  aria-labelledby={`event-${event.id}-title`}
                  style={{ width: "100%", maxWidth: 320 }}
                >
                  {/* Top banner image area */}
                  <div className="relative w-full h-44 md:h-48 lg:h-56 bg-muted">
                    {event.image ? (
                      <Image
                        src={event.image}
                        alt={event.title || "Event image"}
                        fill
                        sizes="(max-width: 768px) 100vw, 500px"
                        style={{ objectFit: "cover" }}
                        unoptimized
                        className="object-cover"
                      />
                    ) : (
                      <div
                        style={{
                          background:
                            (event.type || "").toLowerCase() === "offline"
                              ? "linear-gradient(135deg, #ff8a00 0%, #ff5e62 100%)"
                              : "linear-gradient(135deg, #3b82f6 0%, #06b6d4 100%)",
                        }}
                        className="w-full h-full flex items-center justify-center p-8"
                      >
                        <div className="text-center">
                          <div className="text-white/90 text-3xl font-bold mb-4">
                            {event.title.split(":")[0]}
                          </div>
                          {event.title.split(":")[1] && (
                            <div className="text-white/70 text-lg">
                              {event.title.split(":")[1]}
                            </div>
                          )}
                        </div>
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      {/* status + interested row */}
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center gap-3">
                          <span className="text-sm font-medium text-emerald-600 inline-flex items-center gap-2">
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                              <circle cx="12" cy="12" r="10" fill="#10B981" opacity="0.12"></circle>
                              <path d="M9.5 12.5l1.8 1.8L15 10" stroke="#059669" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                            <span className="font-semibold text-sm">Completed</span>
                          </span>
                        </div>

                        {/* <div className="text-sm text-muted-foreground">
                          Interested Members:{" "}
                          <span className="font-medium text-foreground">
                            {event.raw?.interested_count ?? event.raw?.interested || "—"}
                          </span>
                        </div> */}
                      </div>

                      {/* Title */}
                      <h3 id={`event-${event.id}-title`} className="text-md md:text-xl font-bold text-foreground mb-2 leading-tight">
                        {event.title}
                      </h3>

                      {/* Date */}
                      <div className="text-xs text-muted-foreground mb-5">
                        <div className="inline-flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span className="date">{event.date}</span>
                        </div>
                      </div>

                      {/* Short description (clamped) */}
                      {/* {event.description && (
                        <p className="text-sm text-muted-foreground mb-6 line-clamp-3">
                          {event.description}
                        </p>
                      )} */}
                    </div>

                    {/* Action row */}
                    <div className="flex items-center justify-between pt-3 border-t border-border/50 mt-2">
                      <Link
                        href={event.link || "#"}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-primary inline-flex items-center gap-2 hover:underline"
                      >
                        View Details
                        <ArrowRight className="h-4 w-4" />
                      </Link>

                      <div className="flex items-center gap-3 text-sm text-muted-foreground">
                        {/* Optional: show type badge */}
                        <Badge
                          variant={(event.type || "").toLowerCase() === "offline" ? "default" : "secondary"}
                          className="px-3 py-1 text-xs"
                        >
                          {event.type ?? "Event"}
                        </Badge>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <div className="rounded-lg border border-dashed border-border/40 p-8 text-muted-foreground">
                No upcoming events are scheduled right now. Check back soon!
              </div>
            </div>
          )}

          <div className="text-center mt-12">
            <Button asChild size="lg" variant="outline">
              <Link href="/events">See Full Calendar</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* TEAM SECTION */}
      {/* <section className="py-12 md:py-20 bg-muted/30 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="font-bold tracking-tight font-headline">Meet the Organizers</h2>
            <p className="mt-3 text-lg text-muted-foreground">The team behind the AI community Chandigarh.</p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {team.map((member) => {
              const image = PlaceHolderImages.find((p) => p.id === member.imageId);
              return (
                <MemberCard
                  key={member.id}
                  member={member}
                  image={image}
                  onOpenModal={() => setSelectedMember(member)}
                />
              );
            })}
          </div>

          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/team">View All Team Members</Link>
            </Button>
          </div>
        </div>
      </section> */}

      <SocialFollowSection />

      {selectedMember && (
        <MemberModal member={selectedMember} onClose={() => setSelectedMember(null)} />
      )}
    </>
  );
}
