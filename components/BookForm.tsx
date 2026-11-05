"use client";

import { useEffect, useState, type FormEvent } from "react";
import { bookingTimes, site, concept } from "@/lib/site";

type Values = {
  date: string;
  time: string;
  party: string;
  what: string;
  name: string;
  phone: string;
  email: string;
  dietary: string;
  notes: string;
};
type Key = keyof Values;

const whatOptions = [
  { value: "afternoon-tea", label: "High Tea" },
  { value: "regular", label: "Regular menu" },
  { value: "celebration", label: "Celebration" },
];

const partyOptions = [
  ...Array.from({ length: site.booking.partyMax }, (_, i) => String(i + 1)),
  site.booking.partyOver,
];

const empty: Values = { date: "", time: "", party: "2", what: "afternoon-tea", name: "", phone: "", email: "", dietary: "", notes: "" };

function timeLabel(v: string) {
  const [hh, mm] = v.split(":").map(Number);
  const h = hh % 12 || 12;
  return `${h}:${String(mm).padStart(2, "0")} ${hh < 12 ? "a.m." : "p.m."}`;
}

function localISO(d: Date) {
  const off = d.getTimezoneOffset();
  return new Date(d.getTime() - off * 60000).toISOString().slice(0, 10);
}

function dayOf(date: string) {
  return new Date(`${date}T12:00:00`).getDay();
}

function fmt(d: Date) {
  return d.toLocaleString("en-CA", { weekday: "short", month: "short", day: "numeric", hour: "numeric", minute: "2-digit" });
}

function validate(v: Values): Partial<Record<Key, string>> {
  const e: Partial<Record<Key, string>> = {};
  const notice = site.booking.afternoonTeaNoticeHours;
  if (!v.date) e.date = "Pick a date.";
  else if (v.date < localISO(new Date())) e.date = "Pick today or a later date.";
  if (!v.time) e.time = "Pick a time.";
  else if (v.date && !bookingTimes(dayOf(v.date), v.what).includes(v.time)) e.time = "Pick a time from the list for that day.";
  const n = Number(v.party);
  const okParty = v.party === site.booking.partyOver || (Number.isInteger(n) && n >= 1 && n <= site.booking.partyMax);
  if (!okParty) e.party = `Pick a party size from 1 to ${site.booking.partyMax}, or ${site.booking.partyOver} and we'll call you.`;
  if (!v.what) e.what = "Choose what this booking is for.";
  if (v.what === "afternoon-tea" && v.date && v.time && !e.time) {
    const when = new Date(`${v.date}T${v.time}:00`);
    const earliest = new Date(Date.now() + notice * 3600_000);
    if (when < earliest) e.time = `High Tea needs ${notice} hours' notice. The earliest time we can book is ${fmt(earliest)}.`;
  }
  if (!v.name.trim()) e.name = "Add the name for the booking.";
  if (v.phone.replace(/\D/g, "").length < 10) e.phone = "Add a phone number we can call.";
  if (v.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v.email)) e.email = "That email doesn't look right.";
  return e;
}

