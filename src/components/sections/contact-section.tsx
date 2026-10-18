"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Check, Copy, Mail, MessageCircle, Send } from "lucide-react";
import { SITE } from "@/lib/constants";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { copyToClipboard } from "@/lib/utils";

export function ContactSection() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");
  const [copied, setCopied] = useState<string | null>(null);

  const handleCopy = async (label: string, value: string) => {
    await copyToClipboard(value);
    setCopied(label);
    setTimeout(() => setCopied(null), 2000);
  };

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    await new Promise((r) => setTimeout(r, 1200));
    setStatus("sent");
    (e.target as HTMLFormElement).reset();
    setTimeout(() => setStatus("idle"), 3000);
  };

  return (
    <section id="contact" className="relative section-padding">
      <div className="container-tight">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 max-w-2xl"
        >
          <p className="text-sm uppercase tracking-[0.3em] text-brand-cyan">Contact</p>
          <h2 className="mt-3 font-display text-4xl font-bold md:text-6xl">
            Let&apos;s build something <span className="text-gradient">unforgettable</span>
          </h2>
        </motion.div>

        <div className="grid gap-8 lg:grid-cols-2">
          <motion.form
            onSubmit={onSubmit}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="glass space-y-4 rounded-3xl p-6 md:p-8"
          >
            <div className="grid gap-4 sm:grid-cols-2">
              <Input name="name" placeholder="Your name" required />
              <Input name="email" type="email" placeholder="Email address" required />
            </div>
            <Input name="company" placeholder="Company (optional)" />
            <Input name="budget" placeholder="Project budget" />
            <Textarea name="message" placeholder="Tell me about your project..." required />
            <Button type="submit" size="lg" className="w-full" disabled={status === "sending"}>
              {status === "sent" ? (
                <>
                  <Check className="h-4 w-4" /> Message Sent
                </>
              ) : status === "sending" ? (
                "Sending..."
              ) : (
                <>
                  <Send className="h-4 w-4" /> Send Message
                </>
              )}
            </Button>
            <p className="text-center text-xs text-white/35">
              Form ready for EmailJS / Resend — wire your keys in production.
            </p>
          </motion.form>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <div className="glass rounded-3xl p-6">
              <h3 className="font-display text-xl font-semibold">Quick actions</h3>
              <a className="mt-2 inline-block break-all text-sm text-brand-cyan transition hover:text-white" href={`mailto:${SITE.email}`}>
                {SITE.email}
              </a>
              <p className="mt-1 text-xs text-white/40">{SITE.location}</p>
              <div className="mt-4 grid gap-3 sm:grid-cols-2">
                <Button variant="secondary" onClick={() => handleCopy("email", SITE.email)}>
                  {copied === "email" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  {copied === "email" ? "Copied!" : "Copy Email"}
                </Button>
                <Button variant="secondary" onClick={() => handleCopy("discord", SITE.discord)}>
                  {copied === "discord" ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  Copy Discord
                </Button>
                <Button asChild variant="outline">
                  <a href={`mailto:${SITE.email}?subject=Project%20Inquiry%20—%20JIDEX%20CODER`}>
                    <Mail className="h-4 w-4" /> Email Me
                  </a>
                </Button>
                <Button asChild variant="outline">
                  <a href={SITE.whatsapp} target="_blank" rel="noreferrer">
                    <MessageCircle className="h-4 w-4" /> WhatsApp
                  </a>
                </Button>
                <Button asChild className="sm:col-span-2">
                  <a href={SITE.calendly} target="_blank" rel="noreferrer">
                    <Calendar className="h-4 w-4" /> Book on Calendly
                  </a>
                </Button>
              </div>
            </div>

            <div className="glass overflow-hidden rounded-3xl">
              <div className="flex h-56 items-center justify-center bg-gradient-to-br from-brand-purple/20 via-brand-blue/10 to-brand-cyan/20">
                <div className="px-4 text-center">
                  <p className="font-display text-lg font-semibold text-white">Nigeria</p>
                  <p className="mt-2 text-sm text-white/70">{SITE.location}</p>
                  <p className="mt-3 text-xs text-white/35">Available for remote & on-site work</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
