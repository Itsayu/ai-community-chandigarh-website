"use client";

import React, { useEffect, useRef, useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { X } from "lucide-react";

const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters." }),
  email: z.string().email({ message: "Please enter a valid email address." }),
  message: z.string().min(10, { message: "Message must be at least 10 characters." }),
});
type ContactFormValues = z.infer<typeof contactFormSchema>;

/** THANK YOU GIF (replace with your hosted gif in public folder for best results) */
const THANK_YOU_GIF = "/thank-you.gif" /* fallback: provide in public/thank-you.gif */;

/* -------------------------
   Simple Fullscreen Dots Loader (CSS)
   ------------------------- */
function DotsLoader({
  visible,
  durationMs = 1800,
  onComplete,
}: {
  visible: boolean;
  durationMs?: number;
  onComplete?: () => void;
}) {
  useEffect(() => {
    if (!visible) return;
    // call onComplete after durationMs
    const t = setTimeout(() => {
      onComplete?.();
    }, durationMs);
    return () => clearTimeout(t);
  }, [visible, durationMs, onComplete]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-[1000] flex items-center justify-center bg-black/35 backdrop-blur-sm pointer-events-auto"
      aria-hidden={!visible}
    >
      <style>{`
        .gc-loader {
          display: inline-flex;
          gap: 12px;
          align-items: flex-end;
          padding: 18px 22px;
          border-radius: 14px;
          background: linear-gradient(180deg, rgba(255,255,255,0.06), rgba(255,255,255,0.02));
          backdrop-filter: blur(6px);
          box-shadow: 0 6px 30px rgba(6, 8, 24, 0.45);
        }

        .gc-dot {
          width: 12px;
          height: 12px;
          border-radius: 9999px;
          background: #4285F4;
          transform-origin: center bottom;
        }
        .gc-dot:nth-child(1) { animation: gc-bounce .78s infinite ease-in-out 0s; background: #4285F4; }
        .gc-dot:nth-child(2) { animation: gc-bounce .78s infinite ease-in-out .12s; background: #EA4335; }
        .gc-dot:nth-child(3) { animation: gc-bounce .78s infinite ease-in-out .24s; background: #FBBC05; }

        @keyframes gc-bounce {
          0% { transform: translateY(0) scaleY(1); opacity: 0.75; }
          40% { transform: translateY(-12px) scaleY(1.15); opacity: 1; }
          100% { transform: translateY(0) scaleY(1); opacity: 0.75; }
        }

        /* small responsive sizing for very small screens */
        @media (max-width: 420px) {
          .gc-dot { width: 10px; height: 10px; }
          .gc-loader { gap: 8px; padding: 12px 14px; border-radius: 12px; }
        }
      `}</style>

      <div className="gc-loader" role="status" aria-label="Loading">
        <span className="gc-dot" />
        <span className="gc-dot" />
        <span className="gc-dot" />
      </div>
    </div>
  );
}

/* -------------------------
   Confetti helper (small) — same as before
   ------------------------- */
function useConfetti() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const explode = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d")!;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const w = canvas.width,
      h = canvas.height;

    const pieces = Array.from({ length: 80 }).map(() => ({
      x: w / 2 + (Math.random() - 0.5) * 80,
      y: h / 2 + (Math.random() - 0.5) * 40,
      vx: (Math.random() - 0.5) * 8,
      vy: (Math.random() - 1.5) * 8,
      r: 3 + Math.random() * 6,
      rot: Math.random() * Math.PI,
      color:
        ["#ef4444", "#f97316", "#facc15", "#34d399", "#60a5fa", "#a78bfa"][
          Math.floor(Math.random() * 6)
        ],
    }));

    let t0 = performance.now();
    function loop(t: number) {
      const dt = (t - t0) / 1000;
      t0 = t;
      ctx.clearRect(0, 0, w, h);
      for (const p of pieces) {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.35; // gravity
        p.rot += 0.2;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        ctx.fillStyle = p.color;
        ctx.fillRect(-p.r / 2, -p.r / 2, p.r, p.r * 0.6);
        ctx.restore();
      }
      // stop when confetti fell below screen
      if (pieces[0].y < h + 200) {
        requestAnimationFrame(loop);
      } else {
        setTimeout(() => ctx.clearRect(0, 0, w, h), 500);
      }
    }
    requestAnimationFrame(loop);
  };

  return { canvasRef, explode };
}

