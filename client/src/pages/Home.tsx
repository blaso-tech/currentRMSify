/*
 * CURRENTRMSIFY HOME PAGE
 * Style: Calm Frustration + Operational Credibility
 * Tone: "Why wasn't this already done?"
 *
 * 9-SECTION FLOW:
 * 1. HERO - Sparks/Hordern crowd background
 * 2. THE PROBLEM - Clean/white with Shopify vs Current RMS disconnect
 * 3. WHAT CURRENTRMSIFY DOES - CO2 jets crowd background
 * 4. HOW IT WORKS - Clean with Sell → Sync → Done flow
 * 5. THE SOLUTION - Multicolour confetti background
 * 6. AUTHORITY BLOCK - Clean with "Built by operators, not consultants"
 * 7. FROM PYRO TO PYTHON - Flames stage background with founder story
 * 8. REQUEST ACCESS - Clean/white with functional form
 * 9. WHY CURRENTRMSIFY - Wedding fireworks background (closing statement)
 *
 * CTA Psychology:
 * - Header: Solid teal (proceed, navigate)
 * - Hero: Solid orange (pause, attention)
 * - Form submit: Solid teal (proceed with action)
 *
 * NO ROADMAP SECTION - This is infrastructure, not a feature product.
 */

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, Check, ArrowDown, X } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark Header */}
      <header className="bg-black py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo: Icon + CURRENTRMSIFY wordmark */}
            <a href="/" className="flex items-center gap-3">
              <img
                src="/images/currentrmsify-icon.png"
                alt="CurrentRMSify"
                className="h-10 w-auto rounded"
              />
              <span className="text-white text-lg font-semibold tracking-wider uppercase">
                CurrentRMSify
              </span>
            </a>
            {/* Solid teal CTA - proceed/navigate */}
            <a
              href="#contact"
              className="px-5 py-2.5 text-sm font-medium text-white rounded-md transition-all bg-teal-500 hover:bg-teal-600"
            >
              Request Access
            </a>
          </div>
        </div>
      </header>

      <main className="flex-1">
        {/* Section 1: HERO - Sparks/Hordern crowd background */}
        <HeroSection />

        {/* Section 2: THE PROBLEM - Clean with Shopify vs Current RMS disconnect */}
        <ProblemSection />

        {/* Section 3: WHAT CURRENTRMSIFY DOES - CO2 jets background */}
        <WhatCurrentRMSifyDoesSection />

        {/* Section 4: HOW IT WORKS - Clean with Sell → Sync → Done */}
        <HowItWorksSection />

        {/* Section 5: THE SOLUTION - Anti lock-in block */}
        <SolutionSection />

        {/* Section 6: AUTHORITY BLOCK - Built by operators, not consultants */}
        <AuthoritySection />

        {/* Section 7: FROM PYRO TO PYTHON - Flames background */}
        <FounderSection />

        {/* Section 8: REQUEST ACCESS - Clean form */}
        <ContactSection />

        {/* Section 9: WHY CURRENTRMSIFY - Wedding fireworks (closing) */}
        <WhySection />
      </main>

      {/* Dark Footer - BLASO style */}
      <footer className="bg-black py-12">
        <div className="container">
          <div className="flex flex-col items-center text-center space-y-8">
            {/* Trust line */}
            <p className="text-xs text-zinc-600 tracking-wide">
              Running in production environments handling real orders, real stock, real deadlines.
            </p>

            {/* Tagline */}
            <p className="text-sm text-gray-400 tracking-wide">
              Built For Current RMS Operators ✦ Built Without Permission
            </p>

            {/* Disclaimer */}
            <p className="text-xs text-gray-500 max-w-lg leading-relaxed">
              CurrentRMSify is an independent service and is not affiliated with or endorsed by Current RMS or Shopify. All trademarks belong to their respective owners.
            </p>

            {/* BLASO.TECH */}
            <a
              href="https://blaso.tech"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-400 tracking-widest hover:text-gray-300 transition-colors"
            >
              BLASO.TECH
            </a>

            {/* Logo + CURRENTRMSIFY */}
            <div className="flex flex-col items-center gap-3 pt-4">
              <img
                src="/images/currentrmsify-icon.png"
                alt="CurrentRMSify"
                className="h-12 w-auto rounded opacity-60"
              />
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                CurrentRMSify
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

