// app/events/page.tsx
"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { ArrowRight, Calendar, Clock, CheckCircle } from "lucide-react";
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

function extractImageFromHtml(html: string | undefined | null): string | null {
  if (!html) return null;
  const m = html.match(/<img[^>]+src=(?:'|")([^'">]+)(?:'|")[^>]*>/i);
  return m ? m[1] : null;
}

function shortText(text: string | undefined | null, len = 180) {
  if (!text) return "";
  const cleaned = text.replace(/<\/?[^>]+(>|$)/g, "").replace(/\s+/g, " ").trim();
  return cleaned.length > len ? cleaned.slice(0, len).trim() + "…" : cleaned;
}

function EventCard({ event }: { event: Event }) {
  const initialSrc =
    (event as any).image ||
    event.raw?.header_image?.i500 ||
    event.raw?.header_image?.i350 ||
    event.raw?.header_image?.i320 ||
    event.raw?.header_image_path ||
    event.raw?.banner ||
    extractImageFromHtml(event.raw?.description) ||
    null;

  const [imgSrc, setImgSrc] = useState<string | null>(initialSrc);
  const [imgFailed, setImgFailed] = useState(false);

  // Correct commudle URL
  const kommunitySlug = event.raw?.kommunity_slug ?? "";
  const eventSlug = event.raw?.slug ?? "";
  const commudleUrl = `https://commudle.com/communities/${encodeURIComponent(
    kommunitySlug
  )}/events/${encodeURIComponent(eventSlug)}`;

  return (
    <article className="rounded-xl overflow-hidden border border-gray-200 bg-white shadow-sm hover:shadow-md transition-shadow duration-200">
      <div className="relative w-full h-44 md:h-40 bg-gray-50 rounded-t-xl">
        {imgSrc && !imgFailed ? (
          <Image
            src={imgSrc}
            alt={event.title}
            fill
            sizes="100vw"
            style={{ objectFit: "cover" }}
            unoptimized
            onError={() => setImgFailed(true)}
            className="rounded-t-xl"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100">
            <p className="text-slate-600 text-sm px-4 text-center">{event.title}</p>
          </div>
        )}
      </div>

      <div className="px-5 py-3 flex items-center justify-between border-b border-gray-100">
        <div className="flex items-center gap-1.5 text-sm text-emerald-600 font-medium">
          <CheckCircle className="h-4 w-4" />
          Completed
        </div>
      </div>

      <div className="p-6 min-h-[170px] flex flex-col">
        <h3 className="text-xl md:text-2xl font-semibold text-slate-900 leading-tight">{event.title}</h3>

        <div className="text-sm text-slate-500 mt-2 mb-2 flex items-center gap-2">
          <Calendar className="h-4 w-4" />
          {event.date}
        </div>

        {/* <p className="text-sm text-slate-600 flex-1 leading-relaxed">{shortText(event.description, 210)}</p> */}

        <div className="mt-4">
          <Link
            href={commudleUrl}
            target="_blank"
            className="inline-flex items-center gap-2 text-sky-600 font-medium"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}

export default function EventsPage() {
  const COMMUNITY_ID = 316;
  const [upcomingEvents, setUpcomingEvents] = useState<Event[]>([]);
  const [pastEvents, setPastEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getEvents() {
      const futureUrl = `https://json.commudle.com/api/v2/events/public/index_by_community?when=future&community_id=${COMMUNITY_ID}`;
      const pastUrl = `https://json.commudle.com/api/v2/events/public/index_by_community?when=past&community_id=${COMMUNITY_ID}&page=1&count=9`;

      const [futureRes, pastRes] = await Promise.all([fetch(futureUrl), fetch(pastUrl)]);
      const futureData = await futureRes.json();
      const pastData = await pastRes.json();

      setUpcomingEvents((futureData.data?.values || []).map((r: any) => ({ ...formatEventData(r), raw: r })));
      setPastEvents((pastData.data?.values || []).map((r: any) => ({ ...formatEventData(r), raw: r })));
      setLoading(false);
    }

    getEvents();
  }, []);

  if (loading)
    return (
      <div className="text-center py-20 text-lg text-primary flex items-center justify-center gap-3">
        <Clock className="animate-spin" /> Loading events...
      </div>
    );

  return (
    <main className="w-full">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-14">
        {/* UPCOMING EVENTS */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900">Upcoming Events</h1>
          <div className="mx-auto mt-3 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />
          <p className="text-slate-500 mt-2 text-lg">Check out all the exciting events we have lined up!</p>
        </div>

        <section className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {upcomingEvents.length > 0 ? (
            upcomingEvents.map((evt) => <EventCard key={evt.id} event={evt} />)
          ) : (
            <p className="col-span-full text-center text-muted-foreground">No upcoming events</p>
          )}
        </section>

        {/* PAST EVENTS */}
        <section className="mt-20">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">Past Events</h2>
            <div className="mx-auto mt-3 h-1.5 w-28 rounded-full bg-gradient-to-r from-[#4285F4] via-[#EA4335] via-[#FBBC05] to-[#34A853]" />
            <p className="text-slate-500 mt-2 text-lg">Look back at the amazing events we have conducted!</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {pastEvents.length > 0 ? (
              pastEvents.map((evt) => <EventCard key={evt.id} event={evt} />)
            ) : (
              <p className="col-span-full text-center text-muted-foreground">No past events found</p>
            )}
          </div>
        </section>
      </div>
    </main>
  );
}