export function BookForm() {
  const [v, setV] = useState<Values>(empty);
  const [errors, setErrors] = useState<Partial<Record<Key, string>>>({});
  const [sent, setSent] = useState<Values | null>(null);
  const [minDate, setMinDate] = useState("");

  useEffect(() => {
    setMinDate(localISO(new Date()));
    const p = new URLSearchParams(window.location.search).get("for");
    if (p && whatOptions.some((o) => o.value === p)) setV((prev) => ({ ...prev, what: p }));
  }, []);

  const set = (k: Key) => (e: { target: { value: string } }) => setV((prev) => ({ ...prev, [k]: e.target.value }));
  const times = v.date ? bookingTimes(dayOf(v.date), v.what) : [];

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const errs = validate(v);
    setErrors(errs);
    const first = (Object.keys(errs) as Key[])[0];
    if (first) {
      document.getElementById(`f-${first}`)?.focus();
      return;
    }
    setSent(v);
  }

  if (sent) {
    const label = whatOptions.find((o) => o.value === sent.what)?.label ?? sent.what;
    const partyText = sent.party === site.booking.partyOver ? "13 or more (we'll call you)" : sent.party;
    return (
      <div role="status" className="border-t border-line pt-8">
        <p className="eyebrow">Request received</p>
        <h2 className="mt-4 text-[clamp(2.25rem,1.6rem+2.6vw,3.5rem)]">Thanks, {sent.name.trim()}.</h2>
        <p className="mt-6 text-lg">
          We have your request for {sent.date} at {timeLabel(sent.time)}, party of {partyText}, for {label.toLowerCase()}. We will confirm by phone or email.
        </p>
        <p className="mt-6 text-sm text-muted">{concept.notConnected} Nothing was sent or stored.</p>
        <div className="mt-10 flex flex-wrap gap-6">
          <button type="button" onClick={() => setSent(null)} className="btn btn-outline">Make another request</button>
          <a href={`tel:${site.phoneTel}`} className="draw font-semibold">Call {site.phone}</a>
        </div>
      </div>
    );
  }

  const err = (k: Key) =>
    errors[k] ? <p id={`e-${k}`} className="mt-2 text-sm font-bold text-brand">{errors[k]}</p> : null;
  const invalid = (k: Key) => (errors[k] ? "true" : undefined);
  const describe = (k: Key) => (errors[k] ? `e-${k}` : undefined);

  return (
    <form noValidate onSubmit={onSubmit} className="flex flex-col gap-7" aria-label="Booking request">
      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="f-date" className="mb-2 block font-bold">Date</label>
          <input id="f-date" type="date" min={minDate} value={v.date} onChange={set("date")} aria-invalid={invalid("date")} aria-describedby={describe("date")} className="field" />
          {err("date")}
        </div>
        <div>
          <label htmlFor="f-what" className="mb-2 block font-bold">What is it for</label>
          <select id="f-what" value={v.what} onChange={set("what")} aria-invalid={invalid("what")} aria-describedby={describe("what")} className="field">
            {whatOptions.map((o) => (
              <option key={o.value} value={o.value}>{o.label}</option>
            ))}
          </select>
          {err("what")}
        </div>
        <div>
          <label htmlFor="f-time" className="mb-2 block font-bold">Time</label>
          <select id="f-time" value={v.time} onChange={set("time")} disabled={!v.date} aria-invalid={invalid("time")} aria-describedby={describe("time") ?? "h-time"} className="field">
            <option value="">{v.date ? "Choose a time" : "Pick a date first"}</option>
            {times.map((t) => (
              <option key={t} value={t}>{timeLabel(t)}</option>
            ))}
          </select>
          <p id="h-time" className="mt-2 text-sm text-muted">
            {v.what === "afternoon-tea"
              ? "High Tea needs 24 hours' notice. The last start is 2 hours before close."
              : "The last start is 30 minutes before close."}
          </p>
          {err("time")}
        </div>
        <div>
          <label htmlFor="f-party" className="mb-2 block font-bold">Party size</label>
          <select id="f-party" value={v.party} onChange={set("party")} aria-invalid={invalid("party")} aria-describedby={describe("party")} className="field">
            {partyOptions.map((p) => (
              <option key={p} value={p}>{p === site.booking.partyOver ? "13 or more (we'll call you)" : p}</option>
            ))}
          </select>
          {err("party")}
        </div>
      </div>

      <div className="grid gap-7 sm:grid-cols-2">
        <div>
          <label htmlFor="f-name" className="mb-2 block font-bold">Name</label>
          <input id="f-name" type="text" autoComplete="name" value={v.name} onChange={set("name")} aria-invalid={invalid("name")} aria-describedby={describe("name")} className="field" />
          {err("name")}
        </div>
        <div>
          <label htmlFor="f-phone" className="mb-2 block font-bold">Phone <span className="font-normal text-muted">(required)</span></label>
          <input id="f-phone" type="tel" autoComplete="tel" value={v.phone} onChange={set("phone")} aria-invalid={invalid("phone")} aria-describedby={describe("phone")} className="field" />
          {err("phone")}
        </div>
      </div>

      <div>
        <label htmlFor="f-email" className="mb-2 block font-bold">Email <span className="font-normal text-muted">(optional)</span></label>
        <input id="f-email" type="email" autoComplete="email" value={v.email} onChange={set("email")} aria-invalid={invalid("email")} aria-describedby={describe("email")} className="field" />
        {err("email")}
      </div>

      <div>
        <label htmlFor="f-dietary" className="mb-2 block font-bold">Dietary needs</label>
        <textarea id="f-dietary" rows={3} value={v.dietary} onChange={set("dietary")} className="field" placeholder="Vegetarian, allergies, gluten-free" />
      </div>

      <div>
        <label htmlFor="f-notes" className="mb-2 block font-bold">Notes</label>
        <textarea id="f-notes" rows={4} value={v.notes} onChange={set("notes")} className="field" placeholder="Birthday, high chairs, the occasion" />
      </div>

      <div className="flex flex-col gap-4 pt-2">
        <div>
          <button type="submit" className="btn btn-accent">Send booking request</button>
        </div>
        <p className="text-sm text-muted">{concept.notConnected}</p>
      </div>
    </form>
  );
}