/* ============================================
   SECTION 1: HERO
   Sparks/Hordern crowd background
============================================ */
function HeroSection() {
  return (
    <section
      className="relative py-24 md:py-32 lg:py-40"
      style={{
        backgroundImage: 'url(/images/Hordern-1024x683.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10">
        <div className="max-w-3xl">
          <p className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">BUILT FOR CURRENT RMS OPERATORS</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            Why are you still reconciling sales by hand?
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            CurrentRMSify connects Shopify orders directly to Current RMS —<br className="hidden md:block" />
            updating stock, sales items, and asset data without exports, spreadsheets, or clean-up work.
          </p>

          {/* Hero bullets */}
          <ul className="mt-8 space-y-2 text-gray-300">
            <li className="flex items-center gap-2">
              <span className="text-teal-400">—</span>
              <span>No CSVs</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">—</span>
              <span>No end-of-day stock corrections</span>
            </li>
            <li className="flex items-center gap-2">
              <span className="text-teal-400">—</span>
              <span>No "Current is still the master" mental gymnastics</span>
            </li>
          </ul>

          <div className="mt-10">
            {/* Solid orange CTA - pause, attention */}
            <a
              href="#contact"
              className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-md transition-all bg-orange-500 hover:bg-orange-600"
            >
              Request Access
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 2: THE PROBLEM
   Clean white - the integration gap
============================================ */
function ProblemSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-zinc-50">
      <div className="container">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-8">
            The problem
          </h2>

          <div className="space-y-6 text-base text-zinc-700 leading-relaxed">
            <p className="text-lg text-zinc-900 font-medium">
              Shopify knows what you sold.<br />
              Current RMS knows what you own.<br />
              Somehow, you're expected to reconcile the two manually.
            </p>

            <div className="py-6 border-l-4 border-orange-500 pl-6 bg-white rounded-r-lg">
              <p className="text-zinc-800 font-medium mb-4">The result:</p>
              <ul className="space-y-2 text-zinc-600">
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Shopify stock drifts</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Current RMS becomes "mostly accurate"</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>Someone runs exports at the end of the day</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-orange-500 mt-1">•</span>
                  <span>And errors quietly compound</span>
                </li>
              </ul>
            </div>

            <p className="text-zinc-900 font-semibold text-lg pt-4">
              This isn't a scale problem.<br />
              It's an integration problem that never got solved.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 3: WHAT CURRENTRMSIFY DOES
   CO2 jets crowd background
============================================ */
function WhatCurrentRMSifyDoesSection() {
  const features = [
    "Shopify orders create/update opportunities in Current RMS",
    "Sale items appear correctly costed",
    "Quantities decrement without manual adjustment",
    "Tax, pricing, and structure preserved",
  ];

  return (
    <section
      className="relative py-24 md:py-32"
      style={{
        backgroundImage: 'url(/images/Reference-Eco2Jets.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Semi-transparent overlay box */}
          <div className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              What CurrentRMSify does
            </h2>
            <p className="mt-4 text-gray-300">
              CurrentRMSify turns Shopify orders into structured, usable data inside Current RMS.
            </p>
            <ul className="mt-8 space-y-4">
              {features.map((feature, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-base text-gray-200">{feature}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 4: HOW IT WORKS
   Clean with Sell → Sync → Done flow
============================================ */
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "Sell",
      description: "Order is placed in Shopify",
    },
    {
      number: "02",
      title: "Sync",
      description: "CurrentRMSify ingests the payload and maps it to Current RMS structures",
    },
    {
      number: "03",
      title: "Done",
      description: "Stock, sales items, and records update where they belong",
    },
  ];

  return (
    <section className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center">
            How it works
          </h2>

          {/* Flow diagram with logos - VISUAL FIRST */}
          <div className="mt-12 p-8 border border-zinc-200 bg-zinc-50 rounded-lg">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
              {/* Shopify input */}
              <div className="flex items-center gap-3 px-6 py-4 border border-zinc-200 bg-white rounded">
                <img src="/images/shopify-logo.webp" alt="Shopify" className="h-8 w-auto" />
                <div className="text-left">
                  <span className="font-medium block">Shopify</span>
                  <span className="text-zinc-500 text-xs">Order placed</span>
                </div>
              </div>

              <ArrowRight className="h-6 w-6 text-zinc-400 hidden md:block" />
              <ArrowDown className="h-6 w-6 text-zinc-400 md:hidden" />

              {/* CurrentRMSify */}
              <div className="flex items-center gap-3 px-6 py-4 border-2 border-teal-500 bg-white rounded-lg">
                <img src="/images/currentrmsify-icon.png" alt="CurrentRMSify" className="h-8 w-auto rounded" />
                <span className="font-semibold">CurrentRMSify</span>
              </div>

              <ArrowRight className="h-6 w-6 text-zinc-400 hidden md:block" />
              <ArrowDown className="h-6 w-6 text-zinc-400 md:hidden" />

              {/* Current RMS output */}
              <div className="flex items-center gap-3 px-6 py-4 border border-zinc-200 bg-white rounded">
                <img src="/images/currentrms-logo.png" alt="Current RMS" className="h-8 w-auto" />
                <div className="text-left">
                  <span className="font-medium block">Current RMS</span>
                  <span className="text-zinc-500 text-xs">Opportunity updated</span>
                </div>
              </div>
            </div>
          </div>

          {/* Steps - EXPLANATION SECOND */}
          <div className="mt-12 grid md:grid-cols-3 gap-8 md:gap-4">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <span className="text-sm font-medium text-zinc-500">
                    {step.number}
                  </span>
                  <h3 className="mt-2 text-lg font-semibold">{step.title}</h3>
                  <p className="mt-2 text-sm text-zinc-600">
                    {step.description}
                  </p>
                </div>

                {/* Arrow between steps (hidden on mobile, shown on md+) */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute top-6 -right-2 translate-x-1/2">
                    <ArrowRight className="h-4 w-4 text-zinc-400" />
                  </div>
                )}

                {/* Arrow between steps (shown on mobile, hidden on md+) */}
                {index < steps.length - 1 && (
                  <div className="md:hidden flex justify-center mt-4">
                    <ArrowDown className="h-4 w-4 text-zinc-400" />
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer line */}
          <p className="mt-12 text-center text-zinc-600 font-medium">
            No parallel systems. No reconciliation step.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 5: THE SOLUTION
   Anti lock-in block - Multicolour confetti background
============================================ */
function SolutionSection() {
  const antiPatterns = [
    "No per-store Shopify sync licences",
    "No fragile middleware dashboards",
    "No manual stock corrections",
    "No dependency on \"the person who knows how it works\"",
  ];

  return (
    <section
      className="relative py-24 md:py-32"
      style={{
        backgroundImage: 'url(/images/multicolour-confetti.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          {/* Semi-transparent overlay box */}
          <div className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Built to remove work — not add tooling
            </h2>

            <div className="mt-8 space-y-4 text-gray-300">
              <p>The industry solution has been:</p>
              <ul className="pl-4 space-y-1 text-gray-400">
                <li>• Third-party sync apps</li>
                <li>• Monthly per-store fees</li>
                <li>• Custom builds that break quietly</li>
                <li>• Or "just fix it at the end of the day"</li>
              </ul>
              <p className="pt-4 text-white font-medium">
                CurrentRMSify exists because none of that scales — even for small operators.
              </p>
            </div>

            <ul className="mt-10 space-y-4">
              {antiPatterns.map((pattern, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-base text-gray-200">{pattern}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 6: AUTHORITY BLOCK
   Built by operators, not consultants
============================================ */
function AuthoritySection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-zinc-50">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Authority headline */}
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 uppercase tracking-wider">
            Built by operators, not consultants.
          </h2>

          {/* Authority copy */}
          <div className="mt-8 space-y-6 text-base text-zinc-700 leading-relaxed">
            <p className="text-lg text-zinc-900 font-medium">
              CurrentRMSify exists because it had to.
            </p>
            <p>
              After running multiple Shopify stores alongside asset systems for years,
              it became obvious the problem wasn't misuse — it was absence.
            </p>
            <p>
              This integration wasn't prioritised because:
            </p>
            <ul className="pl-4 space-y-2 text-zinc-600">
              <li>• It doesn't sell enterprise licences</li>
              <li>• It doesn't lock customers into proprietary platforms</li>
              <li>• And it removes billable work instead of creating it</li>
            </ul>
            <p className="text-zinc-900 font-semibold pt-4">
              So it got built anyway.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 7: FROM PYRO TO PYTHON
   Flames stage background with founder story
============================================ */
function FounderSection() {
  return (
    <section className="relative py-24 md:py-32 lg:py-40 min-h-[600px]">
      {/* Background image - reduced dominance */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat opacity-40"
        style={{ backgroundImage: "url('/images/flames-stage.jpg')" }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/80" />

      <div className="container relative z-10">
        {/* Centered max-width container - same as other content blocks */}
        <div className="max-w-2xl mx-auto">
          {/* Contained box with overlay treatment */}
          <div className="bg-zinc-900/90 backdrop-blur-sm rounded-lg p-8 md:p-12">
            {/* Headline */}
            <h2 className="text-xl md:text-2xl font-bold text-white uppercase tracking-wider mb-8">
              From Pyro to Python.
            </h2>

            {/* Letter body - Context adjusted */}
            <div className="space-y-5 text-base text-gray-300 leading-relaxed">
              <p>
                Built between shows, warehouses, and real production deadlines —
                not sprint planning sessions.
              </p>
              <p>
                I've spent 15 years in live production and e-commerce, running warehouses and teams across multiple Shopify stores. I tried third-party sync tools. I waited for "official" integrations. I paid developers who didn't understand why small inefficiencies become daily fires.
              </p>
              <p>
                Eventually, I stopped waiting.
              </p>
              <p>
                CurrentRMSify exists because I needed a pipe that works inside a real operation. It runs my businesses. It doesn't chase trends or feature checklists. It removes friction without creating new problems downstream.
              </p>
              <p className="text-gray-400 italic">
                If you're happy exporting CSVs and hoping for the best, this isn't for you.
              </p>
              <p className="text-white">
                If you're tired of reconciling sales by hand, <a href="#contact" className="text-teal-400 hover:text-teal-300 underline underline-offset-2">request access</a> — and tell me where it hurts.
              </p>
            </div>

            {/* Signature Panel - email signature style: cross left, details right */}
            <div className="mt-10 pt-8 border-t border-zinc-700/50">
              <div className="flex items-start gap-6">
                {/* Left: BLASO cross - prominent, full color */}
                <div className="flex-shrink-0">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310419663032302260/kPjUNvJBuBjHWXtD.png"
                    alt="BLASO"
                    className="w-24 md:w-32 h-auto"
                  />
                </div>

                {/* Right: Details */}
                <div className="flex-1">
                  {/* Eyebrow */}
                  <p className="text-xs text-zinc-500 uppercase tracking-wider mb-3">
                    Built and operated in production.
                  </p>

                  {/* Signature - decorative */}
                  <img
                    src="/images/luke-signature.png"
                    alt=""
                    className="h-8 w-auto mb-3 invert opacity-30"
                  />

                  {/* Name */}
                  <p className="text-xl text-white font-semibold">Luke Fenech</p>

                  {/* Title */}
                  <p className="text-sm text-teal-400 font-mono tracking-wide mt-1">Chaos Engineer</p>

                  {/* Proof line */}
                  <p className="text-xs text-zinc-500 mt-2">Founder, BLASO Technology · Director, BLASO Pyrotechnics</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 8: REQUEST ACCESS
   Clean form with webhook integration
============================================ */
function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    currentSystem: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);

    try {
      const response = await fetch('https://blaso.app.n8n.cloud/webhook/crms_lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: formData.name,
          company: formData.company,
          email: formData.email,
          current_system: formData.currentSystem,
          message: formData.message,
          source: 'currentrmsify_website',
          timestamp: new Date().toISOString(),
        }),
      });

      if (!response.ok) {
        throw new Error('Submission failed');
      }

      setIsSubmitted(true);
    } catch (err) {
      setError('Something went wrong. Please try again or email us directly.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <section id="contact" className="py-20 md:py-24 lg:py-28 bg-white">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            <div className="text-center">
              <Check className="h-12 w-12 text-teal-500 mx-auto" />
              <h2 className="mt-6 text-2xl md:text-3xl font-semibold tracking-tight">
                Request received
              </h2>
              <p className="mt-4 text-base text-zinc-600">
                We'll be in touch within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-20 md:py-24 lg:py-28 bg-white">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">
            Request access
          </h2>
          <p className="mt-4 text-base text-zinc-600">
            If you sell through Shopify and manage assets in Current RMS, this should already exist.
          </p>

          {/* Framing text - hard filter */}
          <div className="mt-8 p-5 bg-zinc-900 border-l-4 border-orange-500 rounded-lg">
            <p className="text-sm text-white leading-relaxed font-medium">
              This isn't a demo. Access is granted to operators who want the problem gone — not explained.
            </p>
            <p className="text-sm text-zinc-400 mt-2">
              If you're still researching solutions, that's fine — but this is built for people ready to stop reconciling.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="mt-10 space-y-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="text-sm font-medium">
                Name
              </Label>
              <Input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="company" className="text-sm font-medium">
                Company
              </Label>
              <Input
                id="company"
                type="text"
                required
                value={formData.company}
                onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              <Input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="h-12"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="currentSystem" className="text-sm font-medium">
                Current setup
              </Label>
              <Select
                value={formData.currentSystem}
                onValueChange={(value) => setFormData({ ...formData, currentSystem: value })}
              >
                <SelectTrigger id="currentSystem" className="h-12">
                  <SelectValue placeholder="Select your current setup" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shopify_currentrms">Shopify + Current RMS</SelectItem>
                  <SelectItem value="shopify_only">Shopify only</SelectItem>
                  <SelectItem value="currentrms_only">Current RMS only</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Where does reconciliation hurt most? <span className="text-zinc-400 font-normal">(optional)</span>
              </Label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Stock drift? End-of-day exports? Sales items not matching? Include rough order volume if relevant."
                className="w-full px-3 py-3 border border-zinc-200 rounded-md text-sm resize-none focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
              />
            </div>

            {error && (
              <p className="text-sm text-red-600">{error}</p>
            )}

            {/* Solid teal submit button - proceed with action */}
            <button
              type="submit"
              className="h-12 px-8 text-base font-medium text-white rounded-md transition-all w-full md:w-auto disabled:opacity-50 bg-teal-500 hover:bg-teal-600"
              disabled={isSubmitting}
            >
              {isSubmitting ? "Submitting..." : isSubmitted ? "Request received. We'll review fit." : "Request Access"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 9: WHY CURRENTRMSIFY
   Wedding fireworks background (closing emotional statement)
============================================ */
function WhySection() {
  return (
    <section
      className="relative py-24 md:py-32"
      style={{
        backgroundImage: 'url(/images/wedding-fireworks.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center top',
      }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/70" />

      <div className="container relative z-10">
        <div className="max-w-2xl mx-auto">
          <div className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
            {/* Closing statement */}
            <div className="space-y-6 text-gray-300 leading-relaxed">
              <p className="text-xl md:text-2xl text-white font-semibold leading-tight">
                If Shopify and Current RMS both matter to your operation,<br />
                this should already exist.
              </p>
              <p className="text-2xl md:text-3xl text-white font-bold">
                Now it does.
              </p>
            </div>

            {/* Final CTA */}
            <div className="mt-10 pt-8 border-t border-zinc-700">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 text-base font-medium text-white rounded-md transition-all bg-teal-500 hover:bg-teal-600"
              >
                Request Access
                <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