/* -------------------------
   Main ContactForm component
   ------------------------- */
export function ContactForm() {
  const [showLoader, setShowLoader] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [serverError, setServerError] = useState<string | null>(null);
  const [sending, setSending] = useState(false);

  const { canvasRef: confettiCanvasRef, explode } = useConfetti();

  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: { name: "", email: "", message: "" },
  });

  const onSubmit: SubmitHandler<ContactFormValues> = async (data) => {
    setServerError(null);
    setSending(true);
    // show loader overlay
    setShowLoader(true);

    // Start API call in parallel
    let apiOk = false;
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      apiOk = res.ok;
      if (!res.ok) {
        const err = await res.json().catch(() => null);
        throw new Error(err?.error || "Failed to send message");
      }
    } catch (err: any) {
      console.error(err);
      setServerError(err?.message || "Something went wrong. Please try again.");
    }

    // When DotsLoader completes it will call onLoaderComplete via prop
    // If API failed, we keep serverError and do not show success modal
  };

  // Called when loader finishes (DotsLoader's onComplete)
  const onLoaderComplete = () => {
    setShowLoader(false);
    setSending(false);

    if (serverError) {
      // keep the error displayed above the form
      return;
    }

    // success: show modal + confetti
    setShowModal(true);
    setTimeout(() => explode(), 220);

    // auto-close modal after 10 seconds
    const closeTimer = setTimeout(() => setShowModal(false), 10000);

    // reset form and clear timer on unmount or subsequent open
    form.reset();
    return () => clearTimeout(closeTimer);
  };

  return (
    <>
      {/* Confetti canvas on top */}
      <canvas
        ref={confettiCanvasRef as React.RefObject<HTMLCanvasElement>}
        className="pointer-events-none fixed inset-0 z-[1200] w-full h-full"
        aria-hidden
      />

      {/* Dots loader overlay */}
      <DotsLoader visible={showLoader} durationMs={1800} onComplete={onLoaderComplete} />

      <Card className="max-w-2xl mx-auto shadow-xl">
        <CardHeader className="px-6 py-6 bg-gradient-to-r from-white/50 to-white/40">
          <CardTitle className="text-2xl font-extrabold tracking-tight">Send us a Message</CardTitle>
          <p className="mt-1 text-sm text-muted-foreground max-w-xl">
            We’re excited to hear from you — whether it’s feedback, a collab or a hello.
          </p>
        </CardHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 px-6 py-6">
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <FormField control={form.control} name="name" render={({ field }) => (
                <FormItem>
                  <FormLabel>Full Name</FormLabel>
                  <FormControl>
                    <Input placeholder="e.g. Priya Sharma" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />

              <FormField control={form.control} name="email" render={({ field }) => (
                <FormItem>
                  <FormLabel>Email Address</FormLabel>
                  <FormControl>
                    <Input placeholder="you@domain.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )} />
            </div>

            <FormField control={form.control} name="message" render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea {...field} rows={6} placeholder="Tell us about your idea or question..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )} />

            {serverError && (
              <div className="rounded-md border border-red-200 bg-red-50 px-4 py-2 text-sm text-red-700">
                {serverError}
              </div>
            )}

            <CardFooter className="px-0 py-0">
              <div className="flex flex-col gap-3 w-full">
                <button
                  type="submit"
                  className="relative inline-flex items-center justify-center w-full rounded-2xl bg-gradient-to-r from-indigo-600 to-violet-600 px-5 py-3 text-sm font-semibold text-white shadow-lg hover:scale-[1.01] transition-transform"
                  disabled={sending || showLoader}
                >
                  {!sending ? (
                    <span>Send Message</span>
                  ) : (
                    <span className="inline-flex items-center gap-3">
                      <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24">
                        <circle
                          className="opacity-25"
                          cx="12"
                          cy="12"
                          r="10"
                          stroke="currentColor"
                          strokeWidth="4"
                          fill="none"
                        />
                      </svg>
                      <span>Sending...</span>
                    </span>
                  )}
                </button>

                <div className="text-center text-xs text-muted-foreground py-2">
                  <span className="block">Or drop an email directly at</span>
                  <a
                    href="mailto:tfugchd@gmail.com"
                    className="text-sm font-medium text-indigo-600 hover:underline"
                  >
                    tfugchd@gmail.com
                  </a>
                </div>

                <div className="mt-2 text-center">
                  <span className="inline-block text-sm font-semibold px-3 py-1 rounded-full bg-gradient-to-r from-green-50 to-blue-50 text-slate-700 shadow-sm">
                    AI Community Chandigarh
                  </span>
                </div>
              </div>
            </CardFooter>
          </form>
        </Form>
      </Card>

      {/* Unique Thank You Modal (auto-close after 10s) */}
      {showModal && (
        <div className="fixed inset-0 z-[1300] flex items-center justify-center px-4" role="dialog" aria-modal="true">
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 to-black/60 backdrop-blur-md" onClick={() => setShowModal(false)} />

          <div className="relative z-20 w-full max-w-2xl">
            <div className="rounded-3xl bg-gradient-to-br from-white/80 via-slate-50 to-white/60 p-6 shadow-2xl ring-1 ring-black/6 overflow-hidden border border-white/30">
              <div className="flex flex-col md:flex-row items-center gap-6">
                <div className="w-full md:w-44 h-44 rounded-2xl bg-gradient-to-tr from-indigo-700 to-emerald-400 flex items-center justify-center shadow-2xl transform -translate-y-2">
                  {/* Animated check + subtle pulse */}
                  <div className="w-28 h-28 rounded-lg bg-white/95 flex items-center justify-center shadow">
                    <svg viewBox="0 0 120 120" className="w-20 h-20">
                      <defs>
                        <linearGradient id="g2" x1="0" x2="1">
                          <stop offset="0" stopColor="#34D399" />
                          <stop offset="1" stopColor="#60A5FA" />
                        </linearGradient>
                      </defs>
                      <circle cx="60" cy="60" r="48" fill="url(#g2)" />
                      <path
                        d="M40 62 L54 76 L82 44"
                        fill="none"
                        stroke="#ffffff"
                        strokeWidth="8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{ strokeDasharray: 200, strokeDashoffset: 200, animation: "dash 0.7s forwards 0.15s" }}
                      />
                      <style>{`
                        @keyframes dash { to { stroke-dashoffset: 0; } }
                        @keyframes pulse-s { 0%{ transform: scale(1);} 50%{ transform: scale(1.03);} 100%{ transform: scale(1);} }
                        svg { animation: pulse-s 3s ease-in-out infinite; transform-origin: center; }
                      `}</style>
                    </svg>
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="text-2xl font-extrabold">Thanks — you're awesome!</h3>
                      <p className="mt-2 text-sm text-muted-foreground max-w-md">
                        We received your message and will get back to you soon. Meanwhile, join our group or explore upcoming events.
                      </p>
                    </div>

                    <button
                      aria-label="Close"
                      onClick={() => setShowModal(false)}
                      className="rounded-full p-2 hover:bg-slate-100"
                    >
                      <X />
                    </button>
                  </div>

                  <div className="mt-4 flex gap-4 items-center">
                    <img
                      src={THANK_YOU_GIF}
                      alt="Thanks"
                      className="w-28 h-28 rounded-lg object-cover shadow"
                    />
                    <div>
                      <p className="font-medium">AI Community Chandigarh</p>
                      <p className="text-xs text-muted-foreground mt-1">Expect an email reply within a few days.</p>

                      <div className="mt-3 flex gap-2">
                        <a
                          href="https://t.me/yourcommunity"
                          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-indigo-50 hover:bg-indigo-100 border"
                        >
                          Join Community
                        </a>
                        <a
                          href="mailto:tfugchd@gmail.com"
                          className="inline-flex items-center rounded-md px-3 py-2 text-sm font-medium bg-white border"
                        >
                          Contact Us
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-6 text-right">
                    <button
                      onClick={() => setShowModal(false)}
                      className="inline-flex items-center rounded-lg px-4 py-2 text-sm font-medium border"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-3 text-center text-xs text-muted-foreground">
              <span>AI Community Chandigarh — thanks for connecting!</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ContactForm;
