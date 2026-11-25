"use client";

import { useSearchParams } from "next/navigation";
import { useState } from "react";
import { FiSend } from "react-icons/fi";
import { site } from "../data/site";
import { findSolutionBySlug, solutions } from "../data/solutions";

const interestsList = [...solutions.map((s) => s.name), "Custom software", "Mobile app", "Website"];
const countries = ["Australia", "New Zealand", "United Kingdom", "United States", "Canada", "Singapore", "India", "Sri Lanka", "Other"];

// There is no backend yet, so the form opens the visitor's email app with the
// details pre-filled. Swap handleSubmit for an API call when one is available.
export default function ContactForm() {
  // /contact?solution=<slug> (from a solution page's "Contact us for a quote") preselects it.
  const preselected = findSolutionBySlug(useSearchParams().get("solution") ?? "")?.name;
  const [interests, setInterests] = useState<string[]>(preselected ? [preselected] : []);

  const toggle = (title: string) =>
    setInterests((cur) => (cur.includes(title) ? cur.filter((t) => t !== title) : [...cur, title]));

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const body = [
      `Full name: ${data.get("name")}`,
      `Email: ${data.get("email")}`,
      `Phone: ${data.get("phone") || "-"}`,
      `Country: ${data.get("country")}`,
      `Interested in: ${interests.join(", ") || "-"}`,
      "",
      `${data.get("message")}`,
    ].join("\n");
    const subject = `${data.get("subject") || "New enquiry"} (from ${data.get("name")})`;
    window.location.href = `mailto:${site.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  }

  const chip = (active: boolean) =>
    `rounded-full border px-4 py-2 text-sm transition ${
      active ? "border-primary bg-primary text-ink" : "border-line text-muted hover:border-accent/50 hover:text-white"
    }`;

  const input =
    "w-full rounded-xl border border-line bg-background px-4 py-3.5 text-sm text-white outline-none transition placeholder:text-muted/60 focus:border-primary";

  return (
    <form onSubmit={handleSubmit} className="rounded-3xl border border-line bg-surface p-6 sm:p-10">
      <h2 className="text-2xl font-bold text-white">Send us a message</h2>
      <p className="mt-2 text-sm text-muted">
        Fill up the form and our team will get back to you {site.replyTime}.
      </p>

      <fieldset className="mt-8">
        <legend className="text-sm font-semibold text-white">I&rsquo;m interested in</legend>
        <div className="mt-4 flex flex-wrap gap-2">
          {interestsList.map((t) => (
            <button type="button" key={t} onClick={() => toggle(t)} aria-pressed={interests.includes(t)} className={chip(interests.includes(t))}>
              {t}
            </button>
          ))}
        </div>
      </fieldset>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        <label className="block">
          <span className="text-sm font-semibold text-white">Full name *</span>
          <input name="name" required autoComplete="name" className={`${input} mt-2`} placeholder="Jane Smith" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-white">Email address *</span>
          <input name="email" type="email" required autoComplete="email" className={`${input} mt-2`} placeholder="jane@business.com.au" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-white">Phone number</span>
          <input name="phone" type="tel" autoComplete="tel" className={`${input} mt-2`} placeholder="04xx xxx xxx" />
        </label>
        <label className="block">
          <span className="text-sm font-semibold text-white">Country</span>
          <select name="country" defaultValue="Australia" className={`${input} mt-2 appearance-none`}>
            {countries.map((c) => (
              <option key={c} value={c}>
                {c}
              </option>
            ))}
          </select>
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-white">Subject</span>
          <input
            name="subject"
            className={`${input} mt-2`}
            defaultValue={preselected ? `Quote for ${preselected}` : ""}
            placeholder="What can we help with?"
          />
        </label>
        <label className="block sm:col-span-2">
          <span className="text-sm font-semibold text-white">Message *</span>
          <textarea
            name="message"
            required
            rows={5}
            className={`${input} mt-2 resize-y`}
            placeholder="Tell us about your business, how many staff or locations you have, and what you'd like the app to do."
          />
        </label>
      </div>

      <button
        type="submit"
        className="group mt-8 inline-flex w-full items-center justify-center gap-2 rounded-full bg-primary px-6 py-4 text-sm font-semibold text-ink transition hover:bg-primary-hover sm:w-auto"
      >
        Send message
        <FiSend className="transition group-hover:translate-x-0.5" />
      </button>
    </form>
  );
}
