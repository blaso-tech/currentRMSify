/*
 * RENTMANIFY HOME PAGE
 * Style: Production Energy + Operational Credibility
 * 
 * NEW 9-SECTION FLOW:
 * 1. HERO - Sparks/Hordern crowd background
 * 2. THE PROBLEM - Clean/white with Shopify vs Rentman screenshots
 * 3. WHAT RENTMANIFY DOES - CO2 jets crowd background
 * 4. HOW IT WORKS - Clean with Shopify → Rentmanify → Rentman logo flow
 * 5. THE SOLUTION - Multicolour confetti background with mockup
 * 6. AUTHORITY BLOCK - Clean with anti-SaaS positioning
 * 7. FROM PYRO TO PYTHON - Flames stage background with founder story
 * 8. REQUEST ACCESS - Clean/white with functional form
 * 9. WHY RENTMANIFY - Wedding fireworks background (closing statement)
 * 
 * CTA Psychology:
 * - Header: Solid teal (proceed, navigate)
 * - Hero: Solid orange (pause, attention)
 * - Form submit: Solid teal (proceed with action)
 */

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { ArrowRight, AlertCircle, Check, ArrowDown, X, ZoomIn } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Dark Header */}
      <header className="bg-black py-4">
        <div className="container">
          <div className="flex items-center justify-between">
            {/* Logo: Chain link icon + RENTMANIFY wordmark */}
            <a href="/" className="flex items-center gap-3">
              <img 
                src="/images/rentmanify-icon.jpg" 
                alt="Rentmanify" 
                className="h-10 w-auto rounded"
              />
              <span className="text-white text-lg font-semibold tracking-wider uppercase">
                Rentmanify
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
        
        {/* Section 2: THE PROBLEM - Clean with Shopify vs Rentman screenshots */}
        <ProblemSection />
        
        {/* Section 3: WHAT RENTMANIFY DOES - CO2 jets background */}
        <WhatRentmanifyDoesSection />
        
        {/* Section 4: HOW IT WORKS - Clean with logo flow */}
        <HowItWorksSection />
        
        {/* Section 5: THE SOLUTION - Multicolour confetti background */}
        <SolutionSection />
        
        {/* Section 6: AUTHORITY BLOCK - Clean anti-SaaS positioning */}
        <AuthoritySection />
        
        {/* Section 7: FROM PYRO TO PYTHON - Flames background */}
        <FounderSection />
        
        {/* Section 8: WHAT'S NEXT - Feature roadmap */}
        <WhatsNextSection />
        
        {/* Section 9: REQUEST ACCESS - Clean form */}
        <ContactSection />
        
        {/* Section 9: WHY RENTMANIFY - Wedding fireworks (closing) */}
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
              Built For Rentman Operators ✦ Built Without Permission
            </p>
            
            {/* Disclaimer */}
            <p className="text-xs text-gray-500 max-w-lg leading-relaxed">
              Rentmanify is an independent service and is not affiliated with or endorsed by Rentman, Shopify or Stripe. All trademarks belong to their respective owners.
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
            
            {/* Chain link logo + RENTMANIFY */}
            <div className="flex flex-col items-center gap-3 pt-4">
              <img 
                src="/images/rentmanify-icon.jpg" 
                alt="Rentmanify" 
                className="h-12 w-auto rounded opacity-60"
              />
              <span className="text-xs text-gray-500 tracking-widest uppercase">
                Rentmanify
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
          <p className="text-sm font-medium text-teal-400 uppercase tracking-widest mb-4">BUILT FOR LIVE PRODUCTION</p>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight leading-tight text-white">
            No double-handling. No retyping. Intergrated and Automated. 
          </h1>
          <p className="mt-6 text-lg text-gray-300 leading-relaxed">
            Turn Shopify, Stripe & Enquiries into Rentman Project Requests.
          </p>
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
   Clean white with Shopify vs Rentman screenshots
============================================ */
function ProblemSection() {
  return (
    <section className="py-20 md:py-24 lg:py-28 bg-zinc-50">
      <div className="container">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-center mb-4">
            The problem
          </h2>
          <p className="text-center text-zinc-600 mb-12 max-w-2xl mx-auto">
            Your data lives in two worlds that don't talk to each other.
          </p>
          
          {/* HORIZONTAL LAYOUT: Shopify row → Gap → Rentman row */}
          <div className="space-y-8">
            {/* Shopify Row */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/shopify-logo.webp" alt="Shopify" className="h-8 w-auto" />
                <span className="text-lg font-semibold text-zinc-800">Shopify</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Shopify Orders Screenshot */}
                <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-sm bg-white">
                  <p className="text-xs font-medium text-zinc-500 px-4 py-2 bg-zinc-100 border-b border-zinc-200">
                    Orders
                  </p>
                  <img 
                    src="/images/shopify-orders.png" 
                    alt="Shopify Orders interface" 
                    className="w-full h-auto"
                  />
                </div>
                {/* Shopify Products Screenshot */}
                <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-sm bg-white">
                  <p className="text-xs font-medium text-zinc-500 px-4 py-2 bg-zinc-100 border-b border-zinc-200">
                    Products
                  </p>
                  <img 
                    src="/images/shopify-products.png" 
                    alt="Shopify Products interface" 
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
            
            {/* THE GAP - Horizontal Separator */}
            <div className="py-6">
              <div className="flex items-center gap-4">
                <div className="flex-1 h-px bg-gradient-to-r from-transparent via-zinc-300 to-zinc-300" />
                <div className="px-6 py-4 bg-zinc-100 border border-zinc-200 rounded-lg max-w-md text-center">
                  <p className="text-xs font-semibold text-orange-600 uppercase tracking-wider mb-2">The Gap</p>
                  <p className="text-sm text-zinc-600 leading-relaxed">
                    Orders arrive in Shopify. Your warehouse runs on Rentman. Someone ends up retyping every order, every enquiry, every line item.
                  </p>
                </div>
                <div className="flex-1 h-px bg-gradient-to-r from-zinc-300 via-zinc-300 to-transparent" />
              </div>
            </div>
            
            {/* Rentman Row */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <img src="/images/rentman-logo.png" alt="Rentman" className="h-8 w-auto" />
                <span className="text-lg font-semibold text-zinc-800">Rentman</span>
              </div>
              <div className="grid md:grid-cols-2 gap-4">
                {/* Rentman Projects Screenshot */}
                <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-sm bg-white">
                  <p className="text-xs font-medium text-zinc-500 px-4 py-2 bg-zinc-100 border-b border-zinc-200">
                    Projects
                  </p>
                  <img 
                    src="/images/rentman-projects.png" 
                    alt="Rentman Projects interface" 
                    className="w-full h-auto"
                  />
                </div>
                {/* Rentman Equipment Screenshot */}
                <div className="border border-zinc-200 rounded-lg overflow-hidden shadow-sm bg-white">
                  <p className="text-xs font-medium text-zinc-500 px-4 py-2 bg-zinc-100 border-b border-zinc-200">
                    Equipment
                  </p>
                  <img 
                    src="/images/rentman-equipment.png" 
                    alt="Rentman Equipment interface" 
                    className="w-full h-auto"
                  />
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
   SECTION 3: WHAT RENTMANIFY DOES
   CO2 jets crowd background
============================================ */
function WhatRentmanifyDoesSection() {
  const solutions = [
    "Shopify orders → Rentman Project Requests",
    "Stripe payments → linked references",
    "Web enquiries → structured requests",
    "No pricing forced",
    "Human checkpoint before confirmation",
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
              What Rentmanify does
            </h2>
            <ul className="mt-8 space-y-4">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-3">
                  <Check className="h-5 w-5 text-teal-400 mt-0.5 shrink-0" />
                  <span className="text-base text-gray-200">{solution}</span>
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
   Clean with brand logos flow diagram
============================================ */
function HowItWorksSection() {
  const steps = [
    {
      number: "01",
      title: "External input",
      description: "Shopify order, Stripe payment, or web enquiry form",
    },
    {
      number: "02",
      title: "Rentmanify standardises",
      description: "Data is validated, mapped, and structured",
    },
    {
      number: "03",
      title: "Project Request appears",
      description: "Ready for review in Rentman",
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
              {/* Input sources with logos */}
              <div className="flex flex-col items-center gap-3">
                <div className="flex items-center gap-3 px-4 py-3 border border-zinc-200 bg-white rounded min-w-[140px]">
                  <img src="/images/shopify-logo.webp" alt="Shopify" className="h-6 w-auto" />
                  <span className="text-sm font-medium">Shopify</span>
                </div>
                <div className="flex items-center gap-3 px-4 py-3 border border-zinc-200 bg-white rounded min-w-[140px]">
                  <img src="/images/stripe-logo.png" alt="Stripe" className="h-5 w-auto" />
                </div>
                <div className="flex items-center gap-3 px-4 py-3 border border-zinc-200 bg-white rounded min-w-[140px]">
                  <span className="text-sm text-zinc-600">Web Form</span>
                </div>
              </div>
              
              <ArrowRight className="h-6 w-6 text-zinc-400 hidden md:block" />
              <ArrowDown className="h-6 w-6 text-zinc-400 md:hidden" />
              
              {/* Rentmanify */}
              <div className="flex items-center gap-3 px-6 py-4 border-2 border-teal-500 bg-white rounded-lg">
                <img src="/images/rentmanify-icon.jpg" alt="Rentmanify" className="h-8 w-auto rounded" />
                <span className="font-semibold">Rentmanify</span>
              </div>
              
              <ArrowRight className="h-6 w-6 text-zinc-400 hidden md:block" />
              <ArrowDown className="h-6 w-6 text-zinc-400 md:hidden" />
              
              {/* Rentman output */}
              <div className="flex items-center gap-3 px-6 py-4 border border-zinc-200 bg-white rounded">
                <img src="/images/rentman-logo.png" alt="Rentman" className="h-8 w-auto" />
                <div className="text-left">
                  <span className="font-medium block">Rentman</span>
                  <span className="text-zinc-500 text-xs">Project Request</span>
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
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 5: THE SOLUTION
   Multicolour confetti background with clickable mockup modal
============================================ */
function SolutionSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleOpenModal = () => {
    setIsModalOpen(true);
    // Track click event for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'mockup_view', {
        event_category: 'engagement',
        event_label: 'solution_mockup_click'
      });
    }
    console.log('[Analytics] Mockup viewed');
  };
  
  const handleCloseModal = () => {
    setIsModalOpen(false);
  };
  
  return (
    <>
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
          <div className="max-w-4xl mx-auto">
            {/* Semi-transparent overlay box */}
            <div className="bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-lg">
              <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white text-center mb-4">
                What you'll see in Rentman
              </h2>
              <p className="text-gray-300 text-center mb-8">
                Structured data, ready for review. No retyping required.
              </p>
              
              {/* Clickable mockup screenshot */}
              <button
                onClick={handleOpenModal}
                className="relative w-full group cursor-pointer border border-zinc-700 rounded-lg overflow-hidden shadow-2xl bg-white transition-all hover:border-teal-500 hover:shadow-teal-500/20"
              >
                <img 
                  src="/images/mockup-combined.png" 
                  alt="Rentman Project Requests created by Rentmanify - Click to enlarge" 
                  className="w-full h-auto"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all flex items-center justify-center">
                  <div className="opacity-0 group-hover:opacity-100 transition-opacity bg-white/90 px-4 py-2 rounded-full flex items-center gap-2">
                    <ZoomIn className="h-4 w-4 text-zinc-800" />
                    <span className="text-sm font-medium text-zinc-800">Click to view full size</span>
                  </div>
                </div>
              </button>
              
              <p className="text-center text-sm text-gray-400 mt-6">
                Every order, enquiry, and payment becomes a structured Project Request — 
                complete with customer details, line items, and references.
              </p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Lightbox Modal */}
      {isModalOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-sm"
          onClick={handleCloseModal}
        >
          {/* Close button */}
          <button
            onClick={handleCloseModal}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          {/* Modal content */}
          <div 
            className="max-w-6xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src="/images/mockup-combined.png" 
              alt="Rentman Project Requests created by Rentmanify - Full size view" 
              className="w-full h-auto"
            />
          </div>
          
          {/* Instructions */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Click anywhere or press ESC to close
          </p>
        </div>
      )}
    </>
  );
}

/* ============================================
   SECTION 6: AUTHORITY BLOCK
   Clean anti-SaaS positioning + self-serve off-ramp
============================================ */
function AuthoritySection() {
  const [isPricingOpen, setIsPricingOpen] = useState(false);
  
  return (
    <>
      <section className="py-20 md:py-24 lg:py-28 bg-zinc-50">
        <div className="container">
          <div className="max-w-2xl mx-auto">
            {/* Authority headline */}
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-zinc-900 uppercase tracking-wider">
              This is not a passive plugin.
            </h2>
            
            {/* Authority copy */}
            <div className="mt-8 space-y-6 text-base text-zinc-700 leading-relaxed">
              <p>
                Plugins guess how your warehouse works. <span className="font-semibold text-zinc-900">We actually run one.</span>
              </p>
              <p>
                Rentmanify isn't a generic "black box" app built by developers who have never packed a flight case. 
                It's operational plumbing — built to survive show week.
              </p>
              <p>
                We don't just "sync data." We map your workflow, then build the pipe that holds.
              </p>
              <p className="text-zinc-900 font-semibold">
                You aren't paying for a login. You're investing in a system that works on show day.
              </p>
            </div>
            
            {/* Divider */}
            <div className="my-10 border-t border-zinc-200" />
            
            {/* Self-serve off-ramp */}
            <div className="text-sm text-zinc-500">
              <p>
                Not every operation needs a custom build. Self-serve access is available for operators who want to move quickly.
              </p>
              <button 
                onClick={() => setIsPricingOpen(true)}
                className="inline-flex items-center mt-3 text-teal-600 hover:text-teal-700 font-medium cursor-pointer"
              >
                View Plans →
              </button>
            </div>
          </div>
        </div>
      </section>
      
      {/* Stripe Pricing Modal */}
      {isPricingOpen && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
          onClick={() => setIsPricingOpen(false)}
        >
          {/* Close button */}
          <button
            onClick={() => setIsPricingOpen(false)}
            className="absolute top-4 right-4 p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          >
            <X className="h-6 w-6 text-white" />
          </button>
          
          {/* Modal content */}
          <div 
            className="w-full max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-lg shadow-2xl p-6"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-zinc-900 mb-6 text-center">Choose Your Plan</h3>
            {/* Stripe Pricing Table - script loaded in index.html */}
            <div 
              ref={(el) => {
                if (el && !el.querySelector('stripe-pricing-table')) {
                  const table = document.createElement('stripe-pricing-table');
                  table.setAttribute('pricing-table-id', 'prctbl_1SC4V51ryDMi8Ls1ehSZMEfu');
                  table.setAttribute('publishable-key', 'pk_live_51SBOjT1ryDMi8Ls1s7Il4rveIKuB5WDUIZKQfgjx6Kwo0ZahFdN6zJEhoFwII4G5Nesq1xGdjkueqODvHrKhCLCD00x90HOhFf');
                  el.appendChild(table);
                }
              }}
            />
          </div>
          
          {/* Instructions */}
          <p className="absolute bottom-4 left-1/2 -translate-x-1/2 text-white/60 text-sm">
            Click anywhere outside to close
          </p>
        </div>
      )}
    </>
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
            
            {/* Letter body - Tightened version */}
            <div className="space-y-5 text-base text-gray-300 leading-relaxed">
              <p>
                This wasn't built in a boardroom.
              </p>
              <p>
                It was built between shows, orders, breakdowns — and the kind of late nights you only do when the system has to work tomorrow.
              </p>
              <p>
                I've spent 15 years in live production and e-commerce, running warehouses and teams across multiple Shopify stores. I tried plugins. I waited for "official" integrations. I paid developers who didn't understand why small inefficiencies become daily fires.
              </p>
              <p>
                Eventually, I stopped waiting.
              </p>
              <p>
                Rentmanify exists because I needed a pipe that works inside a real operation. It runs my businesses. It doesn't chase trends or feature checklists. It removes friction without creating new problems downstream.
              </p>
              <p className="text-gray-400 italic">
                If you're happy exporting CSVs and hoping for the best, this isn't for you.
              </p>
              <p className="text-white">
                If you're tired of retyping your life into software, <a href="#contact" className="text-teal-400 hover:text-teal-300 underline underline-offset-2">request access</a> — and tell me where it hurts.
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
   SECTION 8: WHAT'S NEXT
   Feature roadmap - coming soon features
============================================ */
function WhatsNextSection() {
  const features = [
    {
      title: "Live Availability Sync",
      description: "Real-time Shopify product availability driven by Rentman stock.",
      status: "Running in production"
    },
    {
      title: "Shipping Tracking Integration",
      description: "Push tracking numbers and carrier data to Rentman custom fields.",
      status: "Available to beta operators"
    },
    {
      title: "Merchant Fee Reconciliation",
      description: "Automatic tracking and reconciliation of payment processing fees.",
      status: "Available to beta operators"
    },
    {
      title: "Bidirectional Stock Sync",
      description: "Two-way inventory synchronisation between Shopify and Rentman.",
      status: "In active development"
    },
    {
      title: "Undisclosed Automation",
      description: "Not everything belongs on a roadmap.",
      status: "Intentionally undisclosed"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Running in production":
        return "bg-teal-500/20 text-teal-400";
      case "Available to beta operators":
        return "bg-orange-500/20 text-orange-400";
      case "In active development":
        return "bg-zinc-600 text-zinc-300";
      case "Intentionally undisclosed":
        return "bg-zinc-800 text-zinc-500 italic";
      default:
        return "bg-zinc-700 text-zinc-400";
    }
  };

  return (
    <section className="py-16 md:py-20 bg-zinc-900">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="mb-10">
            <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">What's Next</p>
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Beyond the Core Integration
            </h2>
          </div>
          
          {/* Grounding paragraph */}
          <div className="mb-10 text-base text-gray-400 leading-relaxed space-y-4">
            <p>
              Rentmanify started with one integration because that was the biggest fire.
            </p>
            <p>
              Behind it, additional automation already exists to keep real warehouses moving — quietly, without launch posts, promises, or permission.
            </p>
            <p className="text-gray-500">
              Not everything here is publicly released. Some of it only makes sense in the right operation.
            </p>
          </div>
          
          {/* Feature list */}
          <div className="space-y-3">
            {features.map((feature, index) => (
              <div 
                key={index}
                className={`flex items-start gap-4 p-4 bg-zinc-800/30 border border-zinc-800 rounded-lg transition-all ${feature.status !== 'Intentionally undisclosed' ? 'hover:translate-y-[-2px] hover:border-teal-500/30 hover:shadow-lg hover:shadow-teal-500/5' : ''}`}
              >
                <div className="flex-1">
                  <div className="flex items-center gap-3 flex-wrap">
                    <h3 className="text-white font-medium">{feature.title}</h3>
                    <span className={`text-xs px-2 py-0.5 rounded-full ${getStatusColor(feature.status)}`}>
                      {feature.status}
                    </span>
                  </div>
                  <p className="text-sm text-gray-500 mt-1">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
          
          {/* Soft CTA */}
          <p className="text-sm text-gray-500 mt-10 border-t border-zinc-800 pt-6">
            If one of these hits a current pain point, mention it in your request.
          </p>
          
          {/* Disclaimer */}
          <p className="text-xs text-zinc-600 mt-6">
            Features are released based on operational fit, not demand.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ============================================
   SECTION 9: REQUEST ACCESS
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
      const response = await fetch('https://blaso.app.n8n.cloud/webhook/rm_lead', {
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
          source: 'rentmanify_website',
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
            If you use Rentman and want to eliminate double handling, request access.
          </p>
          
          {/* Framing text - gate, not instructions */}
          <div className="mt-8 p-5 bg-zinc-900 border-l-4 border-orange-500 rounded-lg">
            <p className="text-sm text-white leading-relaxed font-medium">
              This isn't a demo request. Access is granted to operators actively removing friction.
            </p>
            <p className="text-sm text-zinc-400 mt-2">
              If you're still deciding, that's fine — but this is built for people ready to implement.
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
                Current system
              </Label>
              <Select
                value={formData.currentSystem}
                onValueChange={(value) => setFormData({ ...formData, currentSystem: value })}
              >
                <SelectTrigger id="currentSystem" className="h-12">
                  <SelectValue placeholder="Select your current system" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="shopify">Shopify</SelectItem>
                  <SelectItem value="stripe">Stripe</SelectItem>
                  <SelectItem value="both">Shopify + Stripe</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="message" className="text-sm font-medium">
                Where does it break? <span className="text-zinc-400 font-normal">(optional)</span>
              </Label>
              <textarea
                id="message"
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Where does double-handling hit hardest?&#10;(Shopify → Rentman, enquiries, shipping/tracking, stock, fees/reconciliation, other)&#10;Include your current system + rough order volume if relevant."
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
   SECTION 9: WHY RENTMANIFY
   Wedding fireworks background (closing emotional statement)
============================================ */
function WhySection() {
  const reasons = [
    "Built by operators using Rentman daily",
    "Designed around Project Requests",
    "No forced pricing logic",
    "No stock assumptions",
    "No disruption to your existing setup",
  ];

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
            <h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-white">
              Why Rentmanify
            </h2>
            <ul className="mt-8 space-y-4">
              {reasons.map((reason, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-sm font-semibold text-orange-500 mt-0.5 w-6">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <span className="text-base text-gray-200">{reason}</span>
                </li>
              ))}
            </ul>
            
            {/* Final CTA */}
            <div className="mt-10 pt-8 border-t border-zinc-700">
              <p className="text-gray-300 mb-6">
                Ready to stop the double handling?
              </p>
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
